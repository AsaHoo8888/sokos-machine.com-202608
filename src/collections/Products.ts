import type { Access, CollectionConfig, FieldHook } from "payload";
import { youtubeEmbedUrl } from "../lib/youtube.ts";

const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const productCategoryOptions = [
  "water-treatment", "blending", "blow-molding-machine", "filling-machine",
  "labeling-machine", "packaging-machine", "palletizing-machine", "co2-mixer", "depalletizer",
];

export const productFamilyOptions = [
  "water-filling-machine", "carbonated-beverages-filling-machine", "juice-filling-machine",
  "glass-bottle-beer-filling-machine", "auxiliary", "water-filling-monoblock",
];

export function validateParameters(value: unknown) {
  if (typeof value === "string") {
    try { value = JSON.parse(value); }
    catch { return "请输入有效的 JSON 参数表格"; }
  }
  return (Array.isArray(value) && value.length > 0 && value.every((row) =>
    Array.isArray(row) && row.length >= 2 && row.every((cell) => typeof cell === "string")
  )) || "参数必须是非空的二维字符串数组，每行至少两列";
}

// Payload's fallback clone turns nested JSON arrays into objects on partial updates.
export const preserveParameterTable: FieldHook = ({ operation, siblingData, previousValue, value }) =>
  operation === "update" && siblingData.parameters === undefined ? previousValue : value;

export const Products: CollectionConfig = {
  slug: "products",
  labels: { singular: "产品", plural: "产品" },
  admin: { useAsTitle: "title", defaultColumns: ["title", "model", "categorySlug", "status"] },
  defaultSort: "sortOrder",
  access: {
    create: authenticated,
    delete: authenticated,
    read: ({ req: { user } }) => user ? true : { status: { equals: "published" } },
    update: authenticated,
  },
  fields: [
    { name: "title", label: "产品名称", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true,
      validate: (value: unknown) => (typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) || "请输入小写字母、数字和连字符组成的网址标识" },
    { name: "model", label: "型号", type: "text", required: true },
    { name: "categorySlug", label: "产品分类", type: "select", options: productCategoryOptions, required: true, index: true },
    { name: "family", label: "系列 / 旧版页面分组", type: "select", options: productFamilyOptions, required: true, index: true },
    { name: "categoryLabel", label: "辅助设备分类名称", type: "text" },
    { name: "image", label: "现有图片路径", type: "text", required: true, defaultValue: "/images/product-filling-machine.jpg",
      admin: { description: "使用 /images/... 本站路径；上传主图后优先显示上传图片。" },
      validate: (value: unknown) => (typeof value === "string" && /^\/(?!\/)/.test(value)) || "请输入以 / 开头的本站图片路径" },
    { name: "coverImage", label: "上传主图", type: "upload", relationTo: "media", filterOptions: { mimeType: { contains: "image/" } } },
    { name: "videoUrl", label: "YouTube 视频链接", type: "text",
      validate: (value: unknown) => !value || Boolean(youtubeEmbedUrl(value)) || "请输入有效的 YouTube 视频链接" },
    { name: "heads", label: "灌装头配置", type: "text" },
    { name: "shortDescription", label: "产品简介", type: "textarea", required: true },
    { name: "description", label: "详细介绍", type: "array", fields: [{ name: "text", type: "textarea", required: true }] },
    { name: "highlights", label: "产品特点", type: "array", fields: [{ name: "text", type: "text", required: true }] },
    { name: "parameters", label: "技术参数", type: "json", required: true, validate: validateParameters,
      hooks: { beforeValidate: [preserveParameterTable] },
      admin: { description: '二维表格，例如 [["Parameter", "Value"], ["Capacity", "2000 BPH"]]；保留多型号表格的全部列。' } },
    { name: "sortOrder", label: "排序", type: "number", defaultValue: 0, required: true },
    { name: "status", type: "select", options: ["draft", "published", "archived"], defaultValue: "draft", required: true },
    { name: "seoTitle", type: "text" },
    { name: "seoDescription", type: "textarea" },
  ],
};

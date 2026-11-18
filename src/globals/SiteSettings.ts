import type { Access, GlobalConfig } from "payload";

const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
    update: authenticated,
  },
  label: "Site Settings",
  fields: [
    { name: "siteName", type: "text", required: true },
    {
      name: "tracking",
      label: "追踪工具 / Tracking",
      type: "group",
      admin: {
        description: "留空即关闭。若已通过 GTM 安装 GA4 或 Clarity，请勿重复填写。其他广告像素可通过 GTM 配置。启用前请更新隐私政策，并按需在 GTM 配置用户同意管理。",
      },
      fields: [
        {
          name: "gtmId",
          label: "Google Tag Manager 容器 ID",
          type: "text",
          admin: { placeholder: "GTM-XXXXXXX" },
          validate: (value: string | null | undefined) =>
            !value || /^GTM-[A-Z0-9]+$/.test(value) || "请输入有效的 GTM ID，例如 GTM-XXXXXXX",
        },
        {
          name: "gaId",
          label: "Google Analytics 4 衡量 ID",
          type: "text",
          admin: { placeholder: "G-XXXXXXXXXX" },
          validate: (value: string | null | undefined) =>
            !value || /^G-[A-Z0-9]+$/.test(value) || "请输入有效的 GA4 ID，例如 G-XXXXXXXXXX",
        },
        {
          name: "clarityId",
          label: "Microsoft Clarity 项目 ID",
          type: "text",
          admin: { placeholder: "abcdefghij" },
          validate: (value: string | null | undefined) =>
            !value || /^[a-z0-9]+$/.test(value) || "请输入 Clarity 项目 ID（小写字母和数字）",
        },
      ],
    },
  ],
};

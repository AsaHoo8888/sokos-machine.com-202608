import { productCategoryDefinitions } from "../../../lib/product-categories.ts";
import {
  carbonatedFillingProducts,
} from "./carbonated-beverages-filling-machine/data.ts";
import {
  glassBottleBeerProducts,
} from "./glass-bottle-beer-filling-machine/data.ts";
import {
  juiceFillingProducts,
} from "./juice-filling-machine/data.ts";
import {
  waterFillingProducts,
} from "./water-filling-machine/data.ts";
import { auxiliaryProducts, type AuxiliaryProduct } from "./auxiliary/data.ts";

export type Product = {
  categorySlug: string;
  model: string;
  slug: string;
  title: string;
  image: string;
  heads?: string;
  shortDescription: string;
  description?: string[];
  highlights?: string[];
  parameters: string[][];
};

export type ProductCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  code: string;
  metric: string;
  products: Product[];
};

type FillingProductSource = Omit<Product, "categorySlug" | "parameters"> & {
  parameters: readonly (readonly string[])[];
};

const normalizeParameters = (parameters: readonly (readonly string[])[]) =>
  parameters.map((row) => [...row]);

function fromFillingProducts(
  categorySlug: string,
  products: FillingProductSource[],
): Product[] {
  return products.map((product) => ({
    ...product,
    categorySlug,
    parameters: normalizeParameters(product.parameters),
  }));
}

function fromAuxiliaryProducts(categorySlug: string, products: AuxiliaryProduct[]): Product[] {
  return products.map((product) => ({
    categorySlug,
    description: product.description,
    highlights: product.highlights,
    image: product.image,
    model: product.code,
    parameters: product.parameters,
    shortDescription: product.shortDescription,
    slug: product.slug,
    title: product.title,
  }));
}

const auxiliaryBySlug = (slugs: string[]) =>
  auxiliaryProducts.filter((product) => slugs.includes(product.slug));

const fillingProducts = [
  ...fromFillingProducts("filling-machine", waterFillingProducts),
  ...fromFillingProducts("filling-machine", carbonatedFillingProducts),
  ...fromFillingProducts("filling-machine", juiceFillingProducts),
  ...fromFillingProducts("filling-machine", glassBottleBeerProducts),
];

const auxiliarySlugs: Record<string, string[]> = {
  "water-treatment": ["water-treatment-system"],
  blending: ["juice-blending-system"],
  "blow-molding-machine": ["fully-automatic-blow-molding-machine"],
  "labeling-machine": ["rotary-opp-labeling-machine", "rotary-self-adhesive-labeler", "linear-self-adhesive-labeler", "shrink-sleeve-labeler"],
  "packaging-machine": ["shrink-wrap-machine"],
  "palletizing-machine": ["palletizer"],
  "co2-mixer": ["co2-mixer"],
  depalletizer: ["depalletizer"],
};

export const productCategories: ProductCategory[] = productCategoryDefinitions.map((category) => ({
  ...category,
  products: category.slug === "filling-machine" ? fillingProducts : fromAuxiliaryProducts(category.slug, auxiliaryBySlug(auxiliarySlugs[category.slug])),
}));

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  return getProductCategory(categorySlug)?.products.find(
    (product) => product.slug === productSlug,
  );
}

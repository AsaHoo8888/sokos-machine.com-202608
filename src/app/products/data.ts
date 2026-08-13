import {
  carbonatedFillingProducts,
  categoryDescription as carbonatedDescription,
} from "@/app/products/carbonated-beverages-filling-machine/data";
import {
  categoryDescription as beerDescription,
  glassBottleBeerProducts,
} from "@/app/products/glass-bottle-beer-filling-machine/data";
import {
  categoryDescription as juiceDescription,
  juiceFillingProducts,
} from "@/app/products/juice-filling-machine/data";
import {
  categoryDescription as waterDescription,
  waterFillingProducts,
} from "@/app/products/water-filling-machine/data";
import { auxiliaryProducts, type AuxiliaryProduct } from "@/app/products/auxiliary/data";

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

export const productCategories: ProductCategory[] = [
  {
    slug: "water-treatment",
    title: "Water Treatment",
    eyebrow: "Front-End Purification",
    description:
      "RO purification, filtration, UV sterilization, ozone treatment, and process water preparation for beverage plants.",
    image: "/images/products/auxiliary/water-treatment.png",
    code: "WTS",
    metric: "2-30T/H",
    products: fromAuxiliaryProducts("water-treatment", auxiliaryBySlug(["water-treatment-system"])),
  },
  {
    slug: "blending",
    title: "Blending",
    eyebrow: "Beverage Preparation",
    description:
      "Ingredient dissolving, syrup preparation, juice blending, hot/cold mixing, CIP, and sanitary tank systems.",
    image: "/images/products/auxiliary/juice-blending-system.png",
    code: "MIX",
    metric: "CIP Ready",
    products: fromAuxiliaryProducts("blending", auxiliaryBySlug(["juice-blending-system"])),
  },
  {
    slug: "blow-molding-machine",
    title: "Blow Molding Machine",
    eyebrow: "PET Bottle Forming",
    description:
      "Servo PET bottle blow molding systems for stable bottle forming before filling and packaging.",
    image: "/images/products/auxiliary/blow-molding-machine.png",
    code: "BBM",
    metric: "Servo Drive",
    products: fromAuxiliaryProducts(
      "blow-molding-machine",
      auxiliaryBySlug(["fully-automatic-blow-molding-machine"]),
    ),
  },
  {
    slug: "filling-machine",
    title: "Filling Machine",
    eyebrow: "Core Monoblock Systems",
    description:
      "Water, carbonated drink, juice, and glass bottle beer rinsing, filling, and capping machines.",
    image: "/images/products/water-filling-60-head.jpg",
    code: "FILL",
    metric: `${fillingProducts.length} Models`,
    products: fillingProducts,
  },
  {
    slug: "labeling-machine",
    title: "Labeling Machine",
    eyebrow: "Container Decoration",
    description:
      "Rotary OPP, rotary self-adhesive, linear self-adhesive, and shrink sleeve labeling systems.",
    image: "/images/products/auxiliary/rotary-self-adhesive-labeler.png",
    code: "LBL",
    metric: "4 Types",
    products: fromAuxiliaryProducts(
      "labeling-machine",
      auxiliaryBySlug([
        "rotary-opp-labeling-machine",
        "rotary-self-adhesive-labeler",
        "linear-self-adhesive-labeler",
        "shrink-sleeve-labeler",
      ]),
    ),
  },
  {
    slug: "packaging-machine",
    title: "Packaging Machine",
    eyebrow: "End-of-Line Packing",
    description:
      "Shrink wrapping and pack formation systems for bottle bundles, trays, cartons, and finished packs.",
    image: "/images/products/auxiliary/shrink-wrap-machine.png",
    code: "PKG",
    metric: "22-60 PPM",
    products: fromAuxiliaryProducts("packaging-machine", auxiliaryBySlug(["shrink-wrap-machine"])),
  },
  {
    slug: "palletizing-machine",
    title: "Palletizing Machine",
    eyebrow: "Automatic Stacking",
    description:
      "Finished pack stacking, pallet handling, layer formation, and automated warehouse transfer preparation.",
    image: "/images/products/auxiliary/palletizer.png",
    code: "PAL",
    metric: "Auto Stack",
    products: fromAuxiliaryProducts("palletizing-machine", auxiliaryBySlug(["palletizer"])),
  },
  {
    slug: "co2-mixer",
    title: "CO2 Mixer",
    eyebrow: "Carbonation Control",
    description:
      "Sanitary carbon dioxide mixing equipment for sparkling water, soda, cola, and carbonated beverages.",
    image: "/images/products/co2-mixer.jpg",
    code: "CO2",
    metric: "Pressure Control",
    products: fromAuxiliaryProducts("co2-mixer", auxiliaryBySlug(["co2-mixer"])),
  },
  {
    slug: "depalletizer",
    title: "Depalletizer",
    eyebrow: "Empty Container Handling",
    description:
      "Automatic bottle, can, and pallet unloading systems for high-speed filling line infeed.",
    image: "/images/products/auxiliary/depalletizer.png",
    code: "DEP",
    metric: "200-600 BPM",
    products: fromAuxiliaryProducts("depalletizer", auxiliaryBySlug(["depalletizer"])),
  },
];

export const fillingSubCategories = [
  {
    href: "/products/filling-machine",
    title: "Water Filling Machine",
    text: waterDescription,
    image: "/images/products/water-filling-machine/cgf-60-60-20.jpg",
  },
  {
    href: "/products/filling-machine",
    title: "Carbonated Beverage Filling Machine",
    text: carbonatedDescription,
    image: "/images/products/carbonated-beverages-filling-machine/dcgf-60-60-20.jpg",
  },
  {
    href: "/products/filling-machine",
    title: "Juice Filling Machine",
    text: juiceDescription,
    image: "/images/products/juice-filling-machine/rcgf-40-40-10.jpg",
  },
  {
    href: "/products/filling-machine",
    title: "Glass Bottle Beer Filling Machine",
    text: beerDescription,
    image: "/images/products/glass-bottle-beer-filling-machine/bdcgf-24-24-8.jpg",
  },
];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  return getProductCategory(categorySlug)?.products.find(
    (product) => product.slug === productSlug,
  );
}

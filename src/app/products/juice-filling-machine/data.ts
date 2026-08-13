export const categoryDescription =
  "Hot filling line is a PET packaging solution for hot-filled beverages in PET bottles, covering juice, nectar, soft drinks, tea, and milk beverages. The RCGF series fills products up to 2L at 85-88°C, combining rinsing, hot filling, and capping in one automatic system to support reliable packaging performance and a better consumer experience.";

export const sharedParameterRows = [
  ["Suitable bottle shapes", "circular or square"],
  ["Bottle diameter(mm)", "Dia50-Dia115mm"],
  ["Bottle height (mm)", "160-320mm"],
  ["Filling type", "Overflow filinig type /Hot filling"],
  ["Function", "Rinsing filling capping"],
  ["Rinsing pressure", ">0.06Mpa <0.2Mpa"],
  ["Application", "Juice / Tea drinks / Milk Beverage"],
] as const;

export const juiceFillingProducts = [
  {
    model: "RCGF 16-16-5",
    slug: "rcgf-16-16-5",
    title: "Juice Filling Machine",
    image: "/images/products/juice-filling-machine/rcgf-16-16-5.jpg",
    heads: "16 washing / 16 filling / 5 capping",
    shortDescription:
      "Compact juice filling machine for hot-filled juice, tea drinks, and milk beverages in PET bottles.",
    parameters: [
      ["Capacity(for 500ml)", "6000 BPH"],
      ...sharedParameterRows,
      ["Total power (KW)", "2.2"],
      ["Overall dimensions", "2.5*1.9 m"],
      ["Height", "2.5m"],
      ["Weight(kg)", "5200"],
    ],
  },
  {
    model: "RCGF 18-18-6",
    slug: "rcgf-18-18-6",
    title: "Sokos Industrial NFC Mango juice Washing Filling Capping Equipment",
    image: "/images/products/juice-filling-machine/rcgf-18-18-6.jpg",
    heads: "18 washing / 18 filling / 6 capping",
    shortDescription:
      "Industrial mango juice washing, hot filling, and capping equipment for growing beverage factories.",
    parameters: [
      ["Capacity(for 500ml)", "8000 BPH"],
      ...sharedParameterRows,
      ["Total power (KW)", "2.2"],
      ["Overall dimensions", "2.8*2.1 5m"],
      ["Height", "2.5m"],
      ["Weight(kg)", "7000"],
    ],
  },
  {
    model: "RCGF 24-24-8",
    slug: "rcgf-24-24-8",
    title: "Sokos Automatic NFC Juice Filling Equipment Complete Fresh Fruit Juice Processing & Bottling Line",
    image: "/images/products/juice-filling-machine/rcgf-24-24-8.jpg",
    heads: "24 washing / 24 filling / 8 capping",
    shortDescription:
      "Fresh fruit juice processing and bottling equipment for stable hot filling in PET bottles.",
    parameters: [
      ["Capacity(for 500ml)", "12000 BPH"],
      ...sharedParameterRows,
      ["Total power (KW)", "3"],
      ["Overall dimensions", "3.1*2.5 m"],
      ["Height", "2.5m"],
      ["Weight(kg)", "9500"],
    ],
  },
  {
    model: "RCGF 32-32-10",
    slug: "rcgf-32-32-10",
    title: "Sokos NFC Fresh Juice Filling Machine Mango Juice Bottling Production Line Manufacturer",
    image: "/images/products/juice-filling-machine/rcgf-32-32-10.jpg",
    heads: "32 washing / 32 filling / 10 capping",
    shortDescription:
      "NFC fresh juice and mango juice bottling machine for medium-to-high capacity hot filling lines.",
    parameters: [
      ["Capacity(for 500ml)", "15000 BPH"],
      ...sharedParameterRows,
      ["Total power (KW)", "4"],
      ["Overall dimensions", "3.8*2.8 m"],
      ["Height", "2.5m"],
      ["Weight(kg)", "10500"],
    ],
  },
  {
    model: "RCGF 40-40-10",
    slug: "rcgf-40-40-10",
    title: "Sokos Complete Juice Filling Machine Supplier",
    image: "/images/products/juice-filling-machine/rcgf-40-40-10.jpg",
    heads: "40 washing / 40 filling / 10 capping",
    shortDescription:
      "Complete juice filling machine for hot-fill beverage plants requiring stable filling and automatic capping.",
    parameters: [
      ["Capacity(for 500ml)", "18000 BPH"],
      ...sharedParameterRows,
      ["Total power (KW)", "5.5"],
      ["Overall dimensions", "4.5*3. 3m"],
      ["Height", "2.6m"],
      ["Weight(kg)", "12000"],
    ],
  },
];

export function getJuiceFillingProduct(slug: string) {
  return juiceFillingProducts.find((product) => product.slug === slug);
}

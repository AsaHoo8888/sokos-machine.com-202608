export const categoryDescription =
  "Automatic glass beer bottling machine incorporates rinsing, filling, and capping into one full-automatic unit. The BDCGF series is designed for beer and purified beer in glass bottles, based on absorbed German and Italian technology. Available models support output from 500 to 4,000 BPH, and the whole beer filling production line can run automatically.";

export const sharedParameterRows = [
  ["Suitable bottle shapes", "circular or square/customizable"],
  ["Bottle diameter(mm)", "Dia50-Dia115mm/customizable"],
  ["Bottle height (mm)", "160-320mm/customizable"],
  ["Compressor air", "0.3-0.7Mpa"],
  ["Washing meidium", "Aseptic water"],
  ["Rinsing pressure", ">0.06Mpa <0.2Mpa"],
  ["Application", "water bottling plant sale"],
] as const;

export const glassBottleBeerProducts = [
  {
    model: "BDCGF 24-24-8",
    slug: "bdcgf-24-24-8",
    title: "Sokos Complete Glass Bottle Beer Packaging & Bottling Line Manufacturer",
    image: "/images/products/glass-bottle-beer-filling-machine/bdcgf-24-24-8.jpg",
    heads: "24 washing / 24 filling / 8 capping",
    shortDescription:
      "Complete glass bottle beer bottling and packaging machine for compact brewery line layouts.",
    parameters: [
      ["Capacity(for 500ml)", "2500-4000"],
      ...sharedParameterRows,
      ["Main motor power", "4KW"],
      ["Overall dimensions", "3.2*2.3 m"],
      ["Height", "2.4m"],
      ["Weight(kg)", "4000"],
    ],
  },
  {
    model: "BDCGF 18-18-6",
    slug: "bdcgf-18-18-6",
    title: "Sokos Automatic Glass Bottle Beer Filling Machine Rinsing Filling Capping Equipment",
    image: "/images/products/glass-bottle-beer-filling-machine/bdcgf-18-18-6.jpg",
    heads: "18 washing / 18 filling / 6 capping",
    shortDescription:
      "Glass bottle beer rinsing, filling, and capping equipment for small and medium brewery production.",
    parameters: [
      ["Capacity(for 500ml)", "1200-1500"],
      ...sharedParameterRows,
      ["Main motor power", "3KW"],
      ["Overall dimensions", "2.6*2.2 m"],
      ["Height", "2.4"],
      ["Weight(kg)", "3300"],
    ],
  },
  {
    model: "BDCGF 14-12-5",
    slug: "bdcgf-14-12-5",
    title: "Sokos Industrial Beer Bottling Machine for Glass Bottles Complete Beer Filling Production Line",
    image: "/images/products/glass-bottle-beer-filling-machine/bdcgf-14-12-5.jpg",
    heads: "14 washing / 12 filling / 5 capping",
    shortDescription:
      "Industrial beer bottling machine for glass bottles, suitable for complete low-speed beer filling lines.",
    parameters: [
      ["Capacity(for 500ml)", "600-700"],
      ...sharedParameterRows,
      ["Main motor power", "2.2KW"],
      ["Overall dimensions", "2.2*1.5 m"],
      ["Height", "2.4"],
      ["Weight(kg)", "2600"],
    ],
  },
  {
    model: "BDCGF 8-8-4",
    slug: "bdcgf-8-8-4",
    title: "Sokos Fully Automatic Glass Beer Bottling Machine 3-in-1 Bottling Processing Machine",
    image: "/images/products/glass-bottle-beer-filling-machine/bdcgf-8-8-4.jpg",
    heads: "8 washing / 8 filling / 4 capping",
    shortDescription:
      "Entry-level fully automatic glass beer bottling machine for rinsing, filling, and capping in one system.",
    parameters: [
      ["Capacity(for 500ml)", "500-600"],
      ...sharedParameterRows,
      ["Main motor power", "1.5KW"],
      ["Overall dimensions", "1.8*1.5 m"],
      ["Height", "2.4"],
      ["Weight(kg)", "2500"],
    ],
  },
];

export function getGlassBottleBeerProduct(slug: string) {
  return glassBottleBeerProducts.find((product) => product.slug === slug);
}

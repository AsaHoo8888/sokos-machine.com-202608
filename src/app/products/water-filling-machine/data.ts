export const categoryDescription =
  "CGF series bottled water filling machine line is used to fill mineral water or purified water into PET bottles from 200ml to 2000ml. Different models satisfy output requirements from 2,000 to 36,000 BPH. The machine combines washing, filling, and capping in one automatic system, with gravity or micro-pressure filling for faster and more stable operation. Siemens PLC control, inverter drive, and photoelectric detection support reliable automation and easy operation.";

export const sharedParameterRows = [
  ["Suitable bottle shapes", "PET circular or square/customizable"],
  ["Bottle diameter(mm)", "Dia50-Dia115mm/customizable"],
  ["Bottle height (mm)", "160-320mm/customizable"],
  ["Compressor air", "0.3-0.7Mpa"],
  ["Washing medium", "Aseptic water"],
  ["Rinsing pressure", ">0.06Mpa<0.2Mpa"],
  ["Application", "water bottling plant sale"],
] as const;

export const waterFillingProducts = [
  {
    model: "CGF 60-60-20",
    slug: "cgf-60-60-20",
    title: "Sokos Automatic Mineral Water & Purified Water Bottling Machine",
    image: "/images/products/water-filling-machine/cgf-60-60-20.jpg",
    heads: "60 washing / 60 filling / 20 capping",
    shortDescription:
      "High-output bottled water monoblock for large plants requiring stable rinsing, filling, and capping at industrial speed.",
    parameters: [
      ["Capacity(for 500ml)", "24000-26000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "11"],
      ["Overall dimensions (m)", "6.0*6.0"],
      ["Height", "2.5m"],
      ["Weight(kg)", "7000"],
    ],
  },
  {
    model: "CGF 50-50-15",
    slug: "cgf-50-50-15",
    title: "Sokos High Accuracy Drinking Water Filling Machine",
    image: "/images/products/water-filling-machine/cgf-50-50-15.jpg",
    heads: "50 washing / 50 filling / 15 capping",
    shortDescription:
      "Precision drinking water filling system designed for consistent bottle handling and accurate gravity filling.",
    parameters: [
      ["Capacity(for 500ml)", "18000-24000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "8.5"],
      ["Overall dimensions (m)", "5.5*4.5"],
      ["Height", "2.5m"],
      ["Weight(kg)", "6000"],
    ],
  },
  {
    model: "CGF 40-40-12",
    slug: "cgf-40-40-12",
    title: "Sokos 3-in-1 PET Bottle Mineral Water Washing Filling Capping Machine",
    image: "/images/products/water-filling-machine/cgf-40-40-12.jpg",
    heads: "40 washing / 40 filling / 12 capping",
    shortDescription:
      "Integrated PET bottle water machine combining rinsing, filling, and capping in one compact automatic frame.",
    parameters: [
      ["Capacity(for 500ml)", "15000-18000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "5.5"],
      ["Overall dimensions (m)", "5.0*4.0"],
      ["Height", "2.5m"],
      ["Weight(kg)", "5500"],
    ],
  },
  {
    model: "CGF 32-32-10",
    slug: "cgf-32-32-10",
    title: "Sokos Automatic Mineral Water Filling Machine for PET Plastic Bottles",
    image: "/images/products/water-filling-machine/cgf-32-32-10.jpg",
    heads: "32 washing / 32 filling / 10 capping",
    shortDescription:
      "Mid-to-high capacity mineral water filler for PET bottles, balancing stable speed with efficient plant layout.",
    parameters: [
      ["Capacity(for 500ml)", "13000-15000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "4"],
      ["Overall dimensions (m)", "3.7*2.6"],
      ["Height", "2.5m"],
      ["Weight(kg)", "5000"],
    ],
  },
  {
    model: "CGF 24-24-8",
    slug: "cgf-24-24-8",
    title: "Sokos Complete Turnkey Pure Water Treatment and Bottling Production Line",
    image: "/images/products/water-filling-machine/cgf-24-24-8.jpg",
    heads: "24 washing / 24 filling / 8 capping",
    shortDescription:
      "Reliable water bottling monoblock for turnkey pure water lines from treated water to finished capped bottles.",
    parameters: [
      ["Capacity(for 500ml)", "10000-12000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "3"],
      ["Overall dimensions (m)", "3.1*2.3"],
      ["Height", "2.5m"],
      ["Weight(kg)", "4000"],
    ],
  },
  {
    model: "CGF 18-18-6",
    slug: "cgf-18-18-6",
    title: "Sokos Automatic Mineral Water Bottling Equipment",
    image: "/images/products/water-filling-machine/cgf-18-18-6.jpg",
    heads: "18 washing / 18 filling / 6 capping",
    shortDescription:
      "Automatic mineral water equipment for growing factories that need clean operation and dependable daily output.",
    parameters: [
      ["Capacity(for 500ml)", "7000-8000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "2.2"],
      ["Overall dimensions (m)", "2.4*1.83"],
      ["Height", "2.5m"],
      ["Weight(kg)", "3500"],
    ],
  },
  {
    model: "CGF 14-12-5",
    slug: "cgf-14-12-5",
    title: "Sokos Fully Automatic 3-in-1 Water Rinser Filler Capper for Water Plants",
    image: "/images/products/water-filling-machine/cgf-14-12-5.jpg",
    heads: "14 washing / 12 filling / 5 capping",
    shortDescription:
      "Compact 3-in-1 water rinser, filler, and capper for small and medium bottling plants.",
    parameters: [
      ["Capacity(for 500ml)", "3500-4000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "1.5"],
      ["Overall dimensions (m)", "2.4*1.6"],
      ["Height", "2.5m"],
      ["Weight(kg)", "2500"],
    ],
  },
  {
    model: "CGF 8-8-4",
    slug: "cgf-8-8-4",
    title: "Sokos Turnkey Mineral Water Bottling Plant Solution from Source to Package",
    image: "/images/products/water-filling-machine/cgf-8-8-4.jpg",
    heads: "8 washing / 8 filling / 4 capping",
    shortDescription:
      "Entry-level automatic water filling machine for mineral water and purified water bottle production.",
    parameters: [
      ["Capacity(for 500ml)", "2500-3000"],
      ...sharedParameterRows,
      ["Main motor power (kw)", "1.5"],
      ["Overall dimensions (m)", "2*1.5"],
      ["Height", "2.5m"],
      ["Weight(kg)", "2000"],
    ],
  },
];

export function getWaterFillingProduct(slug: string) {
  return waterFillingProducts.find((product) => product.slug === slug);
}

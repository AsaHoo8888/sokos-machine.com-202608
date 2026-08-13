export type SolutionStepV2 = {
  phase: string;
  title: string;
  text: string;
  image: string;
};

export type SolutionV2 = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  image: string;
  videoUrl?: string;
  capacity: string;
  market: string;
  steps: SolutionStepV2[];
};

const endOfLineSteps = [
  {
    phase: "Labeling",
    title: "Labeling Machine",
    text: "Automatic self-adhesive, OPP, or sleeve labeling configured around bottle shape and speed.",
    image: "/images/products/water-line-labeling-machine.jpg",
  },
  {
    phase: "Packing",
    title: "Packaging Machine",
    text: "Shrink wrapping or carton packing creates stable finished packs for transport.",
    image: "/images/products/water-line-shrink-wrapping.jpg",
  },
  {
    phase: "Palletizing",
    title: "Palletizing System",
    text: "Automatic stacking and pallet output simplify finished-goods logistics.",
    image: "/images/products/water-line-palletizing-system.png",
  },
];

export const solutionsV2: SolutionV2[] = [
  {
    slug: "water-filling-line",
    code: "WFL",
    title: "Water Filling Line",
    summary:
      "Turnkey PET bottled water production line from RO water treatment and bottle blowing to filling, labeling, packing, and palletizing.",
    image: "/images/water-line-2.jpg",
    videoUrl: "https://youtu.be/6o8UcZ2xSUA",
    capacity: "2,000-36,000 BPH",
    market: "Mineral water / purified water",
    steps: [
      {
        phase: "Water",
        title: "RO Water Treatment System",
        text: "First-level reverse osmosis filtration prepares clean process water for bottled water production.",
        image: "/images/products/water-line-ro-treatment.png",
      },
      {
        phase: "Air",
        title: "Air Compressor System",
        text: "Stable compressed air supports blow molding and pneumatic machine controls.",
        image: "/images/products/water-line-air-compressor.jpg",
      },
      {
        phase: "Bottle",
        title: "Bottle Blow Molding Machine",
        text: "PET preform heating and stretch blowing creates consistent bottle shape and strength.",
        image: "/images/products/water-line-blow-molding.jpg",
      },
      {
        phase: "Filling",
        title: "3-in-1 Filling Machine",
        text: "Integrated rinsing, filling, and capping monoblock for hygienic bottled water output.",
        image: "/images/products/water-line-filling-machine.jpg",
      },
      ...endOfLineSteps,
    ],
  },
  {
    slug: "carbonated-drink-filling-line",
    code: "CSD",
    title: "Carbonated Drink Filling Line",
    summary:
      "Complete sparkling water, soda, cola, and CSD line with CO2 mixing and pressure filling technology.",
    image: "/images/solutions/csd-line.png",
    videoUrl: "https://youtu.be/hgHOXGUHOOc",
    capacity: "1,500-20,000 BPH",
    market: "CSD / soda / sparkling water",
    steps: [
      {
        phase: "Water",
        title: "Water Treatment System",
        text: "Purified process water provides a stable base for carbonated beverage preparation.",
        image: "/images/products/water-line-ro-treatment.png",
      },
      {
        phase: "Air",
        title: "Air Compressor System",
        text: "Compressed air supports bottle forming and automatic machine actuation.",
        image: "/images/products/water-line-air-compressor.jpg",
      },
      {
        phase: "Bottle",
        title: "Bottle Blow Molding Machine",
        text: "PET bottle forming system prepares bottles for carbonated beverage pressure filling.",
        image: "/images/products/water-line-blow-molding.jpg",
      },
      {
        phase: "Mixing",
        title: "CO2 Mixer",
        text: "Water, syrup, and carbon dioxide are mixed under controlled pressure for stable carbonation.",
        image: "/images/products/co2-mixer.jpg",
      },
      {
        phase: "Filling",
        title: "Carbonated Drink Filling Machine",
        text: "Isobaric rinsing, filling, and capping monoblock preserves CO2 content during filling.",
        image: "/images/products/juice-line-mixing-machine.jpg",
      },
      ...endOfLineSteps,
    ],
  },
  {
    slug: "juice-filling-line",
    code: "JFL",
    title: "Juice Filling Line",
    summary:
      "Hot-fill juice and tea beverage line with water treatment, blending, sterilization, filling, labeling, packing, and palletizing.",
    image: "/images/solutions/juice-line.jpg",
    videoUrl: "https://youtu.be/4FUFwxLdCL0",
    capacity: "6,000-18,000 BPH",
    market: "Juice / tea / milk beverage",
    steps: [
      {
        phase: "Water",
        title: "Water Treatment System",
        text: "RO water treatment creates process water for beverage blending and cleaning.",
        image: "/images/products/juice-line-ro-treatment.png",
      },
      {
        phase: "Air",
        title: "Air Compressor System",
        text: "Compressed air keeps pneumatic controls and bottle forming equipment stable.",
        image: "/images/products/juice-line-air-compressor.jpg",
      },
      {
        phase: "Bottle",
        title: "Bottle Blow Molding Machine",
        text: "PET bottle forming for hot-fill bottle shapes and production capacity targets.",
        image: "/images/products/juice-line-blow-molding.jpg",
      },
      {
        phase: "Blending",
        title: "Juice Blending System",
        text: "Sugar dissolving, juice dilution, filtration, degassing, sterilization, and CIP modules.",
        image: "/images/products/juice-line-blending-system.jpg",
      },
      {
        phase: "Mixing",
        title: "Mixing Machine",
        text: "Sanitary mixing equipment helps maintain stable taste and process consistency.",
        image: "/images/products/juice-line-mixing-machine.jpg",
      },
      {
        phase: "Filling",
        title: "Juice Filling Machine",
        text: "Hot-fill rinsing, filling, and capping monoblock for PET bottles.",
        image: "/images/products/juice-line-filling-machine.jpg",
      },
      ...endOfLineSteps.map((step) => ({
        ...step,
        image:
          step.phase === "Labeling"
            ? "/images/products/juice-line-labeling-machine.jpg"
            : step.phase === "Packing"
              ? "/images/products/juice-line-packaging-machine.jpg"
              : "/images/products/juice-line-palletizing-system.png",
      })),
    ],
  },
  {
    slug: "oil-filling-line",
    code: "OIL",
    title: "Edible Oil Filling Line",
    summary:
      "Oil filling and packing line for PET bottles with blow molding, filling, labeling, carton packing, and palletizing.",
    image: "/images/solutions/oil-filling-line.jpg",
    videoUrl: "https://youtu.be/763Ah2alqYQ",
    capacity: "Custom output",
    market: "Edible oil / cooking oil",
    steps: [
      {
        phase: "Bottle",
        title: "Bottle Blow Molding Machine",
        text: "PET bottle forming system configured for edible oil bottle shapes.",
        image: "/images/products/oil-line-blow-molding.jpg",
      },
      {
        phase: "Filling",
        title: "Oil Filling Machine",
        text: "Stable filling system for edible oil products with clean bottle transfer.",
        image: "/images/products/oil-line-filling-machine.png",
      },
      {
        phase: "Labeling",
        title: "Labeling Machine",
        text: "Automatic bottle labeling for product branding and retail-ready presentation.",
        image: "/images/products/oil-line-labeling-machine.jpg",
      },
      {
        phase: "Carton",
        title: "Carton Packing Machine",
        text: "Carton packing system prepares bottles for distribution and warehouse handling.",
        image: "/images/products/oil-line-carton-packing.jpg",
      },
      {
        phase: "Palletizing",
        title: "Palletizing System",
        text: "Automatic palletizing stacks cartons into stable pallet loads.",
        image: "/images/products/oil-line-palletizing-system.png",
      },
    ],
  },
  {
    slug: "beer-filling-line",
    code: "BFL",
    title: "Beer Filling Line",
    summary:
      "Glass bottle beer filling line with depalletizing, rinsing/filling/capping, labeling, carton packing, and palletizing.",
    image: "/images/solutions/beer-filling-line-generated.png",
    videoUrl: "https://www.youtube.com/watch?v=y5Orw6k5ycE",
    capacity: "500-4,000 BPH",
    market: "Glass bottle beer",
    steps: [
      {
        phase: "Depalletizing",
        title: "Depalletizer",
        text: "Empty glass bottles are unloaded and transferred into the beer filling line.",
        image: "/images/products/beer-line-depalletizer.jpg",
      },
      {
        phase: "Filling",
        title: "Beer Filling Machine",
        text: "Glass bottle beer rinsing, filling, and capping machine for stable brewery production.",
        image: "/images/products/beer-line-filling-machine.jpg",
      },
      {
        phase: "Labeling",
        title: "Labeling Machine",
        text: "Beer bottle labeling supports product identity and retail presentation.",
        image: "/images/products/beer-line-labeling-machine.jpg",
      },
      {
        phase: "Carton",
        title: "Carton Packing Machine",
        text: "Carton packing groups glass bottles for safe transportation.",
        image: "/images/products/beer-line-carton-packing.jpg",
      },
      {
        phase: "Palletizing",
        title: "Palletizing System",
        text: "Automatic palletizing prepares beer cartons for warehouse logistics.",
        image: "/images/products/beer-line-palletizing-system.png",
      },
    ],
  },
  {
    slug: "viscous-product-filling-line",
    code: "VPF",
    title: "Viscous Product Filling Line",
    summary:
      "Piston filling, labeling, carton packing, and palletizing line for sauces, pastes, detergents, and viscous liquids.",
    image: "/images/solutions/viscous-product-filling-line-generated.png",
    capacity: "Custom output",
    market: "Sauce / paste / viscous liquid",
    steps: [
      {
        phase: "Filling",
        title: "Piston Filling Machine",
        text: "Piston filling handles viscous products with controlled volume and clean dispensing.",
        image: "/images/products/viscous-line-piston-filling.jpg",
      },
      {
        phase: "Labeling",
        title: "Labeling Machine",
        text: "Automatic labeling prepares containers for branding and retail identification.",
        image: "/images/products/viscous-line-labeling-machine.jpg",
      },
      {
        phase: "Carton",
        title: "Carton Packing Machine",
        text: "Carton packing organizes filled containers for distribution.",
        image: "/images/products/viscous-line-carton-packing.jpg",
      },
      {
        phase: "Palletizing",
        title: "Palletizing System",
        text: "Automatic palletizing completes the end-of-line logistics flow.",
        image: "/images/products/viscous-line-palletizing-system.png",
      },
    ],
  },
];

export function getSolutionV2(slug: string) {
  return solutionsV2.find((solution) => solution.slug === slug);
}

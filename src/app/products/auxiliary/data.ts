export type AuxiliaryProduct = {
  slug: string;
  title: string;
  category: string;
  code: string;
  image: string;
  videoUrl?: string;
  shortDescription: string;
  description: string[];
  highlights: string[];
  parameters: string[][];
};

const standardWaterTreatmentRows = [
  ["WTS-2", "2T/H"],
  ["WTS-4", "4T/H"],
  ["WTS-6", "6T/H"],
  ["WTS-8", "8T/H"],
  ["WTS-10", "10T/H"],
  ["WTS-12", "12T/H"],
  ["WTS-15", "15T/H"],
  ["WTS-16", "16T/H"],
  ["WTS-18", "18T/H"],
  ["WTS-20", "20T/H"],
  ["WTS-24", "24T/H"],
  ["WTS-26", "26T/H"],
  ["WTS-30", "30T/H"],
].map(([model, capacity]) => [
  model,
  capacity,
  "Siemens PLC",
  "HYDRANAUTICS RO membrane",
  "Yuan'an / Nanfang pump",
  "Multi-stage filtration + RO + sterilization",
]);

export const auxiliaryProducts: AuxiliaryProduct[] = [
  {
    slug: "water-treatment-system",
    title: "Fully Automatic Water Treatment",
    category: "Water Treatment",
    code: "WTS",
    image: "/images/products/auxiliary/water-treatment.png",
    videoUrl: "https://youtu.be/rfcNJhgvebQ",
    shortDescription:
      "Automatic filtration, RO purification, and sterilization system for beverage production water.",
    description: [
      "This water treatment system is the front-end purification unit for bottled water, juice, tea, and carbonated beverage lines.",
      "The standard process includes raw water pumping, quartz sand filtration, activated carbon filtration, softening, precision filtration, reverse osmosis, UV sterilization, pure water storage, and ozone sterilization.",
    ],
    highlights: [
      "HYDRANAUTICS RO membrane with stable desalination performance.",
      "Siemens PLC and touchscreen control for easier daily operation.",
      "Capacity range from 2T/H to 30T/H for small and large beverage plants.",
    ],
    parameters: [
      ["Model", "Capacity", "Control System", "RO Membrane", "Pump", "Main Process"],
      ...standardWaterTreatmentRows,
    ],
  },
  {
    slug: "juice-blending-system",
    title: "Juice Blending System",
    category: "Blending",
    code: "MIX",
    image: "/images/products/auxiliary/juice-blending-system.png",
    videoUrl: "https://youtu.be/ePSmz0G1oxQ",
    shortDescription:
      "Smart stainless-steel mixing system for juice, tea, flavored drinks, and functional beverages.",
    description: [
      "The juice blending system prepares finished beverages from concentrated juice, sugar liquid, acidity regulator, flavors, and auxiliary ingredients.",
      "It can support hot blending or cold blending routes, with modular tanks, filtration, degassing, sterilization, CIP cleaning, and electrical control.",
    ],
    highlights: [
      "Online refractometer and acidity control options for stable taste.",
      "Modular stainless-steel layout for juice, tea, and compound drinks.",
      "CIP-ready design keeps blending and cleaning efficient.",
    ],
    parameters: [
      ["Section", "Details"],
      ["Product Scope", "Orange juice, peach juice, apple juice, compound fruit juice, tea drinks"],
      ["Main Process", "Juice recovery and dilution; sugar solution preparation; blending; filtration and degassing; sterilization and filling"],
      ["Core Modules", "Hot water unit; sugar dissolving filtration and sterilization; juice reduction; auxiliary dissolving; blending tank; CIP; electrical control"],
      ["Control Options", "Online refractometer, acidity meter, automatic feeding system"],
      ["Process Route", "Hot blending or cold blending"],
      ["Material", "Stainless steel with CIP online cleaning"],
    ],
  },
  {
    slug: "fully-automatic-blow-molding-machine",
    title: "Fully Automatic Blow Molding Machine",
    category: "Blow Molding Machine",
    code: "BBM",
    image: "/images/products/auxiliary/blow-molding-machine.png",
    videoUrl: "https://youtu.be/CAkWFjRpmoo",
    shortDescription:
      "Servo PET bottle forming machine for water, beverage, food, daily chemical, and pharmaceutical packaging.",
    description: [
      "The automatic linear blow molding machine handles preform loading, heating, stretching, blowing, and bottle ejection in one continuous process.",
      "Infrared heating, servo clamping, servo stretching, automatic preform separation, and touchscreen control help produce consistent PET bottles.",
    ],
    highlights: [
      "Supports equal-distance and variable-distance bottle output formats.",
      "Multi-zone infrared heating with independent temperature control.",
      "PLC touchscreen control with fault diagnosis and parameter storage.",
    ],
    parameters: [
      ["Parameter", "Value"],
      ["Machine Type", "Fully automatic PET blow molding machine"],
      ["Blowing Method", "Linear blow molding"],
      ["Applicable Bottles", "PET water bottles, beverage bottles, food packaging bottles"],
      ["Equal-Distance Output", "1-out-2, 1-out-4, 1-out-6, 1-out-8"],
      ["Variable-Distance Output", "1-out-4, 1-out-6, 1-out-7, 1-out-8, 1-out-9, 1-out-10, 1-out-12"],
      ["Maximum Bottle Capacity", "≤2L, customizable"],
      ["Maximum Bottle Diameter", "Φ110mm"],
      ["Maximum Bottle Height", "<330mm"],
      ["Preform Length", "<150mm"],
      ["Bottle Neck Range", "Φ18-Φ30mm"],
      ["Control System", "PLC + touchscreen"],
      ["Drive System", "Servo clamping, stretching, and transmission"],
      ["High-Pressure Air", "3.5MPa"],
    ],
  },
  {
    slug: "rotary-opp-labeling-machine",
    title: "Rotary OPP Labeling Machine",
    category: "Labeling",
    code: "OPP",
    image: "/images/products/auxiliary/rotary-opp-labeler.png",
    videoUrl: "https://youtu.be/b2ask5fGcTw",
    shortDescription:
      "High-speed rotary hot-melt OPP labeling machine for round bottles and cans.",
    description: [
      "The rotary OPP labeling machine applies OPP film labels with a hot-melt glue roller for fast, accurate labeling of round containers.",
      "Its integrated steel frame, upper and lower clamping, cam-controlled rotary stations, and touchscreen control support high-speed beverage lines.",
    ],
    highlights: [
      "8, 12, and 24-station models cover 8,000 to 30,000 BPH.",
      "Hot-melt glue roller labeling with ±1mm accuracy.",
      "304 stainless-steel table and PLC touchscreen control.",
    ],
    parameters: [
      ["Item", "OPP-8", "OPP-12", "OPP-24"],
      ["Rotary Stations", "8", "12", "24"],
      ["Labeling Speed", "8,000 BPH", "15,000 BPH", "30,000 BPH"],
      ["Labeling Accuracy", "±1mm", "±1mm", "±1mm"],
      ["Label Type", "OPP film", "OPP film", "OPP film"],
      ["Labeling Method", "Hot-melt glue roller", "Hot-melt glue roller", "Hot-melt glue roller"],
      ["Applicable Bottle", "Round bottle", "Round bottle", "Round bottle"],
      ["Installed Power", "About 8KW", "About 13KW", "About 20KW"],
    ],
  },
  {
    slug: "rotary-self-adhesive-labeler",
    title: "High-Speed Rotary Self-Adhesive Labeler",
    category: "Labeling",
    code: "G-P",
    image: "/images/products/auxiliary/rotary-self-adhesive-labeler.png",
    videoUrl: "https://youtu.be/FNNxLUMR_Xs",
    shortDescription:
      "High-speed rotary pressure-sensitive labeler for round, flat, and shaped bottles.",
    description: [
      "This rotary self-adhesive labeler supports single-label, double-label, wraparound, and positioning applications for many bottle shapes.",
      "Schneider servo drive, precise label feeding, 8D adjustment, and Chinese-English touchscreen control make the machine suitable for frequent product changes.",
    ],
    highlights: [
      "Model range covers 12,000 to 36,000 BPH.",
      "Labeling accuracy ±1mm and label feeding accuracy ±0.3mm.",
      "Suitable for round, flat, square, and irregular containers.",
    ],
    parameters: [
      ["Model", "Stations", "Speed", "Power", "Dimensions", "Weight"],
      ["G09P-2", "9", "12,000-13,000 BPH", "5.5 KW", "1930×1670×2100 mm", "2500 kg"],
      ["G12P-2", "12", "14,000-16,000 BPH", "6.5 KW", "1980×1740×2100 mm", "3000 kg"],
      ["G16P-2", "16", "18,000-24,000 BPH", "7.5 KW", "2350×1840×2100 mm", "4000 kg"],
      ["G18P-2", "18", "24,000-26,000 BPH", "8.5 KW", "2900×2200×2200 mm", "8000 kg"],
      ["G24P-2", "24", "28,000-32,000 BPH", "9 KW", "2480×2390×2300 mm", "8500 kg"],
      ["G30P-2", "30", "33,000-36,000 BPH", "12 KW", "2680×2490×2300 mm", "9000 kg"],
    ],
  },
  {
    slug: "linear-self-adhesive-labeler",
    title: "Linear Self-Adhesive Labeler",
    category: "Labeling",
    code: "DDU",
    image: "/images/products/auxiliary/linear-self-adhesive-labeler.png",
    videoUrl: "https://youtu.be/otzJunmVGmg",
    shortDescription:
      "Flexible linear labeler for round, square, flat, conical bottles, and large containers.",
    description: [
      "The linear self-adhesive labeler supports single-side, double-side, wraparound, and positioning labels with quick changeover.",
      "It is suitable for regular bottles and large containers from 5L to 19L, with stable pressure belt handling and adjustable label feeding.",
    ],
    highlights: [
      "Labeling accuracy ±1mm and label feeding accuracy ±0.3mm.",
      "Dual Chinese-English operation interface.",
      "Quick adjustment for multi-shape bottle applications.",
    ],
    parameters: [
      ["Model", "Type", "Speed", "Power", "Dimensions", "Weight"],
      ["DDU-1602", "Linear double-side labeling machine", "Adjusted with production line", "3 KW", "3000×1650×1500 mm", "500 kg"],
      ["DDU-1603D", "Large round bucket labeling machine", "0-1,200 buckets/hour for 5L-19L", "2 KW", "2000×1350×1500 mm", "400 kg"],
    ],
  },
  {
    slug: "shrink-sleeve-labeler",
    title: "Linear Shrink Sleeve Labeling Machine",
    category: "Labeling",
    code: "AGP",
    image: "/images/products/auxiliary/shrink-sleeve-labeler.png",
    videoUrl: "https://youtu.be/2oQJ81TjWu0",
    shortDescription:
      "Fast shrink-sleeve labeling system for bottle bodies, necks, and barrel mouths.",
    description: [
      "The shrink sleeve labeler applies heat-shrink labels to bottle bodies, necks, or caps, then uses a steam shrink tunnel for uniform label shrinking.",
      "It supports round, square, flat, and irregular bottles for beverage, condiment, and daily chemical production lines.",
    ],
    highlights: [
      "Model range covers 3,000 to 30,000 BPH.",
      "Supports body labels, neck labels, and dual-label applications.",
      "Steam shrink tunnel provides even shrink finish.",
    ],
    parameters: [
      ["Model", "Capacity", "Steam Tunnel", "Steam Generator", "Application"],
      ["AGP-100/200M", "12,000 BPH", "2 m", "24KW", "6,000 BPH cans; 6,000-9,000 BPH carbonated or juice line"],
      ["AGP-250M", "15,000 BPH", "2 m", "36KW", "10,000 BPH cans; 9,000-12,000 BPH carbonated or juice line"],
      ["AGP-300H", "18,000 BPH", "2.4 m", "36KW", "12,000 BPH cans; 12,000-15,000 BPH carbonated or juice line"],
      ["AGP-400H", "24,000 BPH", "2.4 m", "48KW", "15,000 BPH cans; 15,000-20,000 BPH carbonated or juice line"],
      ["AGP-500H", "30,000 BPH", "-", "-", "20,000-24,000 BPH carbonated or juice line"],
      ["AGP-S150M", "12,000 BPH", "-", "-", "Dual head for neck + body labels"],
      ["AGP-S400M", "24,000 BPH", "-", "-", "Dual head for neck + body labels"],
      ["AGP-T100", "500-3,000 BPH", "-", "-", "5-15L and 5-gallon barrel mouth labels"],
    ],
  },
  {
    slug: "shrink-wrap-machine",
    title: "LC-MBS Series Shrink Wrap Machine",
    category: "Packaging",
    code: "MBS",
    image: "/images/products/auxiliary/shrink-wrap-machine.png",
    videoUrl: "https://youtu.be/tX8k3Fv_CGg",
    shortDescription:
      "One-piece automatic shrink wrap machine for PET bottle, carton, and tray package grouping.",
    description: [
      "The LC-MBS shrink wrap machine groups products, wraps them with film, shrinks the film with circulating hot air, and cools the pack into a stable finished bundle.",
      "Servo film wrapping, quick film roll changeover, touchscreen control, and low-noise operation help support reliable end-of-line packaging.",
    ],
    highlights: [
      "Suitable for common 3×4 and 4×6 bottle pack formats.",
      "Circulating air shrink chamber can reduce energy consumption.",
      "Integrated frame keeps the line compact and easy to operate.",
    ],
    parameters: [
      ["Model", "Packing Speed", "Power", "Weight", "Dimensions", "Shrink Chamber"],
      ["MBS65", "60 packs/min", "54 kW", "4800 kg", "14870×1240×2500 mm", "2400×650×450 mm"],
      ["MBS55", "50 packs/min", "45 kW", "4500 kg", "13870×1240×2500 mm", "2200×650×450 mm"],
      ["MBS45", "40 packs/min", "39 kW", "4200 kg", "12870×1240×2500 mm", "2000×650×450 mm"],
      ["MBS35", "30 packs/min", "32 kW", "3500 kg", "11870×1240×2500 mm", "1800×650×450 mm"],
      ["MBS30", "25 packs/min", "28 kW", "3200 kg", "10870×1240×2500 mm", "1600×650×450 mm"],
      ["MBS26", "22 packs/min", "24 kW", "3000 kg", "9870×1240×2500 mm", "1500×650×450 mm"],
    ],
  },
  {
    slug: "palletizer",
    title: "LC-MD Series Fully Automatic Palletizer",
    category: "Palletizing Machine",
    code: "MD",
    image: "/images/products/auxiliary/palletizer.png",
    videoUrl: "https://youtu.be/3wy7KvOAwwc",
    shortDescription:
      "Automatic end-of-line palletizing system for film packs, cartons, cans, and PET bottle bundles.",
    description: [
      "The palletizer automatically arranges finished packages into layers, stacks them on pallets, and outputs complete pallet loads.",
      "PLC touchscreen control displays production speed and fault status, helping operators manage beverage, condiment, oil, pharmaceutical, and chemical packaging lines.",
    ],
    highlights: [
      "25 to 60 packs per minute model range.",
      "Connects directly with shrink wrapping and carton packing machines.",
      "Low-level and high-level configurations available.",
    ],
    parameters: [
      ["Model", "Type", "Capacity", "Power", "Dimensions", "Weight", "Max Stack Height", "Max Load"],
      ["MD65", "High-level dual-channel", "60 packs/min", "19 kW", "18000×9600×3700 mm", "8500 kg", "1750 mm", "260 kg/layer; 1600 kg/pallet"],
      ["MD55", "Low-level dual-channel", "50 packs/min", "13 kW", "15000×8000×3700 mm", "8000 kg", "1750 mm", "260 kg/layer; 1600 kg/pallet"],
      ["MD45", "Low-level pre-layer", "40 packs/min", "13 kW", "10800×6900×3700 mm", "7600 kg", "1750 mm", "260 kg/layer; 1600 kg/pallet"],
      ["MD35", "Low-level standard", "30 packs/min", "12 kW", "8000×7000×3700 mm", "7500 kg", "1750 mm", "260 kg/layer; 1600 kg/pallet"],
      ["MD30", "Low-level economy", "25 packs/min", "12 kW", "8000×7160×3700 mm", "7500 kg", "1750 mm", "260 kg/layer; 1600 kg/pallet"],
    ],
  },
  {
    slug: "co2-mixer",
    title: "Carbon Dioxide Mixer",
    category: "Blending",
    code: "CO2",
    image: "/images/products/co2-mixer.jpg",
    shortDescription:
      "Horizontal carbonation mixer for soda water, carbonated soft drinks, and sparkling beverage production.",
    description: [
      "The carbon dioxide mixer blends treated water, syrup, and carbon dioxide into a stable carbonated beverage before filling.",
      "Its stainless-steel sanitary structure supports continuous production with reliable pressure control and consistent gas-liquid mixing.",
    ],
    highlights: [
      "Suitable for sparkling water, soda, cola, and carbonated beverage lines.",
      "Compact skid-mounted layout for easy connection with filling equipment.",
      "Stable carbonation control helps keep finished beverage taste consistent.",
    ],
    parameters: [
      ["Parameter", "Value"],
      ["Application", "Carbonated drinks, soda water, sparkling beverages"],
      ["Main Function", "Water, syrup, and carbon dioxide mixing"],
      ["Structure", "Horizontal stainless-steel mixing system"],
      ["Control", "Automatic pressure and flow coordination"],
      ["Line Position", "Before carbonated beverage filling machine"],
      ["Material", "Food-grade stainless steel"],
    ],
  },
  {
    slug: "depalletizer",
    title: "Depalletizer",
    category: "Depalletizer",
    code: "XD",
    image: "/images/products/auxiliary/depalletizer.png",
    videoUrl: "https://youtu.be/ZJAs4NYiBv4",
    shortDescription:
      "Automatic empty bottle or can depalletizing system for medium and high-speed production lines.",
    description: [
      "The depalletizer automatically unloads empty bottles or cans from pallets and transfers them into the filling line.",
      "It can include pallet conveyor, depalletizing host, paper pad collector, pallet collector, bottle conveyor, pneumatic control, program control, and safety protection.",
    ],
    highlights: [
      "Designed for beer, beverage, mineral water, chemical, pharmaceutical, and logistics lines.",
      "Siemens PLC and servo control with self-diagnosis and automatic stop protection.",
      "High-level, low-level, full-automatic, semi-automatic, and manual pallet options.",
    ],
    parameters: [
      ["Model", "Type", "Speed", "Stack Height", "Power", "Dimensions", "Pallet Size", "Configuration"],
      ["LC-XD400", "High-level / fully automatic", "200-600 bottles/min", "2-16 layers; max 2800 mm", "23 kW", "11800×6000×5400 mm", "1200×1000×150 mm", "Pallet conveyor + host + paper pad collector + pallet collector + bottle conveyor + platform + guard"],
      ["LC-XD300 Auto", "Low-level / fully automatic", "200-400 bottles/min", "2600 mm customizable", "12 kW", "9620×4400×4600 mm", "1200×1000×150 mm", "Pallet conveyor + host + pallet collector + paper pad collector + bottle conveyor + guard"],
      ["LC-XD300 Semi", "Low-level / semi-automatic", "200-400 bottles/min", "2600 mm customizable", "10 kW", "8000×3670×4600 mm", "1200×1000×150 mm", "Manual unpacking and pad removal; forklift removes empty pallets"],
      ["LC-XD200", "Low-level / manual pallet handling", "12,000 BPH", "2000 mm customizable", "3 kW", "6500×2000×2900 mm", "1200×1000×150 mm", "Depalletizing host + bottle conveyor"],
    ],
  },
];

export function getAuxiliaryProduct(slug: string) {
  return auxiliaryProducts.find((product) => product.slug === slug);
}

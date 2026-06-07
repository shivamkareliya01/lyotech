export type LyoModel = {
  model: string;
  shellArea: number;
  condenserCapacity: number;
  shelfSize: string;
  shelves: number;
  vials: number;
  shelfSpacing: number;
  shelfTemp: string;
  minCondenser: string;
  vacuum: string;
  installDims: string;
  weight: number;
  power: number;
  group: "lab" | "small" | "mid" | "large";
};

export const LYO_MODELS: LyoModel[] = [
  { model: "LYO 0.2", shellArea: 0.24, condenserCapacity: 4, shelfSize: "400×300×15", shelves: 2, vials: 800, shelfSpacing: 100, shelfTemp: "-50°C to +80°C", minCondenser: "-70°C", vacuum: "≤5", installDims: "1400×1200×1600", weight: 350, power: 4, group: "lab" },
  { model: "LYO 0.6", shellArea: 0.6, condenserCapacity: 12, shelfSize: "500×300×15", shelves: 4, vials: 2400, shelfSpacing: 100, shelfTemp: "-50°C to +80°C", minCondenser: "-70°C", vacuum: "≤5", installDims: "1500×1200×1800", weight: 500, power: 9, group: "lab" },
  { model: "LYO 1", shellArea: 1.08, condenserCapacity: 20, shelfSize: "600×450×20", shelves: 4, vials: 3500, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "3000×1200×2600", weight: 2000, power: 16, group: "lab" },
  { model: "LYO 2", shellArea: 2.16, condenserCapacity: 40, shelfSize: "900×600×20", shelves: 4, vials: 7000, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "3000×1800×2600", weight: 3500, power: 22, group: "small" },
  { model: "LYO 3", shellArea: 2.97, condenserCapacity: 60, shelfSize: "900×660×20", shelves: 5, vials: 10500, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "4000×1800×3000", weight: 4500, power: 28, group: "small" },
  { model: "LYO 5", shellArea: 5.4, condenserCapacity: 90, shelfSize: "1200×900×20", shelves: 5, vials: 17500, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "5000×1800×3000", weight: 7500, power: 41, group: "small" },
  { model: "LYO 7.5", shellArea: 7.5, condenserCapacity: 130, shelfSize: "1200×900×20", shelves: 7, vials: 26250, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "6000×2000×3200", weight: 8500, power: 48, group: "mid" },
  { model: "LYO 10", shellArea: 9.75, condenserCapacity: 190, shelfSize: "1200×900×20", shelves: 9, vials: 38000, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "6800×2000×3800", weight: 10000, power: 60, group: "mid" },
  { model: "LYO 15", shellArea: 15.84, condenserCapacity: 280, shelfSize: "1200×1200×20", shelves: 11, vials: 57000, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "6800×2000×4000", weight: 15000, power: 75, group: "mid" },
  { model: "LYO 20", shellArea: 19.84, condenserCapacity: 380, shelfSize: "1500×1200×20", shelves: 11, vials: 76000, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "7500×2000×4200", weight: 18000, power: 90, group: "large" },
  { model: "LYO 25", shellArea: 24.75, condenserCapacity: 480, shelfSize: "1500×1500×20", shelves: 11, vials: 95000, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "7500×2000×4200", weight: 20000, power: 100, group: "large" },
  { model: "LYO 30", shellArea: 30, condenserCapacity: 580, shelfSize: "2000×1500×25", shelves: 11, vials: 114000, shelfSpacing: 100, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "6800×2200×4200", weight: 25000, power: 110, group: "large" },
  { model: "LYO 35", shellArea: 36, condenserCapacity: 680, shelfSize: "2000×1500", shelves: 12, vials: 133000, shelfSpacing: 130, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "6800×2200×4500", weight: 28000, power: 130, group: "large" },
  { model: "LYO 40", shellArea: 42, condenserCapacity: 780, shelfSize: "2000×1500", shelves: 14, vials: 152000, shelfSpacing: 130, shelfTemp: "-55°C to +80°C", minCondenser: "-75°C", vacuum: "≤5", installDims: "7000×2200×4500", weight: 30000, power: 140, group: "large" },
];

export const GROUPS = {
  lab: { label: "Lab / Pilot Scale", range: "0.2 – 1", use: "R&D, trials, universities" },
  small: { label: "Small Industrial", range: "2 – 5", use: "Small pharma batches" },
  mid: { label: "Mid-Scale Production", range: "7.5 – 15", use: "Commercial pharma production" },
  large: { label: "Large Industrial", range: "20 – 40", use: "High-volume manufacturing" },
} as const;

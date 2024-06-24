export type LevelType = {
  level: number;
  label: {
    min: string;
    max: string;
  };
  progress: number;
};

export function getDashboardLevel(value: number): LevelType {
  const levels = [
    {
      level: 1,
      values: { min: 0, max: 1000000 },
      label: { min: "0", max: "10k" },
    },
    {
      level: 2,
      values: { min: 1000000, max: 10000000 },
      label: { min: "10k", max: "100k" },
    },
    {
      level: 3,
      values: { min: 10000000, max: 100000000 },
      label: { min: "100k", max: "1m" },
    },
    {
      level: 4,
      values: { min: 100000000, max: 1000000000 },
      label: { min: "1m", max: "10m" },
    },
    {
      level: 5,
      values: { min: 1000000000, max: 5000000000 },
      label: { min: "10m", max: "50m" },
    },
    {
      level: 6,
      values: { min: 5000000000, max: 10000000000 },
      label: { min: "50m", max: "100m" },
    },
  ];

  const search = levels.find(
    level => value >= level.values.min && value <= level.values.max
  );

  const first = levels[0];
  const last = levels[levels.length - 1];

  const level = search?.level ?? (value > 0 ? last.level : first.level);

  const label = {
    min: search?.label.min ?? (value > 0 ? last.label.min : first.label.min),
    max: search?.label.max ?? (value > 0 ? last.label.max : first.label.max),
  };

  const progress = search
    ? Math.round((value / search.values.max) * 100)
    : value > 0
    ? 100
    : 0;

  return { level, label, progress };
}

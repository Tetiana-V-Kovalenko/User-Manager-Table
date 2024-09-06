type Filters<T> = Partial<Record<keyof T, string>>;

export function advancedFilter<T>(items: T[], filters: Filters<T>): T[] {
  return items.filter((item) =>
    Object.keys(filters).every((key) => {
      const itemValue = item[key as keyof T]?.toString().toLowerCase() || "";
      const filterValue = filters[key as keyof typeof filters] || "";
      return itemValue.includes(filterValue.toLowerCase());
    })
  );
}

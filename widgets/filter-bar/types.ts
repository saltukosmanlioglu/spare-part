export interface FilterBarDataProps {
  text: string;
}

export interface FilterBarProps<T> {
  categories: Array<FilterBarDataProps>;
  component: (item: T, index: number) => JSX.Element;
  data: Array<T & { type: number }>;
}

export interface BreadcrumbItemProps {
  href?: string;
  text: string;
}

export interface BreadcrumbProps {
  data: Array<BreadcrumbItemProps>;
  image: string;
}

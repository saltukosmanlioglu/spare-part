export interface BaseMenuItemProps {
  href?: any;
  text: string;
}

export interface MenuItemProps extends BaseMenuItemProps {
  subMenuItems?: Array<BaseMenuItemProps>;
}

import { MenuItemProps } from "./types";

export const menuItems: Array<MenuItemProps> = [
  {
    href: "/home",
    text: "ANASAYFA",
  },
  {
    subMenuItems: [
      {
        href: "/about/us",
        text: "Auto RAR",
      },
      {
        href: "/about/our-team",
        text: "Takımımız",
      },
    ],
    text: "HAKKIMIZDA",
  },
  {
    subMenuItems: [
      {
        href: {
          pathname: "/our-solution-partners",
          query: {
            index: 1,
          },
        },
        text: "OES",
      },
      {
        href: {
          pathname: "/our-solution-partners",
          query: {
            index: 2,
          },
        },
        text: "IAM / OEM",
      },
    ],
    text: "ÇÖZÜM ORTAKLARIMIZ",
  },
  {
    subMenuItems: [
      {
        href: {
          pathname: "/our-products",
          query: {
            index: 1,
          },
        },
        text: "Kategori 1",
      },
      {
        href: {
          pathname: "/our-products",
          query: {
            index: 2,
          },
        },
        text: "Kategori 2",
      },
      {
        href: {
          pathname: "/our-products",
          query: {
            index: 3,
          },
        },
        text: "Kategori 3",
      },
      {
        href: {
          pathname: "/our-products",
          query: {
            index: 4,
          },
        },
        text: "Kategori 4",
      },
    ],
    text: "ÜRÜNLERİMİZ",
  },
  {
    href: "/contact",
    text: "İLETİŞİM",
  },
];

export const languages = [{ text: "TR" }, { text: "EN" }];

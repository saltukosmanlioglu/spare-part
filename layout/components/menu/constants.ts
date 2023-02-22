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
        text: "Auto De Part",
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
        text: "AFTER MARKET",
      },
      {
        href: {
          pathname: "/our-solution-partners",
          query: {
            index: 2,
          },
        },
        text: "OEM",
      },
    ],
    text: "ÇÖZÜM ORTAKLARIMIZ",
  },
  {
    subMenuItems: [
      {
        href: "/our-products",
        text: "Kaporta",
      },
      {
        href: "/our-products",
        text: "Motor",
      },
      {
        href: "/our-products",
        text: "Elektrik",
      },
      {
        href: "/our-products",
        text: "Süspansiyon",
      },
      {
        href: "/our-products",
        text: "Filtreler",
      },
      {
        href: "/our-products",
        text: "Fren Sistemi",
      },
      {
        href: "/our-products",
        text: "Şanzıman",
      },
      {
        href: "/our-products",
        text: "Yağlar",
      },
      {
        href: "/our-products",
        text: "Egzoz",
      },
      {
        href: "/our-products",
        text: "Diferansiyel",
      },
      {
        href: "/our-products",
        text: "Oto Bakım Ürünleri",
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

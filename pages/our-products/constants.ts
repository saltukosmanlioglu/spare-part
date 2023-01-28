import { ProductsEnum } from "@/utils/types";
import { FilterBarDataProps, FilterBarProps } from "@/widgets/filter-bar/types";

import { ProductProps } from "./types";

export const categories: Array<FilterBarDataProps> = [
  { text: "HEPSİ" },
  { text: "KATEGORİ 1" },
  { text: "KATEGORİ 2" },
  { text: "KATEGORİ 3" },
  { text: "KATEGORİ 4" },
];

export const products: FilterBarProps<ProductProps>["data"] = [
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title1",
    type: ProductsEnum.Category1,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title2",
    type: ProductsEnum.Category2,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title3",
    type: ProductsEnum.Category3,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title4",
    type: ProductsEnum.Category4,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title5",
    type: ProductsEnum.Category1,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title6",
    type: ProductsEnum.Category2,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title7",
    type: ProductsEnum.Category3,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title8",
    type: ProductsEnum.Category4,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title9",
    type: ProductsEnum.Category1,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title10",
    type: ProductsEnum.Category2,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title11",
    type: ProductsEnum.Category3,
  },
  {
    src: "/images/layout/breadcrumb/1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores soluta quod dignissimos fuga pariatur.",
    title: "Title12",
    type: ProductsEnum.Category4,
  },
];

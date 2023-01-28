import { SolutionPartnersEnum } from "@/utils/types";
import { FilterBarDataProps, FilterBarProps } from "@/widgets/filter-bar/types";

import { PartnerProps } from "./types";

export const categories: Array<FilterBarDataProps> = [
  { text: "HEPSİ" },
  { text: "OES" },
  { text: "IAM / OEM" },
];

export const partners: FilterBarProps<PartnerProps>["data"] = [
  {
    src: "/images/partners/1.jpeg",
    type: SolutionPartnersEnum.IAM_OEM,
  },
  {
    src: "/images/partners/2.jpeg",
    type: SolutionPartnersEnum.OES,
  },
  {
    src: "/images/partners/3.jpeg",
    type: SolutionPartnersEnum.IAM_OEM,
  },
  {
    src: "/images/partners/4.jpeg",
    type: SolutionPartnersEnum.OES,
  },
  {
    src: "/images/partners/5.jpeg",
    type: SolutionPartnersEnum.IAM_OEM,
  },
  {
    src: "/images/partners/1.jpeg",
    type: SolutionPartnersEnum.OES,
  },
  {
    src: "/images/partners/2.jpeg",
    type: SolutionPartnersEnum.IAM_OEM,
  },
  {
    src: "/images/partners/3.jpeg",
    type: SolutionPartnersEnum.OES,
  },
  {
    src: "/images/partners/4.jpeg",
    type: SolutionPartnersEnum.IAM_OEM,
  },
  {
    src: "/images/partners/5.jpeg",
    type: SolutionPartnersEnum.OES,
  },
];

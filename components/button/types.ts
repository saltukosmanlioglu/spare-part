import { ButtonType } from "@/utils/types";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: ButtonType;
}

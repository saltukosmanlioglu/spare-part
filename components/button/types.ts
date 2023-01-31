import { ButtonType } from "@/utils/types";

export interface ButtonProps {
  isLoading: boolean;
  onClick?: () => void;
  text: string;
  type: ButtonType;
}

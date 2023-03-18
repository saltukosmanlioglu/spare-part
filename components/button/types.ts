import { ButtonType } from "@/utils/types";

export interface ButtonProps {
  isDisabled?: boolean;
  isLoading: boolean;
  onClick?: () => void;
  text: string;
  type: ButtonType;
}

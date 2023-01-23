export type ButtonType = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: ButtonType;
}

import React from "react";

export type FlagCardType = undefined | "error" | "success";

export interface FlagCardProps {
  message: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  type: FlagCardType;
  visible: boolean;
}

import React from "react";

export interface ServiceCardProps {
  child?: React.ReactNode;
  description: string;
  href?: string;
  isShadow?: boolean;
  title: string;
}

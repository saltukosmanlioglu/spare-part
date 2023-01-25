import React from "react";

import { BreadcrumbProps } from "@/layout/components/breadcrumb";

export interface MainLayoutProps {
  breadcrumb?: BreadcrumbProps;
  children: React.ReactNode;
}

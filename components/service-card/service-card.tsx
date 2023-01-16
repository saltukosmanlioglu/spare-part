import React from "react";
import Link from "next/link";

import { ServiceCardProps } from "./types";
import * as Styled from "./service-card.styled";

const ServiceCard: React.FunctionComponent<ServiceCardProps> = ({
  description,
  href,
  index,
  title,
}) => {
  return (
    <Styled.ServiceCard>
      <b>{index}</b>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href={href}>READ MORE</Link>
    </Styled.ServiceCard>
  );
};

export default ServiceCard;

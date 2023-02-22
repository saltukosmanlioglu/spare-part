import React from "react";
import Link from "next/link";

import { ServiceCardProps } from "./types";
import * as Styled from "./service-card.styled";

const ServiceCard: React.FunctionComponent<ServiceCardProps> = ({
  child,
  description,
  href,
  isShadow,
  title,
}) => {
  return (
    <Styled.ServiceCard isShadow={isShadow}>
      {child && <div>{child}</div>}
      <h1>{title}</h1>
      <p>{description}</p>
      {href && (
        <Link href={href}>
          <p>READ MORE</p>
        </Link>
      )}
    </Styled.ServiceCard>
  );
};

export default ServiceCard;

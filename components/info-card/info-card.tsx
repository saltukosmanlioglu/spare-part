import React from "react";

import { InfoCardProps } from "./types";
import * as Styled from "./info-card.styled";

const InfoCard: React.FunctionComponent<InfoCardProps> = ({
  description,
  icon,
  title,
}) => {
  return (
    <Styled.InfoCard>
      {icon}
      <div>
        <h3>{title}</h3>
        {description}
      </div>
    </Styled.InfoCard>
  );
};

export default InfoCard;

import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { BiError } from "react-icons/bi";

import { FlagCardProps } from "./types";
import * as Styled from "./FlagCard.styled";

const FlagCard: React.FunctionComponent<FlagCardProps> = ({
  message,
  title,
  type,
  visible,
  setVisible,
}) => {
  useEffect(() => {
    setTimeout(() => {
      visible && setVisible(false);
    }, 4000);
  }, [visible, setVisible]);

  return (
    <Styled.FlagCard type={type}>
      <Styled.Header>
        {type === "success" ? (
          <TiTick color="#fff" size={20} />
        ) : (
          <BiError color="#fff" size={20} />
        )}
        <p>{title}</p>
      </Styled.Header>
      <Styled.Body>
        <p>{message}</p>
      </Styled.Body>
    </Styled.FlagCard>
  );
};

export default FlagCard;

import styled from "styled-components";

export const InfoCard = styled.div`
  padding: 20px;
  box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 8px;

  & > div {
    margin-left: 30px;

    h3 {
      font-size: 22px;
      font-family: PThin;
      margin-bottom: 10px;
      color: #252531;
    }

    a,
    p {
      font-size: 13px;
      font-family: PLight;
    }
  }
`;

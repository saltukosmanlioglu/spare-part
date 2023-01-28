import styled from "styled-components";

export const OurProducts = styled.div`
  padding: 80px 80px 40px;
`;

export const Product = styled.div`
  position: relative;
  height: 350px;
  width: calc((100% / 4) - 30px);
  
  div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    height: 350px;
    
    :hover {
      background: linear-gradient(to bottom, transparent 0%, black 70%);

      b,
      p {
        display: block;
      }
    }

    b {
      display: none;
      font-size: 18px;
      font-family: PBold;
    }

    p {
      display: none;
      margin-top: 8px;
      font-size: 14px;
      font-family: PLight;
    }
  }

  img {
    object-fit: cover;
    object-position: cover;
    z-index: -1;
  }
`;

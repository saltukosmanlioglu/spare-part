import styled from "styled-components";

export const ServiceCard = styled.div`
  padding: 60px 40px;
  height: 100%;
  background-color: #fff;
  border: 0.5px solid #eee;
  text-align: left;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;

  &:hover {
    background-color: rgba(2, 5, 11, 0.6);

    p,
    h1 {
      color: #fff;
    }

    a {
      color: #b19777;
    }
  }

  b {
    font-size: 40px;
    font-family: PBold;
    color: transparent;
    -webkit-text-stroke: 1px #b19777;
  }

  h1 {
    margin: 30px 0 20px;
    font-size: 18px;
    font-family: PSemiBold;
  }

  p {
    color: #888;
    line-height: 2;
    margin-bottom: 30px;
  }

  a {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

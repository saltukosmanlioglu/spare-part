import styled from "styled-components";

export const Breadcrumb = styled.section`
  * {
    color: #fff;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 65vh;
  margin: 40px 80px 0;
  background-color: rgba(2, 5, 11, 0.5);

  img {
    object-fit: cover;
    z-index: -1;
  }

  @media screen and (max-width: 600px) {
    margin: 0 20px;
    height: 45vh;
  }
`;

export const Detail = styled.div`
  text-align: center;

  h1 {
    font-size: 75px;
    margin-bottom: 20px;
    text-transform: capitalize;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 45px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 17px;

    span {
      margin: 0 16px;
    }

    p {
      color: #b19777;
    }
  }
`;

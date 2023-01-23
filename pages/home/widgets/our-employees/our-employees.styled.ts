import styled from "styled-components";
import Slick from "react-slick";

export const OurEmployees = styled.div`
  position: relative;
  padding: 80px 25px 80px 160px;

  @media screen and (max-width: 600px) {
    padding: 60px 20px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  display: flex;
  flex-direction: row;

  & > div:first-child {
    width: 70%;
    background-image: url("/images/home/dots.png");
    height: 70%;
  }

  & > div:last-child {
    width: 65%;
    background-color: #f8f4f3;
  }
  
  @media screen and (max-width: 600px) {
    background-color: #f8f4f3;
    
    & > div {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    flex-direction: column;

    & > div {
      width: 100%;
      padding: 0;
    }

    & > div:nth-child(2) {
      margin-top: 40px;
    }
  }
`;

export const Information = styled.div`
  width: 35%;
  padding-right: 40px;

  b {
    font-size: 16px;
    font-family: PLight;
    color: #b19777;
  }

  h3 {
    font-size: 35px;
    font-family: PThin;
    margin: 10px 0 20px;
  }

  p {
    font-size: 15px;
    color: #888888;
    line-height: 2;
  }
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  button {
    padding: 15px 30px;
    background-color: #f8f4f3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s all;

    svg {
      color: #000;
    }

    :hover {
      background-color: #b19777;

      svg {
        color: #fff;
      }
    }
  }
`;

export const Personals = styled(Slick)`
  width: 65%;
  position: relative;

  .slick-active {
    padding: 0 15px;
  }

  @media screen and (max-width: 600px) {
    .slick-active {
      padding: 0;
    }
  }
`;

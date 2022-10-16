import styled from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";

export const SubTitle = styled.div`
  color: white;
  ${flexCenter}
  justify-content: flex-start;
  width: 100%;

  h2 {
    font-size: 2rem;
    margin: 0 10px;
    border-radius: 20px;
    margin-left: 60px;
    position: relative;

    &::before {
      position: absolute;
      left: -60px;
      width: 50px;
      height: 50px;
      background-color: ${primaryColor};
      content: "";
    }

    span {
      color: ${primaryColor};
      font-size: 2rem;
    }
  }
`;

export const Wrap = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
`;

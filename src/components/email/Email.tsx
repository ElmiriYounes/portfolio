import React from "react";
import styled from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const IconEmail = styled(MdAlternateEmail)`
  font-size: 3rem;
  color: white;
  background-color: ${primaryColor};
  border-radius: 50%;
  padding: 10px;
  transition: all 0.5s linear;

  &:hover {
    color: ${primaryColor};
    background-color: white;
  }
`;

const EmailWrap = styled.div`
  ${flexCenter}
  position: fixed;
  right: 30px;
  bottom: 10px;
  z-index: 1;
  transition: all 0.5s linear;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 50%;
    background-color: white;
    animation: bounding 3s 2s ease-out infinite;
    pointer-events: none;
    opacity: 0;

    @keyframes bounding {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      66% {
        transform: scale(1.5);
        opacity: 0;
      }
      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
`;

const Email = () => {
  return (
    <a href="mailto:elmiri.younes@hotmail.com">
      <EmailWrap>
        <IconEmail />
      </EmailWrap>
    </a>
  );
};

export default Email;

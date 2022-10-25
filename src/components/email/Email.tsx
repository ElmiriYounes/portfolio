import React from "react";
import styled, { keyframes } from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

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

export const Bounding = styled(motion.div)`
  position: absolute;
  content: "";
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  z-index: -1;
`;

const EmailWrap = styled.div`
  ${flexCenter}
  position: fixed;
  right: 30px;
  bottom: 10px;
  z-index: 1;
  transition: all 0.5s linear;
`;

const Email = () => {
  return (
    <a href="mailto:elmiri.younes@hotmail.com">
      <EmailWrap>
        <Bounding
          initial={{
            opacity: 1,
            width: "80%",
            height: "80%",
          }}
          animate={{
            opacity: 0,
            width: "150%",
            height: "150%",
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <IconEmail />
      </EmailWrap>
    </a>
  );
};

export default Email;

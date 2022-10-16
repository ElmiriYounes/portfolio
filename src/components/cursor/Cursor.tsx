import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";
import {BiTargetLock} from 'react-icons/bi'

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #FFE900;
  border-radius: 50%;
  position: absolute;
  z-index: 2000;
  transition: all 0.3s;
  pointer-events: none;
`;

const MoveCursor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  z-index: 2000;
  transition: all 0s;
  pointer-events: none;
  ${flexCenter}

  .iconTarget{
    color: #FFE900;
  }
`;

const Cursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent) => {
    cursorRef.current!.style.left = `calc(${event.pageX}px - 10px)`;
    cursorRef.current!.style.top = `calc(${event.pageY}px - 10px)`;
    circleRef.current!.style.left = `calc(${event.pageX}px - 30px)`;
    circleRef.current!.style.top = `calc(${event.pageY}px - 30px)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <MoveCursor ref={cursorRef}>
        <BiTargetLock className="iconTarget"/>
      </MoveCursor>
      <Circle ref={circleRef} />
    </>
  );
};

export default Cursor;

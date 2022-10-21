import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";
import { BiTargetLock } from "react-icons/bi";

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #ffe900;
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

  .iconTarget {
    color: #ffe900;
  }
`;

const Cursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<string>("visible");

  useEffect(() => {
    cursorRef.current!.style.visibility = display;
    circleRef.current!.style.visibility = display;
  }, [display]);

  const handleMove = (event: MouseEvent) => {

    if (navigator.maxTouchPoints === 0 || navigator.maxTouchPoints === 256) {
      document.body.style.cursor = 'none';
      setDisplay('visible')
      cursorRef.current!.style.left = `calc(${event.pageX}px - 10px)`;
      cursorRef.current!.style.top = `calc(${event.pageY}px - 10px)`;
      circleRef.current!.style.left = `calc(${event.pageX}px - 30px)`;
      circleRef.current!.style.top = `calc(${event.pageY}px - 30px)`;
    } else {
      setDisplay("hidden");
      document.body.style.cursor = 'auto';
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <MoveCursor ref={cursorRef}>
        <BiTargetLock className="iconTarget" />
      </MoveCursor>
      <Circle ref={circleRef} />
    </>
  );
};

export default Cursor;

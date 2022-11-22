import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../Global.styles";
import { BiTargetLock } from "react-icons/bi";

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #ffe900;
  border-radius: 50%;
  position: absolute;
  z-index: 2000;
  transition: all 0.05s ease-out;
  pointer-events: none;
  display: none;
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
  display: none;

  .iconTarget {
    color: #ffe900;
  }
`;

const Cursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<string>("none");

  useEffect(() => {
    cursorRef.current!.style.display = display;
    circleRef.current!.style.display = display;
  }, [display]);

  const handleMove = (event: MouseEvent) => {
    const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a");
    if (navigator.maxTouchPoints === 0 || navigator.maxTouchPoints === 256) {
      document.body.style.cursor = "none";
      links.forEach((el: HTMLAnchorElement) => {
        el.style.cursor = "none";
      });
      setDisplay("flex");
      cursorRef.current!.style.left = `calc(${event.pageX}px - 10px)`;
      cursorRef.current!.style.top = `calc(${event.pageY}px - 10px)`;
      circleRef.current!.style.left = `calc(${event.pageX}px - 30px)`;
      circleRef.current!.style.top = `calc(${event.pageY}px - 30px)`;
    } else {
      links.forEach((el: HTMLAnchorElement) => {
        el.style.cursor = "pointer";
      });
      setDisplay("none");
      document.body.style.cursor = "auto";
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
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

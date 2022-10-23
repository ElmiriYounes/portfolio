import styled, { css } from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";
import { Canvas } from "@react-three/fiber";

export const Logos = styled(Canvas)`
  position: absolute;
  right: 0;
  width: 450px !important;
  height: 580px !important;
`;

const BurgerStyle = css`
  height: 2px;
  width: 70%;
  background-color: ${primaryColor};
  position: absolute;
  transition: all 0.3s linear;
`;

interface IBurger {
  opened?: boolean;
}

export const BurgerTop = styled.div<IBurger>`
  ${BurgerStyle}
  width: ${(props) => (props.opened ? `13px` : "70%")};
  transform: ${(props) =>
    props.opened
      ? `translateY(-5px) translateX(-5px) rotate(45deg)`
      : `translateY(-8px) translateX(0) rotate(0)`};
`;

export const BurgerMiddle = styled.div<IBurger>`
  ${BurgerStyle}
  transform: ${(props) => (props.opened ? "rotate(-45deg)" : "rotate(0)")};
`;

export const BurgerBottom = styled.div<IBurger>`
  ${BurgerStyle}
  width: ${(props) => (props.opened ? `13px` : "70%")};
  transform: ${(props) =>
    props.opened
      ? `translateY(5.5px) translateX(5.5px) rotate(45deg)`
      : `translateY(8px) translateX(0) rotate(0)`};
`;

export const MenuBurger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    background-color: white;
    position: relative;
    z-index: 1;
    ${flexCenter}
  }
`;

interface ItemProps {
  hovered?: boolean;
  active?: boolean;
}

export const Item = styled.li<ItemProps>`
  ${flexCenter}
  position: relative;
  z-index: 0;
  color: white;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:last-child {
    padding-right: inherit;
  }

  &:hover::before {
    width: 50px;
  }

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 110%;
    left: 0;
    top: -5%;
    background-color: ${primaryColor};
    transition: all 0.3s ease-out;
    z-index: -1;
  }
`;

export const Items = styled.ul<IBurger>`
  ${flexCenter}
  position: relative;

  .active::before {
    width: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${(props) => (props.opened ? "0" : "-100%")};
    transition: all 1s ease-in-out;
    padding: 20px;
    background-color: ${primaryColor};
  }
`;

export const Logo = styled.div`
  ${flexCenter}
  font-size: 2.5rem;
  font-weight: bold;
  color: white;

  span {
    font-size: 2.5rem;
    color: ${primaryColor};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  padding: 20px;
  ${flexCenter}
  position: relative;
  z-index: 99;
  justify-content: space-between;
`;

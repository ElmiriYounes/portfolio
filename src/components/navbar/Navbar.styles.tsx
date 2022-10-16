import styled from "styled-components";
import { flexCenter, primaryColor } from "../../Global.styles";

interface ItemProps{
    hovered?:boolean
    active?:boolean
}

export const Item = styled.li<ItemProps>`
  ${flexCenter}
  position: relative;
  z-index: 0;
  color: white;
  padding: 10px 20px;
  
  &:last-child {
    padding-right: inherit;
  }

  &:hover::before{
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

export const Items = styled.ul`
  ${flexCenter}

  .active::before{
    width: 50px;
  }
`;

export const Logo = styled.div`
  ${flexCenter}

  img {
    height: 100%;
    width: 150px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 20px;
  ${flexCenter}
  justify-content: space-between;
`;

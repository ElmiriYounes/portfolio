import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { Container } from "../../Global.styles";
import { Item, Items, Logo, Nav } from "./Navbar.styles";
import logo from "../../assets/images/logo.png";
import { NavbarItems } from "../../datas/NavbarItems";
import { Link } from "react-router-dom";

interface NavProps {
  setCurrentPath: (path: string) => void;
  currentPath:string;
}

const Navbar: FC<NavProps> = (props) => {
  return (
    <Container>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Items>
          {NavbarItems.map((item, index) => (
            <Item
              key={index}
              className={`${props.currentPath === item.path ? "active" : null}`}
              onClick={() => {
                props.setCurrentPath(item.path);
              }}
            >
              {item.title}
            </Item>
          ))}
        </Items>
      </Nav>
    </Container>
  );
};

export default Navbar;

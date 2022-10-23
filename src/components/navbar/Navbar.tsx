import React, {
  FC,
  useEffect,
} from "react";
import { Container } from "../../Global.styles";
import {
  BurgerBottom,
  BurgerMiddle,
  BurgerTop,
  Item,
  Items,
  Logo,
  MenuBurger,
  Nav,
} from "./Navbar.styles";
import { NavbarItems } from "../../datas/NavbarItems";

interface NavProps {
  setCurrentPath: (path: string) => void;
  setOpen: (open: boolean) => void;
  open: boolean;
  currentPath: string;
}

const Navbar: FC<NavProps> = (props) => {

  const handleClick = () => {
    props.setOpen(!props.open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768){
        props.open === true && props.setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props]);

  return (
    <Container>
      <Nav>
        <Logo>
          Y<span>o</span>unes
        </Logo>
        <Items opened={props.open}>
          <Item>
            <MenuBurger onClick={handleClick}>
              <BurgerTop opened={props.open} />
              <BurgerMiddle opened={props.open} />
              <BurgerBottom opened={props.open} />
            </MenuBurger>
          </Item>
          {NavbarItems.map((item, index) => (
            <Item
              key={index}
              className={`${props.currentPath === item.path ? "active" : null}`}
              onClick={() => {
                props.setCurrentPath(item.path);
                handleClick();
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

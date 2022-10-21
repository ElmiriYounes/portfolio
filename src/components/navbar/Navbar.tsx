import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
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
import logo from "../../assets/images/logo.png";
import { NavbarItems } from "../../datas/NavbarItems";
import { Link } from "react-router-dom";

interface NavProps {
  setCurrentPath: (path: string) => void;
  currentPath: string;
}

const Navbar: FC<NavProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((o) => !o);
  };

  useEffect(() => {
    console.log(open);  
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Items open={open}>
          <Item>
            <MenuBurger onClick={handleClick}>
              <BurgerTop open={open} />
              <BurgerMiddle open={open} />
              <BurgerBottom open={open} />
            </MenuBurger>
          </Item>
          {NavbarItems.map((item, index) => (
            <Item
              key={index}
              className={`${props.currentPath === item.path ? "active" : null}`}
              onClick={() => {
                props.setCurrentPath(item.path);
                handleClick();
                window.scrollTo(0, 0);
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

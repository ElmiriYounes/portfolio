import React, { FC, Suspense, useEffect } from "react";
import { Container } from "../../Global.styles";
import {
  BurgerBottom,
  BurgerMiddle,
  BurgerTop,
  Item,
  Items,
  Logo,
  Avatar,
  MenuBurger,
  Nav,
} from "./Navbar.styles";
import { NavbarItems } from "../../datas/NavbarItems";
import { OrbitControls } from "@react-three/drei";
import { YounesIdle } from "../threejs/YounesIdle";

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
      if (window.innerWidth > 768) {
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
        <Logo
          onClick={() => {
            props.setCurrentPath("home");
          }}
        >
          Y<span>o</span>unes
          <Avatar className="canvas">
            <ambientLight intensity={0.5} />
            <directionalLight position={[-20, 1, 20]} intensity={1} />
            <Suspense fallback={null}>
              <YounesIdle />
            </Suspense>
            <OrbitControls
              position={[5, 5, 5]}
              enableZoom={false}
              enableRotate={false}
            />
          </Avatar>
        </Logo>
        <MenuBurger onClick={handleClick}>
          <BurgerTop opened={props.open} />
          <BurgerMiddle opened={props.open} />
          <BurgerBottom opened={props.open} />
        </MenuBurger>
        <Items opened={props.open}>
          {NavbarItems.map((item, index) => (
            <Item
              key={index}
              className={`${props.currentPath === item.path ? "active" : null}`}
              onClick={() => {
                props.setCurrentPath(item.path);
                window.innerWidth <= 768 && handleClick();
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

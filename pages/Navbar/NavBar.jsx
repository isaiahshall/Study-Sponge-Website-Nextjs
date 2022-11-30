import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../resources/Sponge-Text-Logo.png";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/home" },
  { text: "About Us", href: "/about" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"} className={`nav__logo`}>
          <a>
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={25}
              margin={50}
            ></Image>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

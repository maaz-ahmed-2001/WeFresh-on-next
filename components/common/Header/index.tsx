import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../assests/images/logo.svg";
import menuBtn from "../../../assests/images/menu.svg";
import close from "../../../assests/images/Close.svg";
import styles from "./index.module.css";

type LinkProps = {
  links: {
    name: string;
    link: string;
  }[];
};
const Header = (props: LinkProps) => {
  const [show, setShow] = useState<Boolean>(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <header
      className={"bg-transparent w-full absolute top-0 py-8 z-10 "}
      style={
        show
          ? {
              backgroundColor: "#68BAE3",
              height: "100vh",
              transition: "0.3s all",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="container xs:px-2 sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44">
        <nav
          className={
            "flex justify-between items-center w-full mx-auto relative " +
            styles.navbar
          }
        >
          <div className="flex justify-center items-center">
            <Image src={logo} alt="WeFresh" />
          </div>

          <ul
            className={
              show
                ? styles.show
                : styles.hidden + " duration-300 transition-all"
            }
          >
            {props.links.map((link, index: number) => (
              <li className="" key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
            <li>
              <button className={styles.signUpBtn}>Sign up</button>
            </li>
          </ul>
          <button
            className={"md:flex lg:hidden 2xl:hidden " + styles.headerBtn}
            onClick={handleClick}
          >
            <Image src={show ? close : menuBtn} alt="collapse-btn" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

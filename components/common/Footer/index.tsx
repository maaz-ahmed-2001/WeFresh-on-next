import Image from "next/image";
import styles from "./index.module.css";
import footerLogo from "../../../assests/images/WeFreshBlue.svg";
import FooterLinks from "../FooterLinks";
import DownloadApp from "../DownloadApp";
import googlePlay from "../../../assests/images/playIconDark.svg";
import appleIcon from "../../../assests/images/Apple.svg";

const Footer = () => {
  const prop1 = {
    title: "service area",
    links: [
      { name: "Lorem", link: "/" },
      { name: "Lorem", link: "/" },
      { name: "Lorem", link: "/" },
      { name: "Lorem", link: "/" },
    ],
  };
  const prop2 = {
    title: "about",
    links: [
      { name: "Story of WeFresh", link: "/" },
      { name: "Read our Blog", link: "/" },
      { name: "Lorem", link: "/" },
    ],
  };
  const prop3 = {
    title: "help",
    links: [
      { name: "help Centre", link: "/" },
      { name: "Lorem", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Lorem", link: "/" },
    ],
  };
  const getApp = {
    text: "Available on",
    image: [
      {
        src: googlePlay,
        alt: "Play-store-icon",
      },
      {
        src: appleIcon,
        alt: "App-store-icon",
      },
    ],
  };
  return (
    <footer className={styles.footer}>
      <div
        className={
          "container xs:px-4 sm:px-5 md:px-8 lg:px-14 xl:px-24 2xl:px-36 3xl:px-72 pt-20 pb-10 md:pb-0"
        }
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 3xl:grid-cols-5 gap-4">
          <div className="mb-0 md:mb-9 h-fit">
            <Image src={footerLogo} alt="WeFresh-logo" />
          </div>
          <div>
            <FooterLinks footerLink={prop1} />
          </div>
          <div>
            <FooterLinks footerLink={prop2} />
          </div>
          <div>
            <FooterLinks footerLink={prop3} />
          </div>
          <div className={styles.getApp + " md:mx-auto h-fit"}>
            <DownloadApp download={getApp} />
          </div>
        </div>
      </div>
      <div
        className={
          "container xs:px-2 sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44 " +
          styles.bottomBar
        }
      >
        <p className="md:text-center">© 2020 WeFresh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;

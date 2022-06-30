import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
import styles from "./index.module.css";
type footerProps = {
  footerLink: {
    title: string;
    links: {
      name: string;
      link: string;
    }[];
  };
};
const FooterLinks = (props: footerProps) => {
  return (
    <div className={styles.footerLinks}>
      <h4>{props.footerLink.title}</h4>
      <ul>
        {props.footerLink.links.map(({ name, link }, index) => (
          <li key={index}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

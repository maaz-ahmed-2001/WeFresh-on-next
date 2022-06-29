import Image from "next/image";
import Link from "next/link";
import logo from "../../../assests/images/logo.svg";

type LinkProps = {
  links: {
    name: string;
    link: string;
  }[];
};
const Header = (props: LinkProps) => {
  return (
    <header className="bg-transparent w-full absolute top-0">
      <nav className="flex justify-between items-center w-full container mx-auto">
        <div className="">
          <Image src={logo} alt="WeFresh" />
        </div>
        <ul className="w-100 flex items-center justify-end list-none gap-12">
          {props.links.map((link, index: number) => (
            <li className="py-8" key={index}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

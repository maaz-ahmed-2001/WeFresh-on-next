import Footer from "./common/Footer";
import Header from "./common/Header";
import Head from "next/head";
type childComponent = {
  children: React.ReactNode;
};
export const Layout = (props: childComponent) => {
  const navLinks = [
    {
      name: "Our App",
      link: "/",
    },
    {
      name: "About us",
      link: "/aboutUs",
    },
    {
      name: "For Business",
      link: "/forBusiness",
    },
    {
      name: "English",
      link: "/english",
    },
  ];
  return (
    <>
      <Head>
        <title>WeFresh</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header links={navLinks} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

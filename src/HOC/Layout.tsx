import React from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";

interface LayoutProps {
  toggleColors: () => void;
  children: React.ReactNode;
}

const Layout = ({ children, toggleColors }: LayoutProps) => {
  return (
    <>
      <Header toggleColors={toggleColors} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

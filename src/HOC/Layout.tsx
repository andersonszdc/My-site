import React from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";

interface LayoutProps {
  toggleTheme: () => void;
  children: React.ReactNode;
}

const Layout = ({ children, toggleTheme }: LayoutProps) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

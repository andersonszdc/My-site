import React from 'react'
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  toggleTheme: (event: React.MouseEvent<HTMLDivElement>) => void
  children: React.ReactNode
}

const Layout = ({ children, toggleTheme }: LayoutProps) => {
  return (
      <>
          <Header toggleTheme={toggleTheme} />
          <main>{children}</main>
          <Footer />
      </>
  );
}

export default Layout;
import type { ReactNode } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

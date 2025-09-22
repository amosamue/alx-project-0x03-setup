// components/layouts/Layout.tsx
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24"> {/* padding-top to offset fixed header */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

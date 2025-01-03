import React from "react";
import Header from "../(routes)/_components/Menu/Header";
import Footer from "./_components/Footer";
const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RoutesLayout;

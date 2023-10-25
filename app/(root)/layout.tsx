import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 mx-auto max-w-screen-2xl">
      <Navbar />
      <div className="flex">
        <div className=" mx-auto max-w-screen-xl">{children}</div>
      </div>
    </main>
  );
};

export default Layout;

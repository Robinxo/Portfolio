import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  return (
    <div className="relative bg-[#09090B] text-amber-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Main content fills between navbar and footer */}
      <main className="flex-1">{children}</main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

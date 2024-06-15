import React from "react";
import Navbar from "@/components/Navbar";
import CompanyHistory from "@/components/CompanyHistory";

export default function Layout({ children, productstestimonials }) {
  return (
    <>
      <main>
        {children}
        {productstestimonials}
      </main>
    </>
  );
}

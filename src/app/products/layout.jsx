import React from "react";
import Navbar from "@/components/Navbar";
import CompanyHistory from "@/components/CompanyHistory";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

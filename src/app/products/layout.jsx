import React from "react";
import Navbar from "@/components/Navbar";
import CompanyHistory from "@/components/CompanyHistory";

export const metadata = {
  title: "Blitz PC | Products",
  description: "Best Performance, Best Bang for Bucks.",
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

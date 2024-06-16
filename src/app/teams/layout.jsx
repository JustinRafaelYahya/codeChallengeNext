import React from "react";

export const metadata = {
  title: "Blitz PC | Teams",
  description: "Best Performance, Best Bang for Bucks.",
};

export default function Layout({ children, productbanner }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

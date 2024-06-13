import React from "react";
import Navbar from "@/components/Navbar";

export default function Layout({ children, companyhistory }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {companyhistory}
      </body>
    </html>
  );
}

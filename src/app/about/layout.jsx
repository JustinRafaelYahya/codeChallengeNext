import React from "react";

export const metadata = {
  title: "Blitz PC | About",
  description: "Best Performance, Best Bang for Bucks.",
};

export default function Layout({
  children,
  companyhistory,
  companyculture,
  companyteams,
}) {
  return (
    <>
      <main>
        {children}
        {companyhistory}
        {companyculture}
        {companyteams}
      </main>
    </>
  );
}

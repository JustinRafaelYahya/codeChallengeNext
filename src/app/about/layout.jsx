import React from "react";

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

"use client";
import React from "react";
import Link from "next/link";

export default function NavItems({ className, listStyle }) {
  const menuList = [
    ["Home", "/"],
    ["About", "/about"],
    ["Products", "/products"],
    ["Teams", "/teams"],
    ["Contact", "/contact"],
  ];
  return (
    <div>
      <nav>
        <ul className={`${className}`}>
          {menuList.map((menu) => (
            <li className={`${listStyle}`}>
              <Link href={menu[1]}>{menu[0]}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

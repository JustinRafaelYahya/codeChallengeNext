"use client";
import React from "react";
import Link from "next/link";

export default function NavItems({ className, listStyle }) {
  const menuList = [
    ["Home", "/"],
    ["About", "/about/"],
    ["Products", "/products/"],
    ["Teams", "/teams/"],
    ,
  ];
  return (
    <div>
      <nav>
        <ul className={`${className}`}>
          {menuList.map((menu) => (
            <li className={`${listStyle}`} key={menu[0]}>
              <Link
                href={menu[1]}
                alt={menu[0]}
                className="hover:text-[#672e91]"
              >
                {menu[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

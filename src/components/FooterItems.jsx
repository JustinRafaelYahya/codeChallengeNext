"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function FooterItems({ className, listStyle }) {
  const menuList = [
    {
      id: 1,
      icon: (
        <FaTwitter
          className="mx-auto mb-6 fill-[#1a1c1e] md:fill-white"
          size={20}
        />
      ),
      dest: "https://x.com/rafaeljustin92",
      alt: "Blitz PC X or Twitter Page",
    },
    {
      id: 2,
      icon: (
        <FaFacebook
          className="mx-auto mb-6 fill-[#1a1c1e] md:fill-white"
          size={20}
        />
      ),
      dest: "https://www.facebook.com/justin.rafaelzz/",
      alt: "Blitz PC Facebook Page",
    },
    {
      id: 3,
      icon: (
        <FaInstagram
          className="mx-auto mb-6 fill-[#1a1c1e] md:fill-white"
          size={20}
        />
      ),
      dest: "https://www.instagram.com/rafaeljustin92/",
      alt: "Instagram Page Blitz PC",
    },
  ];
  return (
    <div className="w-screen">
      <nav>
        <ul className={`${className}`}>
          {menuList.map((menu) => (
            <li className={`${listStyle}`} key={menu.id}>
              <Link href={menu.dest} alt={menu.alt}>
                {menu.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

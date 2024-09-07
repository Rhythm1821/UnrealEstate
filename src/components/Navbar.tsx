"use client";

import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
    const [moblieDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!moblieDrawerOpen)
    } 
  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="container flex items-center justify-between rounded-lg bg-black py-3">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            className="mr-2"
            src="/logo.png"
            width={60}
            height={30}
            alt="Logo"
          />
          <span className="text-sm tracking-tight text-white">UnrealEstate</span>
        </div>
        <div className="hidden lg:flex">
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="hidden text-sm text-white lg:flex">
          <Button variant="outline" className="mr-2 bg-black">
            Sign in
          </Button>
          <Button className="bg-slate-800">Sign up</Button>
        </div>
      <div>
        <Button onClick={toggleNavbar} className="flex-col justify-end md:flex lg:hidden">
            {moblieDrawerOpen ? <X /> : <Menu />}
        </Button>
      </div>
      </div>
      {moblieDrawerOpen && (
        <div className="rounded-md bg-black lg:hidden">
          <ul className="flex flex-col items-center justify-center">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="py-3">
                <Link
                  className="block text-center justify-center border-neutral-900 px-4 py-2 text-sm text-white hover:text-neutral-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center pb-8 text-white lg:hidden">
            <Button variant="outline" className="mr-2 bg-black">Sign in</Button>
            <Button className="bg-slate-800">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
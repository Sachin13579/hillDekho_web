"use client";
import Image from "next/image";
import SearchBox from "../SearchBox/SearchBox";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";
const Navbar = () => {
  const navLinks = [
    {
      name: "Destinations",
      link: "/Destination",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "ContactUs",
      link: "/ContactUs",
    },
  ];
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    console.log(isDrawerOpen ? "Drawer open" : "Drawer open closed");
    setIsDrawerOpen(!isDrawerOpen);
  };
  const toggleOpen = () => {
    console.log("i got hit...........", isDrawerOpen);
    setIsDrawerOpen((value) => !value);
  };
  return (
    <header className="bg-white">
      <nav
        className=" p-2 mx-auto flex max-w-7xl items-center justify-between lg:p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex ml-3 lg lg:gap-x-12">
          <div className=" flex lg:flex-0 md:flex-auto">
            <Link href="/" className="-m-1.5 p-0">
              {/* <span className="sr-only">Hill Dekho</span> */}
              <Image
                className=" h-8  lg:h-12 w-auto "
                src="/hillDekhoLogo.png"
                alt=""
                width={100}
                height={500}
              />
            </Link>
          </div>

          <div className="hidden mt-3 lg:flex  lg:gap-x-12">
            {navLinks.map((link) => {
              return (
                <Link
                  className={clsx(
                    "flex h - [48px] grow items - center justify - center gap - 2 rounded - md bg - gray - 50 p - 3 text - sm font - medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    { "bg-sky-100 text-blue-600": pathname === link.href }
                  )}
                  href={link.link}
                  key={link.name}
                >
                  {/* <a className="text-gray-500 hover:text-gray-900"> */}
                  <p className=" text-sm font-semibold leading-6 text-gray-900text-gray-500 hover:text-gray-900">
                    {link.name}
                  </p>
                  {/* </a> */}
                </Link>
              );
            })}
          </div>
        </div>

        <SearchBox />
        <div className="relative inline-block text-left">
          <div
            onClick={toggleOpen}
            className=" hidden lg:flex ml-10 lg:gap-x-12"
          >
            <Image
              className="h-12 w-auto"
              src="/authAction.png"
              alt=""
              width={100}
              height={500}
            />
          </div>

          {isDrawerOpen && <UserMenu />}
        </div>
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </nav>
    </header>
  );
};
export default Navbar;

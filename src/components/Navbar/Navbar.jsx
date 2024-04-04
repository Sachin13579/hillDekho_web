'use client'
import Image from "next/image";
import SearchBox from "../SearchBox/SearchBox";
import MobileDrawer from './mobileDrawer'
import Link from 'next/link';
import { useState } from "react";
const Navbar = () => {
    const navLinks = [
        {
            name: "Destinations",
            link: "/Destination"
        },
        {
            name: "Blog",
            link: "/Blog"
        },
        {
            name: "About",
            link: "/About"
        },
        {
            name: "ContactUs",
            link: "/ContactUs"
        }
    ]
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        console.log(isDrawerOpen ? "Drawer open" : "Drawer open closed");
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <header className="  bg-white">
            <nav className=" p-2 mx-auto flex max-w-7xl items-center justify-between lg:p-6 lg:px-8" aria-label="Global">
                <div className="flex ml-3 lg lg:gap-x-12">


                    <div className=" flex lg:flex-0 md:flex-auto">


                        <Link href="/" className="-m-1.5 p-0">
                            <span className="sr-only">Hill Dekho</span>
                            <Image className=" h-8  lg:h-12 w-auto " src="/hillDekhoLogo.png" alt="" width={100} height={500} />
                        </Link>
                    </div>


                    <div className="hidden mt-3 lg:flex  lg:gap-x-12">
                        {
                            navLinks.map((link) => {
                                return (
                                    <Link href={link.link} key={link.name}>
                                        {/* <a className="text-gray-500 hover:text-gray-900"> */}
                                        <p className=" text-sm font-semibold leading-6 text-gray-900text-gray-500 hover:text-gray-900">
                                            {link.name}
                                        </p>
                                        {/* </a> */}
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>

                <SearchBox />
                <div className=" hidden lg:flex ml-10 lg:gap-x-12">

                    <Image className="h-12 w-auto" src="/authAction.png" alt="" width={100} height={500} />
                </div>
                <div className="sm:hidden relative flex flex-row my-4" onClick={handleDrawerToggle}>
                    {/* <button className="absolute right-2 top-2 p-2" onClick={handleDrawerToggle}>
                        <FontAwesomeIcon className="text-4xl" icon={faBars} />
                        drwaer
                    </button> */}
                    <Image src={'/category.svg'} width={30} height={30} alt="menuBar" />
                </div>
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </nav>

        </header >

    )
}
export default Navbar
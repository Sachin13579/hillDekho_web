import Image from "next/image";
import SearchBox from "../SearchBox/SearchBox";
import Link from 'next/link';
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
    return (
        <header className="  bg-white">
            <nav className="  mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex ml-3 lg lg:gap-x-12">


                    <div className="flex lg:flex-0 ">


                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Hill Dekho</span>
                            <Image className=" h-12 w-auto " src="/hillDekhoLogo.png" alt="" width={100} height={500} />
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

                <div className=" hidden lg:flex ml-10 lg:gap-x-12">

                    <SearchBox />
                    <Image className="h-12 w-auto" src="/authAction.png" alt="" width={100} height={500} />
                </div>
            </nav>

        </header >

    )
}
export default Navbar
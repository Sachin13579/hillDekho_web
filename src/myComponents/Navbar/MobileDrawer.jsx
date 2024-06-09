import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

function MobileDrawer({ isOpen, onClose }) {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="lg:hidden">
          <Image src={"/category.svg"} width={30} height={30} alt="menuBar" />
        </div>
        {/* <Button className="lg:hidden" variant="outline">Open</Button> */}
      </SheetTrigger>
      <SheetContent>
        <div className="grid w-[200px] p-4">
          {navLinks.map((link, index) => {
            return (
              <div key={index}>
                <SheetClose asChild>
                  <Link
                    className={clsx(
                      "flex h - [48px] grow items - center justify - center gap - 2 rounded - md bg - gray - 50 p - 3 text - sm font - medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                      { "bg-sky-100 text-blue-600": pathname === link.href }
                    )}
                    href={link.link}
                  >
                    {/* <a className="text-gray-500 hover:text-gray-900"> */}
                    <p className=" text-sm font-semibold leading-6 text-gray-900text-gray-500 hover:text-gray-900">
                      {link.name}
                    </p>
                    {/* </a> */}
                  </Link>
                </SheetClose>
              </div>
            );
          })}
        </div>

        {/* <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        {`Make changes to your profile here. Click save when you're done.`}
                    </SheetDescription>
                </SheetHeader> */}

        {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
export default MobileDrawer;

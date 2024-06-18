import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoginFormPopup } from "../../myComponents/Login/loginFormPopup";

const UserMenu = () => {
  const links = [
    { name: "Signup", link: "/Signup" },
    { name: "Login", link: "/Login" },
    { name: "Profile", link: "/Profile" },
    { name: "Logout", link: "/Logout" },
  ];
  const pathname = usePathname();
  return (
    <div
      id="dropdownAvatar"
      className="absolute right-0 z-50  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <LoginFormPopup text={"Login"} />
          </li>
          <li>
            <LoginFormPopup text={"Sigup"} />
          </li>
          {/* {links.map((link) => {
            return (
              <Link
                href={link.link}
                key={link.name}
                className={clsx(
                  "flex h - [48px] grow items - center justify - center gap - 2 rounded - md bg - gray - 50 p - 3 text - sm font - medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  { "bg-sky-100 text-blue-600": pathname === link.href }
                )}
              >
                <p>{link.name}</p>
              </Link>
            );
          })} */}
          {/* <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Signup
          </li>
          <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Login
          </li> */}
        </ul>
      </div>
      {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div>Bonnie Green</div>
        <div className="font-medium truncate">name@flowbite.com</div>
      </div>
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        </li>
      </ul>
      <div className="py-2">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Sign out
        </a>
      </div> */}
    </div>
  );
};
export default UserMenu;

// "use client";
// import { Button } from "../../../components/ui/button";
// // import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../../../components/ui/dialog";
// import { Input } from "../../../components/ui/input";
// import { Label } from "../../../components/ui/label";
// import { useState } from "react";

// export function LoginFormPopup({ text }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="authButton">{text}</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>{text}</DialogTitle>
//           <DialogDescription>
//             Enter your email and password to login to your account
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="email" className="text-right">
//               email
//             </Label>
//             <Input
//               id="name"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               placeholder="admin@example.com"
//               type="email"
//               className="col-span-3"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="password" className="text-right">
//               Password
//             </Label>
//             <Input
//               id="password"
//               value={password}
//               placeholder="enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="col-span-3"
//             />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2gWGHQS15tp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import Image from "next/image";

export function LoginFormPopup({ text }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="authButton">{text}</Button>
      </DialogTrigger>
      <DialogContent className=" borde-2 border-red-500 lg: max-w-[900px] sm:max-w-[900px]">
        <div className="grid lg:grid-cols-2 min-h-[200px] w-full">
          <div className="bg-gray-100 dark:bg-gray-800 hidden lg:block">
            <Image
              src="/auth/auth.png"
              alt="Login Image"
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <Image
                  src="/hillDekhoLogo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="mx-auto h-12 w-auto"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                  Or{" "}
                  <Link
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                    prefetch={false}
                  >
                    register for a new account
                  </Link>
                </p>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                {/* <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember-me" name="remember-me" />
                    <Label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900 dark:text-gray-50"
                    >
                      Remember me
                    </Label>
                  </div>
                  <div className="text-sm">
                    <Link
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                      prefetch={false}
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
                  >
                    Sign in
                  </Button>
                </div> */}
                <form className="w-full max-w-md space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      placeholder="Enter your Full Name"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email or Mobile Number*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Email or Mobile Number"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Create Password*
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {/* <EyeIcon className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400" /> */}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-2 mt-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  >
                    {/* <ChromeIcon className="w-5 h-5 mr-2" /> */}
                    Sign Up with Google
                  </button>
                </form>
                <p className="mt-8 text-sm text-gray-600">
                  Already have an account?{" "}
                  <a href="#" className="text-green-500">
                    Log In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

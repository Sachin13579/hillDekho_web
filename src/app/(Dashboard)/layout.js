import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../../myComponents/Navbar/Navbar";
import Footer from "../../myComponents/Footer/Footer";
// import Signup from "./Signup/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hill dekho.com",
    description: "A website where you can check out about all the hill stations of India.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <body className={inter.className}>
                <div>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
                {/* {children} */}
                {/* <Signup /> */}
            </body>
        </html>
    );
}

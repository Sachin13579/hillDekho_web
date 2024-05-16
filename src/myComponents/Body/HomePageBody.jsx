"use client"
import Image from "next/image";
import DialogComponent from './DialogComponent'
import LocationSvgCaraousel from '../Carousels/LocationSvgCaraousel';
import { playFairDisplay } from '../../ui-Utils/fonts.js';
import Categories from "../../myComponents/Carousels/Categories";
import PackageCarousel from './PackageCarousel';
import LimitedTimeDeals from './LimitedTimeDeals';
import InterNationalEscapes from './InterNationalEscapes';
import { InfiniteMovingCardsDemo } from './InfiniteMovingCards';
import GetInTouchForm from '../GetInTouch/GetInTouchForm'
import './style.css';
const HomePageBody = () => {
    return (
        <>
            <main className="flex flex-col   items-center  h-screen justify-between">

                <div className=" h-screen relative w-full min-h-[300px]  z-50  flex flex-col justify-center items-center text-center text-white ">
                    {/* <Image className=" absolute inset-0 w-full h-full object-cover" src={"/Dzukou Valley, Nagaland, India.png"} width={100} height={100} alt="Dzukou Valley, Nagaland, Indiaˀ" /> */}
                    <div className="absolute -z-5 w-full ">
                        <Image
                            src={"/Dzukou Valley, Nagaland, India.png"}
                            alt="banner image"
                            className="w-full h-screen"
                            width={1000}
                            height={100}
                            priority={true}
                        // objectFit="cover"

                        />
                    </div>
                    {/* /</div><div className="max-w-screen-lg m-auto h-[200vh] py-5 px-5 my-10 text-center text-2xl round"> */}
                    <div className="min-h-[300px]  absolute  h-screen  max-w-6xl mx-auto  flex flex-col justify-center items-center text-center text-white p-6">
                        <h2 className={`${playFairDisplay.className} text-white text-3xl font-extrabold lg:text-6xl`}>Unleash your wanderlust</h2>
                        <p className="text-base font-normal lg:text-xl text-center text-white mt-4">Dive into our meticulously curated destinations and start planning your next escapade.</p>
                        {/* <button
                        // className="mt-8 bg-Aquamarine-300 text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
                        className=" mt-8 bg-teal-400 rounded-md flex w-40 py-3 px-7 justify-center items-center gap-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
                    >
                        Book Now
                    </button> */}
                        <DialogComponent />
                    </div>
                    {/* <p className="absolute inset-x-0 bottom-0 text-black">HellO world </p> */}
                    {/* <LocationSvgCaraousel className="absolute inset-x-0 bottom-0 text-black" /> */}


                    <div
                        className="absolute z-0  inset-x-0 bottom-0 "
                    >
                        <div className=" mb-1 h-4 w-full blur-md bg-red-50" />

                        <Categories />
                    </div>
                </div >


            </main >
            <PackageCarousel />
            <LimitedTimeDeals />
            <InterNationalEscapes />
            <InfiniteMovingCardsDemo />
            <GetInTouchForm />
        </>
    )
}
export default HomePageBody
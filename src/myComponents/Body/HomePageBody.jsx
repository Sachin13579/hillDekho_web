"use client";
import Image from "next/image";
import DialogComponent from "./DialogComponent";
import LocationSvgCaraousel from "../Carousels/LocationSvgCaraousel";
import { playFairDisplay } from "../../ui-Utils/fonts.js";
import Categories from "../../myComponents/Carousels/Categories";
import PackageCarousel from "./PackageCarousel";
import LimitedTimeDeals from "./LimitedTimeDeals";
import InterNationalEscapes from "./InterNationalEscapes";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";
import GetInTouchForm from "../GetInTouch/GetInTouchForm";
import ProgressSlider from "../../myComponents/Carousels/timeSliderCarousel/timeSliderCarousel";
import "./style.css";
const HomePageBody = () => {
  return (
    <>
      <main className=" flex flex-col   items-center  h-screen justify-between">
        <div className=" h-screen relative w-full min-h-[300px]  z-40  flex flex-col justify-center items-center text-center text-white ">
          <div className="absolute -z-5 w-full ">
            <Image
              src={"/Dzukou Valley, Nagaland, India.png"}
              alt="banner image"
              className="w-full h-screen"
              width={1000}
              height={100}
              priority={true}
            />
          </div>
          <div className="min-h-[300px]  absolute  h-screen  max-w-6xl mx-auto  flex flex-col justify-center items-center text-center text-white p-6">
            <h2
              className={`${playFairDisplay.className} text-white text-3xl font-extrabold lg:text-6xl`}
            >
              Unleash your wanderlust
            </h2>
            <p className="text-base font-normal lg:text-xl text-center text-white mt-4">
              Dive into our meticulously curated destinations and start planning
              your next escapade.
            </p>

            <DialogComponent />
          </div>

          <div className="absolute z-0  inset-x-0 bottom-0 ">
            <div className=" mb-1 h-4 w-full blur-md bg-red-50" />

            <Categories />
          </div>
        </div>
      </main>
      <PackageCarousel />
      <LimitedTimeDeals />
      {/* <InterNationalEscapes /> */}
      {/* <ProgressSlider /> */}
      <InfiniteMovingCardsDemo />
      <GetInTouchForm />
    </>
  );
};
export default HomePageBody;

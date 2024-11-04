"use client";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
const AboutUs = () => {
  return (
    <>
      <main className=" flex flex-col   items-center  h-screen justify-between">
        <div className="h-screen relative w-full min-h-[300px]  z-40  flex justify-center items-center text-center text-white">
          {/* <div className="border-2 flex  border-red-600 h-full w-full"> */}
          <div className="border-2 border-blue-600 h-full w-6/12 ml-60 "></div>
          <div className="border-2 border-yellow-600 h-full w-6/12 mr-60 "></div>
        </div>
        {/* { <Card>
          <CardContent className="rounded-xl  flex flex-col aspect-square p-0 ">
            <div className="rounded-xl -z-5 w-full ">
              <Image
                // src={data?.coverImage}
                alt="banner image"
                className="w-full rounded-t-lg "
                width={100}
                height={100}
                priority={true}
                object-fit="contain"
              />
            </div>
            <div className="p-4 ">
              <div className="flex justify-between items-baseline">
                {/* <p
                  className={`${playFairDisplay.className} text-2xl lg:text-lg font-bold`}
                >
                  Meghalaya, India
                </p> */}
        {/* <p className="text-lg font-bold">$88000</p>
              </div>
              <p className="text-xs text-carouselText font-normal mt-2 mb-2">
                3 days 4 night
              </p>
              <div className="flex justify-between items-center mt-2"> */}
        {/* {data?.image?.map((item, index) => {
                  return (
                    <div
                      key={data?.id}
                      className="flex  justify-between flex-col items-center gap-2"
                    >
                      <Image
                        src={item?.aminityImage}
                        alt="uility svg"
                        width={15}
                        height={15}
                      />

                      <p className={`text-xs text-carouselText font-normal`}>
                        {item?.aminityName}
                      </p>
                    </div>
                  );
                })} */}
        {/* </div>
            </div>
            <div className="flex items-center flex-1 pl-4 pr-4 h-auto gap-3 mb-5">
              <Button variant="default">View Details</Button>
              <Button variant="packageCarpuserSecondary">Book Now</Button>
            </div>
          </CardContent>
        </Card>} */}
      </main>
    </>
  );
};
export default AboutUs;

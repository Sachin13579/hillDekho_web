import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel";
import { playFairDisplay } from "../../ui-Utils/fonts";
import Image from "next/image";

const traveUtilsArray = [
    {
        id: 1,
        name: "Flights",
        image: "/car.svg "
    },
    {
        id: 2,
        name: "Hotel",
        image: "/reserve.svg "
    },
    {
        id: 3,
        name: "Breakfast",
        image: "/buildings.svg"
    },
    {
        id: 4,
        name: "Transfers",
        image: "/airplane.svg "
    },
    {
        id: 5,
        name: "Dinner",
        image: "/buildings.svg",
    }
]
const PackageCarousel = () => {
    return (
        <main className="mt-20 mb-20 flex justify-center items-center flex-col gap-10 ">
            <div className="flex justify-center flex-col items-center gap-2 ">
                <h1 className=" sm:text-xs lg:text-base leading-6 tracking-widest text-Aquamarine700">FOR YOU</h1>
                <h2 className={`${playFairDisplay.className} text-3xl lg:text-5xl font-bold`}>Most Visited Destination</h2>
            </div>
            <div className="w-full flex justify-center items-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full  max-w-sm"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent
                                            className="rounded-xl  flex flex-col aspect-square p-0 "

                                        >
                                            <div

                                                className="rounded-xl -z-5 w-full "
                                            >
                                                <Image
                                                    src={"/Dzukou Valley, Nagaland, India.png"}
                                                    alt="banner image"
                                                    className="w-full rounded-t-lg "
                                                    width={100}
                                                    height={100}
                                                    priority={true}
                                                    object-fit="contain"
                                                />
                                            </div>
                                            <div className="p-4 ">
                                                <div className="flex justify-between items-baseline" >

                                                    <p className={`${playFairDisplay.className} text-2xl lg:text-5xl font-bold`}>Meghalaya, India</p>
                                                    <p>$88000</p>
                                                </div>
                                                <p className="text-xs text-carouselText font-normal mt-2 mb-2">3 days 4 night</p>
                                                <div className="flex justify-between items-center mt-2">
                                                    {
                                                        traveUtilsArray.map((item, index) => {
                                                            return (
                                                                <div key={index} className="flex  justify-between flex-col items-center gap-2" >

                                                                    <Image src={item.image} alt="uility svg"
                                                                        width={15}
                                                                        height={15}
                                                                    />
                                                                    <p className={`text-xs text-carouselText font-normal`}>{item.name}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-1 pl-4 pr-4 h-auto gap-3 mb-5">

                                                <Button variant="default">View Details</Button>
                                                <Button variant="packageCarpuserSecondary">Book Now</Button>
                                            </div>
                                            {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-3 gap-4">

                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>

            </div>

        </main>
    )
}

export default PackageCarousel
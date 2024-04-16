
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel";
import { playFairDisplay } from "../../ui-Utils/fonts";
import CardComponent from "../Card/CardComponent";

const traveUtilsArray = [
    {
        id: 1,
        coverImage: "/meghalaya.png",
        image: [{ aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" }]
    },
    {
        id: 2,
        coverImage: "/bali.png",
        image: [{ aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" }]
    },
    {
        id: 3,
        coverImage: "/bhutan.png",
        image: [{ aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" }]
    },
    {
        id: 4,
        coverImage: "/Palak Lake, Mizoram.png",
        image: [
            { aminityImage: "/airplane.svg", aminityName: "Flights" },
            { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
            { aminityImage: "/reserve.svg", aminityName: "Transfers" },
            { aminityImage: "/car.svg ", aminityName: "Breakfast" },
            { aminityImage: "/buildings.svg", aminityName: "Dinner" }
        ]
    },
    {
        id: 5,
        coverImage: "/singapore.png",
        image: [
            { aminityImage: "/airplane.svg", aminityName: "Flights" },
            { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
            { aminityImage: "/reserve.svg", aminityName: "Transfers" },
            { aminityImage: "/car.svg ", aminityName: "Breakfast" },
            { aminityImage: "/buildings.svg", aminityName: "Dinner" }
        ]
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
                    className="w-full  max-w-5xl"
                >
                    <CarouselContent>
                        {traveUtilsArray.map((data, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">

                                {/* <Card>
                                    <CardContent
                                        className="rounded-xl  flex flex-col aspect-square p-0 "

                                    >
                                        <div

                                            className="rounded-xl -z-5 w-full "
                                        >
                                            <Image
                                                src={e.coverImage}
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

                                                <p className={`${playFairDisplay.className} text-2xl lg:text-lg font-bold`}>Meghalaya, India</p>
                                                <p className="text-lg font-bold">$88000</p>
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
                                    </CardContent>
                                </Card> */}
                                <CardComponent data={data} />

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
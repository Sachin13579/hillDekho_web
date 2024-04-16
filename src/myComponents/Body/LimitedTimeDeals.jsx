
import { playFairDisplay } from "../../ui-Utils/fonts";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel";
import CardComponent from "../Card/CardComponent";
import { Button } from "../../../components/ui/button";
const LimtedTimeDeals = () => {
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

    return (
        <main className="mt-20 mb-20 flex justify-center items-center flex-col gap-10 ">
            <div className="flex justify-center flex-col items-center gap-2 ">
                <h1 className=" sm:text-xs lg:text-base leading-6 tracking-widest text-Aquamarine700">LIMITED TIME DEAL</h1>
                <h2 className={`${playFairDisplay.className} text-3xl lg:text-5xl font-bold`}>Trip Easy On Your Pocket</h2>
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
            <Button variant="default">See more</Button>


        </main>

    )
}
export default LimtedTimeDeals;
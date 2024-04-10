import { Card, CardContent } from "../../../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel";
import { playFairDisplay } from "../../ui-Utils/fonts";
const PackageCarousel = () => {
    return (
        <main className="mt-20 mb-20 flex justify-center items-center flex-col gap-10 ">
            <div className="flex justify-center flex-col items-center gap-2 ">
                <h1 className=" sm:text-xs lg:text-base leading-6 tracking-widest text-Aquamarine700">FOR YOU</h1>
                <h2 className={`${playFairDisplay.className} text-3xl lg:text-5xl font-bold`}>Most Visited Destination</h2>
            </div>
            <div className="">
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
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
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
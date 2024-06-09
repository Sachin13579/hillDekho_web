import { playFairDisplay } from "../../ui-Utils/fonts";

import ProgressSlider from "../../myComponents/Carousels/timeSliderCarousel/timeSliderCarousel";

const InterNationalEscapes = () => {
  const traveUtilsArray = [
    {
      id: 1,
      coverImage: "/meghalaya.png",
      image: [
        { aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" },
      ],
    },
    {
      id: 2,
      coverImage: "/bali.png",
      image: [
        { aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" },
      ],
    },
    {
      id: 3,
      coverImage: "/bhutan.png",
      image: [
        { aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" },
      ],
    },
    {
      id: 4,
      coverImage: "/Palak Lake, Mizoram.png",
      image: [
        { aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" },
      ],
    },
    {
      id: 5,
      coverImage: "/singapore.png",
      image: [
        { aminityImage: "/airplane.svg", aminityName: "Flights" },
        { aminityImage: "/buildings.svg ", aminityName: "Hotel" },
        { aminityImage: "/reserve.svg", aminityName: "Transfers" },
        { aminityImage: "/car.svg ", aminityName: "Breakfast" },
        { aminityImage: "/buildings.svg", aminityName: "Dinner" },
      ],
    },
  ];
  return (
    <main className="mt-20 mb-100 border-2 border-red-100 bg-AquamarineBG h-screen">
      <div className="pt-10 flex justify-center w-full flex-col gap-10 ">
        <div className=" flex justify-center flex-col items-center gap-2 ">
          <h2
            className={`${playFairDisplay.className} text-3xl lg:text-5xl font-bold`}
          >
            International Escapes
          </h2>
        </div>
        <div>
          <div className="w-full flex justify-center items-center">
            <ProgressSlider />
          </div>
        </div>
      </div>
    </main>
  );
};

export default InterNationalEscapes;

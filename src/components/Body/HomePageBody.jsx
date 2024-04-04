import Image from "next/image";
import { playFairDisplay } from '../../ui-Utils/fonts.js';
const HomePageBody = () => {
    return (
        <main className="flex flex-col items-center justify-between">

            <div className="relative w-full">
                {/* <Image className=" absolute inset-0 w-full h-full object-cover" src={"/Dzukou Valley, Nagaland, India.png"} width={100} height={100} alt="Dzukou Valley, Nagaland, Indiaˀ" /> */}
                <div className="absolute -z-5 w-full">
                    <Image
                        src={"/Dzukou Valley, Nagaland, India.png"}
                        alt="banner image"
                        className="w-full"
                        width={1000}
                        height={100}
                    />
                </div>
                {/* /</div><div className="max-w-screen-lg m-auto h-[200vh] py-5 px-5 my-10 text-center text-2xl round"> */}
                <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className={`${playFairDisplay.className} text-white font-extrabold text-4xl`}>Unleash your wanderlust</h2>
                    <p className="text-lg text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
                    <button
                        // className="mt-8 bg-Aquamarine-300 text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
                        className=" mt-8 bg-teal-400 rounded-md flex w-40 py-3 px-7 justify-center items-center gap-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
                    >
                        Book Now
                    </button>
                </div>
            </div >
        </main >
    )
}
export default HomePageBody
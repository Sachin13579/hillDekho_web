"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";
import SilderImg01 from "../../../../public/corousel/ps-image-01.png";
import SilderImg02 from "../../../../public/corousel/ps-image-02.png";
import SilderImg03 from "../../../../public/corousel/ps-image-03.png";
import SilderImg04 from "../../../../public/corousel/ps-image-04.png";
import SilderIcon01 from "../../../../public/corousel/ps-icon-01.svg";
import SilderIcon02 from "../../../../public/corousel/ps-icon-02.svg";
import SilderIcon03 from "../../../../public/corousel/ps-icon-03.svg";
import SilderIcon04 from "../../../../public/corousel/ps-icon-04.svg";

// interface Item {
//     img: StaticImageData
//     desc: string
//     buttonIcon: StaticImageData
// }
const items = [
  {
    img: SilderImg01,
    desc: "Omnichannel",
    buttonIcon: SilderIcon01,
  },
  {
    img: SilderImg02,
    desc: "Multilingual",
    buttonIcon: SilderIcon02,
  },
  {
    img: SilderImg03,
    desc: "Interpolate",
    buttonIcon: SilderIcon03,
  },
  {
    img: SilderImg04,
    desc: "Enriched",
    buttonIcon: SilderIcon04,
  },
];

export default function ProgressSlider() {
  const duration = 5000;
  const itemsRef = useRef(null);
  const frame = useRef(0);

  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    console.log(
      ">>>>>>>>",
      itemsRef.current,
      "------------------>>>>>",
      "\n",
      itemsRef.current.parentElement
    );
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className=" w-full max-w-5xl mx-auto text-center">
      {/* Item image */}
      <div className="transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <Image
                className="rounded-xl"
                src={item.img}
                width={1024}
                height={576}
                alt={item.desc}
              />
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span
              className={`text-center flex flex-col items-center ${
                active === index
                  ? ""
                  : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
              }`}
            >
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                <Image src={item.buttonIcon} alt={item.desc} />
              </span>
              <span className="block text-sm font-medium text-slate-900 mb-2">
                {item.desc}
              </span>
              <span
                className="block relative w-full bg-slate-200 h-1 rounded-full"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 bg-indigo-500 rounded-[inherit]"
                  style={{ width: active === index ? `${progress}%` : "0%" }}
                ></span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

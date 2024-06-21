"use client";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function HeroImageSlider({ slides }: { slides: string[] }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s: string) => {
          return <img key={s} src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-yellow-500 px-10 text-3xl ">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill
            size={30}
            className="hover:text-purple-950"
          />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill
            size={30}
            className="hover:text-purple-950"
          />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s: string, i: number) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full hidden md:inline-block  w-5 h-5 cursor-pointer  ${
                i == current ? "bg-yellow-400" : "bg-violet-600"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

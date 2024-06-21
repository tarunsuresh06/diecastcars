"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="pb-4">
        <CarouselItem>
          <div className="h-full w-full flex flex-col justify-center items-center text-violet-800 font-medium">
            <div className="w-32 h-32 rounded-full border-white border-4 bg-[url('https://approachableai.com/wp-content/uploads/2022/12/SDv2.1-Example.jpg')] bg-center bg-cover mb-16"></div>
            <p className="text-lg w-[300px] md:w-full max-w-[600px] text-center">
              Lorem Ipsum has been the standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>

            <p className="text-center text-2xl mt-8">Asher</p>
          </div>
        </CarouselItem>

        <CarouselItem className="">
          <div className="h-full w-full flex flex-col justify-center items-center text-violet-800 font-medium">
            <div className="w-32 h-32 rounded-full border-white border-4 bg-[url('https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-13671719-1-402.jpg')] bg-center bg-cover mb-16"></div>
            <p className="text-lg w-[300px] md:w-full max-w-[600px] text-center">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here, content , making it
              look like readable English.
            </p>

            <p className="text-center text-2xl mt-8">scarlett johansson</p>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="h-full w-full flex flex-col justify-center items-center text-violet-800 font-medium">
            <div className="w-32 h-32 rounded-full border-white border-4 bg-[url('https://mdbcdn.b-cdn.net/img/new/avatars/2.webp')] bg-center bg-cover mb-16"></div>
            <p className="text-lg w-[300px] md:w-full max-w-[600px] text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <p className="text-center text-2xl mt-8">John</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden lg:inline-flex" />
      <CarouselNext className="hidden lg:inline-flex" />
    </Carousel>
  );
};

export default Testimonial;

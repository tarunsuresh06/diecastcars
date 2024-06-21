import HeroImageSlider from "@/components/HeroImageSlider";
import ProductCard from "@/components/ui/ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  let slides = [
    "https://opencart.mahardhi.com/MT04/fantastic/image/cache/catalog/banners/mainbanner1-1920x600.jpg",
    "https://opencart.mahardhi.com/MT04/fantastic/image/cache/catalog/banners/mainbanner3-1920x600.jpg",
    "https://opencart.mahardhi.com/MT04/fantastic/image/cache/catalog/banners/mainbanner2-1920x600.jpg",
  ];
  return (
    <>
      <HeroImageSlider slides={slides} />
      <div className="wrapper">
        <section id="#newProducts">
          <h1 className="text-4xl font-semibold mb-5">New Products</h1>
          <Carousel>
            <CarouselContent className="pb-4">
              <CarouselItem className="basis-[80%] md:basis-1/2 lg:basis-1/3">
                <ProductCard />
              </CarouselItem>

              <CarouselItem className="basis-[80%] md:basis-1/2 lg:basis-1/3">
                <ProductCard />
              </CarouselItem>

              <CarouselItem className="basis-[80%] md:basis-1/2 lg:basis-1/3">
                <ProductCard />
              </CarouselItem>

              <CarouselItem className="basis-[80%] md:basis-1/2 lg:basis-1/3">
                <ProductCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden lg:inline-flex" />
            <CarouselNext className="hidden lg:inline-flex" />
          </Carousel>
        </section>
      </div>
    </>
  );
}

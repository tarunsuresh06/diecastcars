import HeroImageSlider from "@/components/HeroImageSlider";
import ProductCard from "@/components/ui/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Testimonial from "@/components/Testimonial";

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
        <section id="#featuredProductSection">
          <h1 className="text-4xl font-semibold mb-5">Featured Products</h1>
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
      <section id="testimonialSection">
        <div className="bg-center bg-cover bg-fixed bg-[url('https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg')] h-[500px] ">
          <div className="wrapper flex justify-center items-center h-full">
            <Testimonial />
          </div>
        </div>
      </section>
      <div className="wrapper">
        <section id="#newProductSection">
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
        <section id="bannnerSection">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-14">
            <img
              className="w-full md:w-[50%] max-w-[600px]"
              src="https://opencart.mahardhi.com/MT04/fantastic/image/catalog/banners/banner1.jpg"
              alt="banner 1"
            />

            <img
              className="w-full md:w-[50%] max-w-[600px]"
              src="https://opencart.mahardhi.com/MT04/fantastic/image/catalog/banners/banner2.jpg"
              alt="banner 2"
            />
          </div>
        </section>
      </div>
    </>
  );
}

import HeroImageSlider from "@/components/HeroImageSlider";

export default function Home() {
  let slides = [
    "https://opencart.mahardhi.com/MT04/fantastic/image/cache/catalog/banners/mainbanner1-1920x600.jpg",
    "https://opencart.mahardhi.com/MT04/fantastic/image/cache/catalog/banners/mainbanner3-1920x600.jpg",
    "https://opencart.mahardhi.com/MT04/fantastic/image/cache/catalog/banners/mainbanner2-1920x600.jpg",
  ];
  return (
    <main>
      <div>
        <HeroImageSlider slides={slides} />
      </div>
    </main>
  );
}

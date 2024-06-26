"use client";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ImageGallery from "react-image-gallery";

const Page = () => {
  const productDetailItem = {
    images: [
      {
        original: "https://m.media-amazon.com/images/I/810IakuZDaL._SX522_.jpg",
        thumbnail:
          "https://m.media-amazon.com/images/I/810IakuZDaL._SX522_.jpg",
      },
      {
        original: "https://m.media-amazon.com/images/I/81axZYFiUcL._SX522_.jpg",
        thumbnail:
          "https://m.media-amazon.com/images/I/81axZYFiUcL._SX522_.jpg",
      },
      {
        original: "https://m.media-amazon.com/images/I/71lLouyX7NL._SX522_.jpg",
        thumbnail:
          "https://m.media-amazon.com/images/I/71lLouyX7NL._SX522_.jpg",
      },
    ],
    title: "Hot Wheels Race Car",
    reviews: "150",
    availability: true,
    brand: "Hot Wheels",
    category: "Toys",
    price: 1499,
    previousPrice: 1999,
    description:
      "Build and rebuild a lightning-fast track with the Hot Wheels Lightning Boost Pack that comes in a cool, modular storage box. The set includes 12 track-building essentials such as straight track and curved track as well as lightning-themed kickers and flippers to add extra speed along the way. It comes in a sleek container that can be used in the build, but also as toy storage, keeping all the pieces together in a neatly confined box.",
  };
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      {/* image gallery */}
      <div className="container mx-auto px-4">
        <ImageGallery
          autoPlay={false}
          showPlayButton={false}
          showNav={false}
          showFullscreenButton={false}
          items={productDetailItem.images}
        />
      </div>
      {/* description  */}

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {productDetailItem.title}
        </h2>
        <p className="mt-5 font-bold">
          Availability:{" "}
          {productDetailItem.availability ? (
            <span className="text-green-600">In Stock </span>
          ) : (
            <span className="text-red-600">Expired</span>
          )}
        </p>
        <p className="font-bold">
          Brand: <span className="font-normal">{productDetailItem.brand}</span>
        </p>
        <p className="font-bold">
          Category:{" "}
          <span className="font-normal">{productDetailItem.category}</span>
        </p>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ₹{productDetailItem.price}{" "}
          <span className="text-xs text-gray-400 line-through">
            ₹{productDetailItem.previousPrice}
          </span>
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {productDetailItem.description}
        </p>

        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}`}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              1
            </div>
            <button className={`${plusMinuceButton}`}> +</button>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-violet-600">
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;

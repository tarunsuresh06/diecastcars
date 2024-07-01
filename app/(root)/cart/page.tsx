import CartItem from "@/components/CartItem";
import TotalCart from "@/components/ui/TotalCart";
import React from "react";

const page = () => {
  return (
    <section className="bg-gray-50">
      <div className="wrapper">
        <h1 className="text-4xl font-bold my-2">My Cart</h1>
        <div className="flex flex-col w-full gap-4">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="flex justify-center md:justify-end items-center my-10">
          <TotalCart />
        </div>
      </div>
    </section>
  );
};

export default page;

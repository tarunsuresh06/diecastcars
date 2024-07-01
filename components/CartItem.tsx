import React from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantityButton from "./ui/QuantityButton";
import Link from "next/link";

const CartItem = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-2 py-4 shadow-xl my-2 gap-2 min-h-44 bg-white">
      <div className="flex justify-between items-center gap-4">
        <img
          className="w-[200px]"
          src="https://m.media-amazon.com/images/I/71lLouyX7NL._SX522_.jpg"
          alt="cart item"
        />
        <div>
          <h3 className="font-semibold text-l md:text-xl">
            ​Hot Wheels® Track Set with 1 Hot Wheels® Car, Ice-Themed Track
            Building Set with 10 Track Pieces in a Modular and Stackable Storage
            Box
          </h3>
          <p className="font-semibold text-xs mt-2">
            Brand: <span className="font-normal">Hot Wheels</span>
          </p>
          <div className="w-[200px] flex justify-between items-center mt-4">
            <QuantityButton />
          </div>
          <div className="w-[200px] flex justify-between items-center mt-4">
            <p className="text-xl font-semibold text-violet-800">₹1499/-</p>
            <IconButton className="hidden md:inline-flex">
              <DeleteIcon />
            </IconButton>
            <Button className="inline-block md:hidden text-xs text-violet-800 capitalize">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

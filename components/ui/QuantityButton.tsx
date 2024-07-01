import React from "react";

const QuantityButton = () => {
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  return (
    <div className="flex">
      <button className={`${plusMinuceButton}`}>−</button>
      <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
        1
      </div>
      <button className={`${plusMinuceButton}`}> +</button>
    </div>
  );
};

export default QuantityButton;

import { Button, Typography } from "@mui/material";
import React from "react";

const TotalCart = () => {
  return (
    <div className="">
      <p className="text-2xl font-bold">
        Order Total:{" "}
        <span className="text-violet-800 text-4xl"> ₹5999.00/-</span>
      </p>
      <p className="text-gray-500 mt-1">3 Items In the Cart.</p>
      <Button
        variant="contained"
        size="large"
        sx={{
          marginTop: "30px",
          width: "100%",
          bgcolor: "#5D12D2",
          fontWeight: 600,
          ":hover": { bgcolor: "#9400FF" },
        }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default TotalCart;

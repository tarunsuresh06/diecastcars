"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 400, margin: "10px" }} elevation={3}>
      <Link href="/product/test">
        <CardMedia
          component="img"
          height="194"
          image="https://www.kroger.com/product/images/large/front/0088796194272"
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <div className="flex justify-between items-center">
          <Link href="/product/test" className="font-semibold text-xl">
            Hot Wheels Set
          </Link>
          <IconButton
            sx={{ ":hover": { bgcolor: "red", color: "white" } }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
        </div>
        <Typography variant="body2" color="text.secondary">
          <span className="font-bold">Brand:</span> Hot Wheels
        </Typography>
        <p className="mt-4 text-2xl font-bold text-violet-900">
          ₹1499{" "}
          <span className="text-xs text-gray-400 line-through">₹1999</span>
        </p>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            bgcolor: "#5D12D2",
            color: "white",
            gap: 1,
            fontWeight: 400,
            ":hover": { bgcolor: "#9400FF" },
          }}
          aria-label="Add to Cart"
        >
          Add to Cart
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

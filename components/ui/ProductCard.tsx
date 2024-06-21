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
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 400, margin: "10px" }} elevation={3}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.kroger.com/product/images/large/front/0088796194272"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5">Product 1</Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <IconButton
            sx={{ ":hover": { bgcolor: "red", color: "white" } }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <div>
          <Button
            sx={{
              bgcolor: "skyblue",
              gap: 1,
              fontWeight: "bold",
              ":hover": { bgcolor: "pink" },
            }}
            aria-label="Add to Cart"
          >
            Add to Cart
            <AddShoppingCartIcon />
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

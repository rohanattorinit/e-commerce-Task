import { CardActions, Button, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import { getProducts } from "../helper/api-helper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
export const ShoppingCard = (props: any) => {
  const handleClick = () => {
    console.log("sadas");
  };

  return (
    <>
      <div className="w-96">
        <Card variant="elevation">
          <div className="flex flex-col justify-center items-center p-6">
            <img src="" alt="product" />
            <h1 className="text-xl font-semibold p-2">
              {/* {props.products.title} */}sadasdasdhkasd
            </h1>
            <CardContent>
              <p>dkhbrbfsdkfbdsfsa esrksdrhk</p>
              <h2>$23</h2>
            </CardContent>
            <div className="div">
              <IconButton aria-label="add to wishlist">
                <FavoriteIcon />
              </IconButton>
              <IconButton onClick={handleClick} aria-label="add to cart">
                <LocalMallRoundedIcon />
              </IconButton>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

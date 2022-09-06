import { useEffect, useState } from "react";

export const ProductCard = (props: any) => {
  const handleClick = () => {
    console.log("sadas");
  };

  return (
    <>
      <div className="w-96">
        <div className="flex flex-col justify-center items-center p-6">
          <img src={props.image} alt="product" />
          <h1 className="text-xl font-semibold p-2">{props.title}</h1>

          <p>{props.description}</p>
          <h2>$ {props.price}</h2>

          <div className="div"></div>
        </div>
      </div>
    </>
  );
};

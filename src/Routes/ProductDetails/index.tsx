import React, { useState } from "react";
import SubProfile1 from "../../Asset/SubProfile1.svg";
import SubProfile2 from "../../Asset/SubProfile2.svg";
import SubProfile3 from "../../Asset/SubProfile3.svg";
import MainProfile from "../../Asset/MainProfile.svg";
import favorite from "../../Asset/favoriteIcon.svg";
import favoriteRedIcon from "../../Asset/favoriteRedIcon.svg";
import Related from "../../Asset/related.svg";
import cartIcon from "../../Asset/cartIcon.svg";

const ProductDetails = () => {
  const [fav, setFav] = useState(true);
  return (
    <div className="grid gap-10 place-items-center m-4">
      <div
        id="product card"
        className=" flex p-4 gap-4 shadow-xl w-fit flex-col md:flex-row mx-20"
      >
        <div className="flex flex-col-reverse gap-4 lg:flex-row">
          <div className="flex flex-col gap-4">
            <img src={SubProfile1} alt="" />
            <img src={SubProfile2} alt="" />
            <img src={SubProfile3} alt="" />
          </div>
          <div>
            <img className="w-full" src={MainProfile} alt="" />
          </div>
        </div>
        <div id="details" className="flex flex-col gap-2 m-4">
          <div className="text-4xl font-bold">heading</div>
          <div>color</div>
          <div>
            short description-kjsadfkjbsncxcbhfjczxbnc
            zdgsbdcjkzbcjkzgaxdjkn,xma bcbdhasgdcbjxzbchjgdvhxzbc nzdsdgbkd
          </div>
          <div id="buttons" className="flex gap-4 font-semibold">
            <div
              id="Add-to-wishlist"
              className="flex p-2 gap-5 justify-center shadow-md hover:cursor-pointer w-fit bg-cyan-200 rounded-sm"
            >
              Add to Cart
              <img src={cartIcon} alt="" />
            </div>
            <div
              id="Add-to-wishlist"
              className="flex p-2 gap-5 justify-center shadow-md hover:cursor-pointer w-fit rounded-sm"
            >
              Add to Wishlist
              <img
                onClick={() => setFav(!fav)}
                src={fav ? favorite : favoriteRedIcon}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="moreDetails"
        className="bg-gray-200 w-full flex flex-col justify-center gap-4 py-10 px-20 "
      >
        <div id="headings" className="space-x-4 text-xl">
          <a href="">description</a>
          <a href="">Additional info</a>
          <a href="">Review</a>
          <a href="">video</a>
        </div>
        <div>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      <div className=" px-20 ">
        <div className="text-xl"> related products</div>
        <div className="grid grid-flow-row gap-10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          <img src={Related} alt="" />
          <img src={Related} alt="" />
          <img src={Related} alt="" />
          <img src={Related} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

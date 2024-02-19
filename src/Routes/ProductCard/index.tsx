import React, { useState } from "react";
import SubProfile1 from "../../Asset/SubProfile1.svg";
import SubProfile2 from "../../Asset/SubProfile2.svg";
import SubProfile3 from "../../Asset/SubProfile3.svg";
import MainProfile from "../../Asset/MainProfile.svg";
import favorite from "../../Asset/favoriteIcon.svg";
import instagramIcon from "../../Asset/instagramIcon.svg";
import facebookIcon from "../../Asset/facebookIcon.svg";
import twitterIcon from "../../Asset/twitterIcon.svg";
import favoriteRedIcon from "../../Asset/favoriteRedIcon.svg";

const ProductCard = () => {
  const [fav, setFav] = useState(true);
  return (
    <div
      id="photos"
      className=" flex p-4 m-4 gap-4 shadow-xl w-fit justify-center flex-col md:flex-row mx-20"
    >
      <div className="flex flex-col-reverse gap-4 lg:flex-row">
        <div className="flex flex-col gap-4">
          <img className=" " src={SubProfile1} alt="" />
          <img src={SubProfile2} alt="" />
          <img src={SubProfile3} alt="" />
        </div>
        <div className="">
          <img className="w-full" src={MainProfile} alt="" />
        </div>
      </div>
      <div id="details" className="flex flex-col gap-2 m-4">
        <div className="text-4xl font-bold">heading</div>
        <div>rating and review count</div>
        <div>color</div>
        <div>
          short description-kjsadfkjbsncxcbhfjczxbnc zdgsbdcjkzbcjkzgaxdjkn,xma
          bcbdhasgdcbjxzbchjgdvhxzbc nzdsdgbkd
        </div>
        <div
          id="add to cart"
          className="flex p-2 gap-5 justify-center shadow-md hover:cursor-pointer w-fit"
        >
          Add to cart{" "}
          <img
            onClick={() => setFav(!fav)}
            src={fav ? favorite : favoriteRedIcon}
            className=""
          />
        </div>
        <div>Categories</div>
        <div>Tags</div>
        <div className="flex gap-2">
          share
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
// {fav ? (
//   <img onClick={() => setFav(!fav)} src={favorite} className="" />
// ) : (
//   <img
//     onClick={() => setFav(!fav)}
//     src={favoriteRedIcon}
//     className=""
//   />
// )}

import React from "react";
import Related from "../../Asset/related.svg";

const RelatedProducts = () => {
  return (
    <div className="p-10 px-20 ">
      <div className="text-xl"> related products</div>
      <div className="grid grid-flow-row gap-10 pt-6 md:grid-cols-2 lg:grid-cols-4">
        <img src={Related} alt="" />
        <img src={Related} alt="" />
        <img src={Related} alt="" />
        <img src={Related} alt="" />
      </div>
    </div>
  );
};

export default RelatedProducts;

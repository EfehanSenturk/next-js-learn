import { products } from "@/constants";
import React from "react";
import ProductItem from "../Products/ProductItem";

const ProductList = () => {
  return (
    <div className="mx-auto px-5 py-9">
      <div className="flex justify-center">
        <h1 className="text-3xl mt-8 mb-8 text-bold underline">ProductList</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

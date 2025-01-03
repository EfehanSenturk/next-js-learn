import { Products } from "@/constants";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductModal from "./ProductModal";

export interface ProductItemProps {
  product: Products;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src={product.image}
            width={500}
            height={100}
            alt={product.title}
          />
          <div className="flex justify-between py-2">
            <p>{product.price}$</p>
            <p className="line-through">{product.mrp}$</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <ProductModal product={product} />
          {/*<Button>Add to Cart</Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductItem;

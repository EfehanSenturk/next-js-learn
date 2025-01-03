"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ProductItemProps } from "./ProductItem";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductModal = ({ product }: ProductItemProps) => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const { toast } = useToast();
  const handleDec = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-myColor-300">Show Detail</Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[1000px]">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <Image
                  src={product.image}
                  width={500}
                  height={100}
                  alt={product.title}
                />
              </div>
              <div>
                <h2 className="text-4xl text-bold px-4 py-4">
                  {product.title}
                </h2>
                <div className="flex justify-between py-2 px-16">
                  <p>{product.price}$</p>
                  <p className="line-through">{product.mrp}$</p>
                </div>
                <p className="px-4 py-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  qui voluptas voluptatem illum esse iste, quo vel! Mollitia
                  quod itaque magni temporibus eligendi repudiandae
                  voluptatibus? In aliquam praesentium id reprehenderit!{" "}
                </p>
                <div className="flex gap-2 px-4">
                  <Button className="w-16" onClick={handleDec}>
                    -
                  </Button>
                  <p>{count}</p>
                  <Button className="w-16" onClick={() => setCount(count + 1)}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              className="bg-myColor-300"
              onClick={() => {
                router.push(`/products/${product.id}`);
              }}
            >
              Go Detail Page
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: `${product.title} added to Cart`,
                  description: "Product added to cart",
                });
              }}
            >
              Add To Card
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModal;

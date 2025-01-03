import { Button } from "@/components/ui/button";
import Image from "next/image";
import CarouselPart from "../_components/CarouselPart";
import ProductList from "../_components/Products/ProductList";

export default function Home() {
  return (
    <>
      <div>
        <CarouselPart />
        <ProductList />
      </div>
    </>
  );
}

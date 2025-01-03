"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carousels } from "@/constants";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const CarouselPart = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {carousels.map((item) => (
            <CarouselItem key={item.id}>
              <Image
                src={item.image}
                alt="Image can not load"
                width={1920}
                height={1080}
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default CarouselPart;

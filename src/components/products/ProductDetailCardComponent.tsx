

"use client";

import { CircleCheck} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ProductType } from "./ProductCardComponent";

interface ProductImagesProps {
  image: string
}
interface ProductInfoProps {
  info?: Array<{
    label: string;
    value: string;
  }>;
}

interface ProductDetailIntefaces {
  productDetailInterface: ProductType
}
const ProductDetail = ({ productDetailInterface }:ProductDetailIntefaces )=> {
   const PRODUCT_DETAILS = productDetailInterface;
  return (
    <section className={cn("py-32")}>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <ProductImages image={PRODUCT_DETAILS.image} />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    {PRODUCT_DETAILS.title}
                  </h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    {/* <Reviews
                      rate={PRODUCT_DETAILS.rating.rate}
                      totalReviewers={PRODUCT_DETAILS.rating.count}
                    /> */}
                    <Badge variant="secondary">
                      <CircleCheck />
                      In Stock
                    </Badge>
                  </div>
                </div>
                 <h1>Price: {PRODUCT_DETAILS.price}</h1>
              </div>

              <p className="text-muted-foreground">
                {PRODUCT_DETAILS.description}
              </p>
            </div>

            <Button size="lg" className="w-full">
              Buy Now
            </Button>


            <ProductInfo
              info={[
                {
                  label: "Material",
                  value: "100% Premium Denim",
                },
                {
                  label: "Style",
                  value: "Puffer Jacket",
                },
                {
                  label: "Season",
                  value: "All Season",
                },
                {
                  label: "Care",
                  value: "Machine Washable",
                },
                {
                  label: "Origin",
                  value: "Made in Italy",
                },
                {
                  label: "Fit",
                  value: "Regular Fit",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductInfo = ({ info }: ProductInfoProps) => {
  if (!info) return;
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Product Details</h2>
      <dl>
        {info.map((item, index) => (
          <div
            key={`product-detail-1-info-${index}`}
            className="flex items-center justify-between border-b py-3 last:border-b-0"
          >
            <dt className="text-sm font-medium text-muted-foreground">
              {item.label}
            </dt>
            <dd className="text-sm font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

const ProductImages = ({ image }: ProductImagesProps) => {
  return (
    <Carousel
      opts={{
        breakpoints: {
          "(min-width: 768px)": {
            active: false,
          },
        },
      }}
    >
     
        <Image
        src={image}
        alt="title"
        width={700}
        height={700}
        />
        
      <div className="md:hidden">
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </div>
    </Carousel>
  );
};

export { ProductDetail };

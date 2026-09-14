"use client";

import Link from "next/link";
import ProductCardComponent, { ProductType } from "./ProductCardComponent";

interface ProductCardListProps {
  productFromApi: ProductType[];
}

export default function ProductCardListComponent({
  productFromApi,
}: ProductCardListProps) {
  return (
    <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {productFromApi.map(({ images, title, price, description, id }) => (
        <Link key={id} href={`/products/${id}`}>
          <ProductCardComponent
            id={id}
            images={images}
            title={title}
            price={price}
            description={description}
          />
        </Link>
      ))}
    </div>
  );
}

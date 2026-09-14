import { Suspense, use } from "react";
import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import type { ProductType } from "@/components/products/ProductCardComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Products',
  description: "This is product page which list down many products from the website.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph: {
    title: 'Products',
    description: 'This is product page which list down many products from the website.',
    images: ['A1_Thumbnail_project.png']
  }
};

function getProducts(): Promise<ProductType[]> {
  return fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  });
}

function Products({ productsPromise }: { productsPromise: Promise<ProductType[]> }) {
  const products = use(productsPromise);
  return <ProductCardListComponent productFromApi={products} />;
}

export default function ProductsPage() {
  const productsPromise = getProducts();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Products productsPromise={productsPromise} />
      </Suspense>
    </div>
  );
}
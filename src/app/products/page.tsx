import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import type { ProductType } from "@/components/products/ProductCardComponent";
import { Metadata } from "next";

// static metadata for about page
export const metadata: Metadata = {
  title: 'Products',
  description: "This is product page which list down many products from the website.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph:{
     title:'Products',
     description: 'This is product page which list down many products from the website.',
     images: ['A1_Thumbnail_project.png']
  }
};

async function getProducts(): Promise<ProductType[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <ProductCardListComponent productFromApi={products} />
    </div>
  );
}

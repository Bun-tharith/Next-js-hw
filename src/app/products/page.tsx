import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import type { ProductType } from "@/components/products/ProductCardComponent";

async function getProducts(): Promise<ProductType[]> {
  const response = await fetch("https://fakestoreapi.com/products", {
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

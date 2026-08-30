import { ProductDetail } from "@/components/products/ProductDetailCardComponent";
import type { ProductType } from "@/components/products/ProductCardComponent";

async function getProduct(id: string): Promise<ProductType> {
  const response = await fetch(`https://fakestoreapi.com/products/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  const productId = id[0];

  if (!productId) {
    return null;
  }

  const product = await getProduct(productId);

  return (
    <div>
      <ProductDetail productDetailInterface={product} />
    </div>
  );
}

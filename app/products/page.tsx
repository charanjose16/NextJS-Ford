import ProductsList from "./productList";

type Product = {
  id: number;
  name: string;
  model: string;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.BASE_URL}/data.json`, { cache: "no-store" });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsList products={products} />;
}

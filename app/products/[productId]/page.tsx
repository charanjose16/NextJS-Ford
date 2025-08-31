import { notFound } from "next/navigation";
import styles from "../products.module.css";

type Product = {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  color: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  image: string;
};

async function getProduct(id: string): Promise<Product | null> {
  //   const res = await fetch(`${process.env.BASE_URL}/data.json`, { cache: "no-store" });
  const res = await fetch("https://raw.githubusercontent.com/charanjose16/Car-Data/main/data.json", { cache: "no-store" });
  
  const products: Product[] = await res.json();
  const product = products.find((p) => p.id.toString() === id);
  return product || null;
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId);

  if (!product) return notFound();

  return (
    <div className={styles["product-page"]}>
      <div className={styles["product-image"]}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles["product-info"]}>
        <h1>{product.name}</h1>
        <p><strong>Model:</strong> {product.model}</p>
        <p><strong>Year:</strong> {product.year}</p>
        <p className={styles.price}>₹{product.price}</p>
        <p><strong>Color:</strong> {product.color}</p>
        <p><strong>Mileage:</strong> {product.mileage}</p>
        <p><strong>Transmission:</strong> {product.transmission}</p>
        <p><strong>Fuel Type:</strong> {product.fuelType}</p>
        <button className={styles["buy-button"]}>Buy Now</button>
      </div>
    </div>
  );
}

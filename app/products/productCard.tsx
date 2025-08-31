"use client";

import { useRouter } from "next/navigation";
import styles from "./products.module.css";

type Product = {
  id: number;
  name: string;
  model: string;
  image: string;
};

export default  function ProductsCard({product}:{product:Product}) {
    const router = useRouter();

  return (
    <div className={styles["products-container"]}  onClick={()=> router.push(`/products/${product.id}`)}>
  
        <div key={product.id} className={styles["product-card"]}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Model: {product.model}</p>
        </div>

    </div>
  );
}

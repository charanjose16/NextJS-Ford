"use client";

import { useState } from "react";
import ProductsCard from "./productCard";
import styles from "./products.module.css";

type Product = {
  id: number;
  name: string;
  model: string;
  image: string;
};

export default function ProductsList({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search cars by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      
      <div className={styles["products-container"]}>
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

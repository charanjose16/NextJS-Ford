import styles from "./home.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to Ford Cars</h1>
        <p>Discover our latest models and find your perfect ride.</p>
        <Link href="/products" className={styles.viewButton}>
          View All Cars
        </Link>
      </div>
    </div>
  );
}

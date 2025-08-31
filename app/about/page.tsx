import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>About Ford Cars</h1>
        <p>
          For over a century, Ford has built cars that inspire confidence,
          innovation, and performance. Driving towards a sustainable future.
        </p>
      </div>
    </div>
  );
}

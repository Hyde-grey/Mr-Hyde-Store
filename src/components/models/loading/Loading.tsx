import { useEffect, useState } from "react";
import styles from "./loading.module.css";

const Loading = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 100); // Small delay before showing loading to prevent quick flashes

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={styles.loading}>
      <div className={styles.loadingText}>
        <span
          className={
            styles.loadingTextWords + " " + styles.quattrocentoSansBold
          }
        >
          L
        </span>
        <span
          className={
            styles.loadingTextWords + " " + styles.quattrocentoSansBold
          }
        >
          O
        </span>
        <span
          className={
            styles.loadingTextWords + " " + styles.quattrocentoSansBold
          }
        >
          A
        </span>
        <span
          className={
            styles.loadingTextWords + " " + styles.quattrocentoSansBold
          }
        >
          D
        </span>
        <span
          className={
            styles.loadingTextWords + " " + styles.quattrocentoSansBold
          }
        >
          I
        </span>
        <span
          className={
            styles.loadingTextWords + " " + styles.quattrocentoSansBold
          }
        >
          N
        </span>
        <span
          className={
            styles.loadingTextWords + " " + styles.quattrocentoSansBold
          }
        >
          G
        </span>
      </div>
    </div>
  );
};

export default Loading;

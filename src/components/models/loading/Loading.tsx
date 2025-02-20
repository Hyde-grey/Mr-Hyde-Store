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
        <span className={styles.loadingTextWords}>L</span>
        <span className={styles.loadingTextWords}>O</span>
        <span className={styles.loadingTextWords}>A</span>
        <span className={styles.loadingTextWords}>D</span>
        <span className={styles.loadingTextWords}>I</span>
        <span className={styles.loadingTextWords}>N</span>
        <span className={styles.loadingTextWords}>G</span>
      </div>
    </div>
  );
};

export default Loading;

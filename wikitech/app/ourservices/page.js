import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./services.module.css";

const ServicesPage = () => {
  return (
    <div>
      <h1 className={styles.heading}>Our Services</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <FaSearch className={styles.icon} />
          <h2 className={styles.title}>Search Engine Optimization</h2>
          <p className={styles.description}>
            We help improve your website's visibility in search engines.
          </p>
        </div>
        <div className={styles.card}>
          <FaShoppingCart className={styles.icon} />
          <h2 className={styles.title}>E-commerce Solutions</h2>
          <p className={styles.description}>
            We provide robust e-commerce solutions tailored to your needs.
          </p>
        </div>
        <div className={styles.card}>
          <FaUser className={styles.icon} />
          <h2 className={styles.title}>User Experience Design</h2>
          <p className={styles.description}>
            We create intuitive and user-friendly interfaces for your
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

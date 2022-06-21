import styles from "./Osc.module.css";
import music_icon from "../../images/icon-music.svg";

const Osc = () => {
  return (
    <div className={styles.card}>
      <div className={styles.hero}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.h1}>Order Summary</h1>
        <p className={styles.desc}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className={styles.planContainer}>
          <img src={music_icon} alt="" />
          <div className={styles.priceContainer}>
            <span className={styles.annual_plan}>Annual Plan</span>
            <span className={styles.price}>$59.99/year</span>
          </div>
          <a href="/">Change</a>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.btn}>Proceed to Payment</button>
        </div>
        <div className={styles.cancelContainer}>
          <button className={styles.cancel}>Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default Osc;

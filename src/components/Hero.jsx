import bgImg from "../assets/background.png";
import fgImg from "../assets/foreground.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <img src={bgImg} alt="background" className={styles.layer1} />
      <h1>Sustain</h1>
      <img src={fgImg} alt="foreground" className={styles.layer3} />
      <div className={styles.bottom_gradient} />
    </div>
  );
};

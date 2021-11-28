import styles from "./HomeBody.module.css";
import image1 from "../pictures/image1.png";
import image2 from "../pictures/image2.png";

const HomeBody = () => {
  return (
    <div className={styles.tall}>
      <div className={styles.div4}>
        <div className={styles.div3}>
          <span className={styles.span7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius lectus vel est mattis, sit amet pulvinar est varius. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras dignissim velit id sodales sodales. Mauris
            ultricies interdum leo, nec iaculis lorem. Aliquam erat volutpat.
            Nunc et condimentum sapien.
          </span>
        </div>
        <img alt="image1" className={styles.img1} src={image1} />
      </div>
      <div className={styles.div4}>
        <img alt="image2" className={styles.img1} src={image2} />
        <div className={styles.div3}>
          <span className={styles.span7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius lectus vel est mattis, sit amet pulvinar est varius. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras dignissim velit id sodales sodales. Mauris
            ultricies interdum leo, nec iaculis lorem. Aliquam erat volutpat.
            Nunc et condimentum sapien.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;

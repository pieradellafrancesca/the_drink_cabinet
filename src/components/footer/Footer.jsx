import { GrHomeRounded, GrSearch, GrShare } from "react-icons/gr";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <ul>
        <li>
          <GrHomeRounded className={styles.icon} />
        </li>
        <li>
          <GrSearch className={styles.icon} />
        </li>
        <li>
          <GrShare className={styles.icon} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;

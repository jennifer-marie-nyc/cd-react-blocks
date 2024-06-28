import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";
import styles from "../css/MainContent.module.css";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <Subcontent />
      <Advertisement />
    </div>
  );
};

export default MainContent;

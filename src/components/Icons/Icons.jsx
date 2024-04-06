import styles from "./Icons.module.scss";

import { TbLetterP } from "react-icons/tb";
import { TbLetterL } from "react-icons/tb";
import { TbLetterN } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import { TbCurrencyEuro } from "react-icons/tb";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbCurrencyFrank } from "react-icons/tb";

const Icons = () => {
  return (
    <div className={styles.icones}>
      <div className={styles.plnWrapper}>
        <TbLetterP className={styles.plnIcon} />
        <TbLetterL className={styles.plnIcon} />
        <TbLetterN className={styles.plnIcon} />
      </div>
      <div>
        <FaArrowsRotate className={styles.arrowIcon} />
      </div>
      <div className={styles.currentWrapper}>
        <TbCurrencyEuro className={styles.eurIcon} />
        <TbCurrencyDollar className={styles.usdIcon} />
        <TbCurrencyFrank className={styles.chfIcon} />
      </div>
    </div>
  );
};

export default Icons;

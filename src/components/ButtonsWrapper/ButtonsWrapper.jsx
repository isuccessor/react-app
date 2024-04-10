/* *Styles */
import styles from './ButtonsWrapper.module.css';

const ButtonsWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      { children }
    </div>
  );
};

export default ButtonsWrapper;
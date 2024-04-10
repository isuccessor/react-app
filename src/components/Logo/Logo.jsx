/* *Styles */
import styles from './Logo.module.css';

/* *Assets */
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div>
      <a href='#' className={styles.logo}>
        <img src={logo} alt='logo' />
      </a>
    </div>
  );
};

export default Logo;

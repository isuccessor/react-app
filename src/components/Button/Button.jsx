// * Base
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

const Button = ({ text, buttonMode, type = 'button', onClick}) => {
  const styleList = [styles.button];
  switch (buttonMode) {
    case 'white': {
      styleList.push(styles.white);
      break;
    }
    case 'orange': {
      styleList.push(styles.orange);
      break;
    }
    case 'hero': {
      styleList.push(styles.orangeBig);
      break;
    }
  }

  return (
    <button type={type} className={cn(styleList)} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;

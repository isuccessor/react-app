/* *Base */
import cn from 'classnames';

/* *Styles */
import styles from './Button.module.css';

const Button = ({ text, buttonMode, type = 'Button' }) => {
  const styleList = [styles.button];

  switch (buttonMode) {
    case 'signIn': {
      styleList.push(styles.signIn);
      break;
    }
    case 'signUp': {
      styleList.push(styles.signUp);
      break;
    }
    case 'hero': {
      styleList.push(styles.hero);
      break;
    }
  }

  return (
    <button type={type} className={cn(styleList)}>
      <span>{text}</span>
    </button>
  );
};

export default Button;

// * Base
import cn from 'classnames';

// * Styles
import styles from './Header.module.css';

// * Components
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header = () => {
  const handleSignInClick = () => {
    console.log('Sign in button clicked');
  };

  const handleSignUpClick = () => {
    console.log('Sign up button clicked');
  };
  
  return (
    <>
      <header className={styles.header}>
        <Wrapper className={[styles.wrapper]}>
          <Logo />
          <Navigation />
          <div className={[styles.buttonsWrapper]}>
            <Button text={'Sign in'} buttonMode='white' onClick={handleSignInClick} />
            <Button text={'Sign up'} buttonMode='orange' onClick={handleSignUpClick} />
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;

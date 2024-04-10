/* *Base */
import cn from 'classnames';

/* *Styles */
import styles from './Header.module.css';

/* *Components*/
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';
import ButtonsWrapper from '../ButtonsWrapper/ButtonsWrapper';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Wrapper className={[styles.wrapper]}>
          <Logo />
          <Nav />
          <ButtonsWrapper>
            <Button text={'Sign in'} buttonMode='signIn' />
            <Button text={'Sign up'} buttonMode='signUp' />
          </ButtonsWrapper>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;

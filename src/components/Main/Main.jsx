/* *Styles */
import styles from './Main.module.css';

/* *Components */
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Title from '../Title/Title';

/* *Assets */
import hero from '../../assets/hero.svg';

const Main = () => {
  return (
    <main className={styles.main}>
      <Wrapper className={[styles.wrapper]}>
        <div className={styles.content}>
          <Title text={'The Design Thinking superpowers'}/>
          <p className={styles.info}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <Button text={'Get started'} buttonMode='hero' />
        </div>
        <div className={styles.hero}>
          <img src={hero} alt='hero' />
        </div>
      </Wrapper>
    </main>
  );
};

export default Main;

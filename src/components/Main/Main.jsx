// * Styles
import styles from './Main.module.css';
import { useCallback, useEffect, useState } from 'react';

// * Components
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Title from '../Title/Title';

// * Assets
import hero from '../../../public/assets/hero.svg';

const Main = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((n) => n + 1);
  }, [count]);

  useEffect(() => {
    console.log(`The count has been changed: ${count}`), [count];
  });

  return (
    <main className={styles.main}>
      <Wrapper className={[styles.wrapper]}>
        <div className={styles.content}>
          <Title text={'The Design Thinking superpowers'} />
          <p className={styles.info}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <Button
            text={`Get started + ${count}`}
            buttonMode="orange"
            onClick={increment}
          />
        </div>
        <div className={styles.hero}>
          <img src={hero} alt="hero" />
        </div>
      </Wrapper>
    </main>
  );
};

export default Main;

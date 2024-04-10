import styles from './Nav.module.css';

const Nav = () => {

  const navList = ['Product', 'Customers', 'Pricing', 'Resources'];

  return (
    <nav>
      <ul className={styles.list}>
        {
          navList.map((item) => (
            <li key={item}>
              <a href='#' className={styles.link}>{item}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;
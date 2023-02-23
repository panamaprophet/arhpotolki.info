import styles from './style.module.css';

function Title({ children, condenced = false }) {
  return <h2 className={[styles.title, condenced && styles.title_condensed].join(' ')}>{children}</h2>;
}

export default Title;

import styles from './styles.module.css';

export const Section = ({ id, children, style = {} }) => {
  return (
    <section id={id} className={styles.root} style={style}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </section>
  )
}

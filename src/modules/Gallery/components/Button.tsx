import styles from './styles.module.css';

function Button(props) {
  const { onClick, isActive, button } = props;

  const handleClick = () => onClick(button);

  return (
    <button
      onClick={handleClick}
      value={button.category}
      className={`${styles.filter__item} ${
        isActive && styles.filter__item__active
      }`}
    >
      {button.category}
    </button>
  );
}

export default Button;

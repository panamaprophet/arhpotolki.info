import { useState } from 'react';
import { InputText } from '../Input';
import styles from './styles.module.css';


interface Props {
  onSubmit: (name: string, phone: string) => void,
};


export const OrderForm = (props: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = () => {
    props.onSubmit(name, phone);

    setName('');
    setPhone('');
  }

  return (
    <form className={styles.root}>
      <InputText placeholder="Имя" value={name} onChange={setName} />
      <InputText placeholder="Телефон" value={phone} onChange={setPhone} />

      <button className={styles.submitButton} onClick={onSubmit}>Отправить</button>

      <p className={styles.disclaimer}>
        Мы гарантируем конфиденциальность данных оставленных на сайте.
      </p>
    </form>
  );
};
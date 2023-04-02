import { useState } from 'react';
import { ButtonWithStatus } from '../Button';
import { InputText } from '../Input';
import styles from './styles.module.css';


interface Props {
  onSubmit: (data: { name: string, phone: string }) => void,
};


export const OrderForm = (props: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = () => {
    props.onSubmit({ name, phone });

    setName('');
    setPhone('');
  }

  let isDisabled = false;

  if (!name.length) {
    isDisabled = true;
  }

  if (!phone.replace(/\D/g, '').length) {
    isDisabled = true;
  }

  return (
    <form className={styles.root}>
      <InputText placeholder="Имя" value={name} onChange={setName} />
      <InputText placeholder="Телефон" value={phone} onChange={setPhone} />

      <ButtonWithStatus
        disabled={isDisabled}
        theme="green"
        className={styles.submitButton}
        onClick={onSubmit}
        status={['Отправить', 'Отправляется', 'Отправлено', 'Ошибка']}
      />

      <p className={styles.disclaimer}>
        Мы гарантируем конфиденциальность данных оставленных на сайте.
      </p>
    </form>
  );
};

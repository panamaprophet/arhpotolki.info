import { Button } from '../../../../Buttons/Button';
import { InputTextLazy } from '../../../../Input';
import styles from '../../index.module.css';


interface Props {
    name: string,
    onChange: (newName: string) => void,
    onRemove: () => void,
}


export const GroupName = ({ name, onChange, onRemove }: Props) => (
    <th>
        <InputTextLazy value={name} onChange={onChange} />
        <Button size="small" onClick={onRemove} theme="orange" className={styles.inputButton}>
            &#10539;
        </Button>
    </th>
);

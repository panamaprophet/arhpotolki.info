import { Button } from '../../../../Button';
import { InputTextLazy } from '../../../../Input';
import styles from '../../index.module.css';


interface Props {
    values: number[],
    groupKey: number,
    isLastRow: boolean,
    onKeyRename: (newKey: number) => void,
    onPriceChange: (groupIndex: number, value: number) => void,
    onRowRemove: () => void,
    onAddRow: () => void,
}


export const GroupRow = ({
    values,
    groupKey,
    isLastRow = false,
    onKeyRename,
    onPriceChange,
    onRowRemove,
    onAddRow,
}: Props) => (
    <tr>
        <td>
            <InputTextLazy
                value={String(groupKey)}
                onChange={value => onKeyRename(Number(value))}
            />
        </td>

        {values.map((value, index) => (
            <td key={value + index}>
                <InputTextLazy
                    value={String(value)}
                    onChange={value => onPriceChange(index, Number(value))}
                />

                {(values.length - 1 === index) && (
                    <Button theme="orange" size="small" className={styles.inputButton} onClick={onRowRemove}>
                        &#10539;
                    </Button>
                )}

                {(values.length - 1 === index && isLastRow) && (
                    <Button theme="green" size="small" className={styles.addButton} onClick={onAddRow}>
                        +
                    </Button>
                )}
            </td>
        ))}
    </tr>
);

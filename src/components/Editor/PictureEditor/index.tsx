/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react';
import { InputList } from '../../Input';
import Image from 'next/image';
import { Picture } from '../../../types';
import { Column } from '../../Layout';
import { Button } from '../../Button';
import styles from './index.module.css';


interface Props extends Partial<Picture> {
    onUpdate: (item: Picture) => void,
    onRemove: (item: Pick<Picture, 'id'>) => void,
};

const IMAGE_SIZE = 120;

export const PictureEditor = (props: Props) => {
    const { id = null, url = '', tags = [], onUpdate, onRemove } = props;
    const [state, setState] = useState<Picture>({ id, url, tags });
    const [isSaved, setSaved] = useState(true);

    const onChange = (changes) => {
        setState({ ...state, ...changes });
        setSaved(false);
    };

    if (!isSaved && state.id) {
        onUpdate(state);
        setSaved(true);
    }

    return (
        <Column>
            <Image src={state.url} alt={id} width={IMAGE_SIZE} height={IMAGE_SIZE} />
            <InputList placeholder="категории" onChange={tags => onChange({ tags })} value={state.tags} />
            <Button theme="orange" size="small" className={styles.buttonRemove} onClick={() => onRemove(state)}>⤫</Button>
        </Column>
    );
};

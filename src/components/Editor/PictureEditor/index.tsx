/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { InputFile, InputList } from '../../Input';
import Image from 'next/image';
import { Picture } from '../../../types';


interface Props extends Partial<Picture> {
    onCreate: (item: Omit<Picture, 'id'>) => void,
    onUpdate: (item: Picture) => void,
    onRemove: (item: Pick<Picture, 'id'>) => void,
};


export const PictureEditor = (props: Props) => {
    const { id = null, url = '', tags = [], onCreate, onUpdate, onRemove } = props;
    const [state, setState] = useState<Picture>({ id, url, tags });
    const [isSaved, setSaved] = useState(true);

    const onChange = (changes) => {
        setState({ ...state, ...changes });
        setSaved(false);
    };

    const _onCreate = () => {
        onCreate(state);
        setState({ id: null, url: '', tags: [] });
    };

    useEffect(() => {
        if (!isSaved && state.id) {
            onUpdate(state);
            setSaved(true);
        }
    }, [isSaved]);

    return (
        <div>
            {!state.url
                ? <InputFile onUpload={url => onChange({ url })} />
                : <Image src={state.url} alt={id || url} width="100" height="100" />
            }

            <InputList onChange={tags => onChange({ tags })} value={state.tags} />

            {!state.id
                ? <button onClick={_onCreate}>+</button>
                : <button onClick={() => onRemove(state)}>Х</button>
            }
        </div>
    );
};

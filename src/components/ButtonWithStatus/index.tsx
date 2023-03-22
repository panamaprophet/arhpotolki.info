import { ComponentProps, useEffect, useState } from 'react';
import { Button } from '../Button';

interface Props extends ComponentProps<typeof Button> {
    status: string[],
}

export const ButtonWithStatus = (props: Props) => {
    const [[idle, loading, finished, error]] = useState(props.status);
    const [text, setText] = useState(idle);
    const [isFinished, setIsFinished] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const handleStates = () => {
            setText(idle);
            setIsFinished(false);
            setDisabled(false);
        }

        if (isFinished) {
            setTimeout(handleStates, 2000);
        }
    }, [idle, isFinished]);

    const handleClick = async () => {
        try {
            setText(loading);
            setDisabled(true);

            await props.onClick();
            
            setText(finished);
        } catch (e) {
            setText(error);
        } finally {
            setIsFinished(true);
        }
    }

    return (
        <Button onClick={handleClick} className={props.className} theme={props.theme} disabled={disabled || props.disabled}>
            {text}
        </Button>
    );
};

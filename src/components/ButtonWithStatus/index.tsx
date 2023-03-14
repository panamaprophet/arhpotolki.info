import { useEffect, useState } from "react";
import { Button } from "../Button";

interface Props {
    callback: () => Promise<void> | void,
    status: String[],
    disabled: boolean,
}

export const ButtonWithStatus = ({ callback, status, disabled: isLoad }: Props) => {
    const [idle, loading, finished, error] = status;
    const [text, setText] = useState(idle);
    const [isFinished, setIsFinished] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const handleStates = () => {
            setText(idle);
            setIsFinished(false);
        }

        if (isFinished) {
            const id = setTimeout(handleStates, 2000);

            return () => clearTimeout(id);
        }
    }, [isFinished]);

    const handleClick = async () => {
        setText(loading);
        setDisabled(true)

        try {
            const result = await callback();
            
            setText(finished)
        } catch (e) {
            setText(error);
        } finally {
            setTimeout(() => {
                setDisabled(false)
            }, 2000);
            setIsFinished(true);
        }
    }

    return (
        <Button onClick={handleClick} theme="green" disabled={disabled || isLoad}>
            {text}
        </Button>);
};

import { useEffect, useState } from "react";
import { Button } from "../Button";

export const ButtonWithStatus = ({ callback, status }) => {
    const [text, setText] = useState(status[0])
    const errorMessage = 'Error occured';

    useEffect(() => {
        let timer;

        if (text === status[2] || text === errorMessage) {
            timer = setTimeout(() => setText(status[0]), 2000);
        }

        return () => clearTimeout(timer);
    }, [text, status])

    const handleClick = async () => {
        setText(status[1]);

        callback()
            .then(() => setText(status[2]))
            .catch(() => setText(errorMessage));
    }

    const allGreen = text === status[0] || text === status[2];

    return <Button onClick={handleClick} theme={allGreen ? 'green' : 'grey'}>{text}</Button>;
};

import { createContext } from 'react';
import { Feedback, Picture, Settings } from '../types';

export const Context = createContext<{ pictures: Picture[], feedback: Feedback[], settings: Settings }>({
    pictures: [],
    feedback: [],
    settings: {},
});

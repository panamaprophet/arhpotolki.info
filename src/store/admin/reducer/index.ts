import { reducer as settingsReducer } from './settings';
import { reducer as feedbackReducer } from './feedback';
import { reducer as picturesReducer } from './pictures';
import { Feedback, Picture, Settings } from '../../../types';
import { ACTION } from './action-types';

interface State {
    feedback: Feedback[],
    pictures: Picture[],
    settings: Settings,
}

export const reducer = (state: State, action: ACTION) => ({
    ...state,
    settings: settingsReducer(state.settings, action),
    feedback: feedbackReducer(state.feedback, action),
    pictures: picturesReducer(state.pictures, action),
});

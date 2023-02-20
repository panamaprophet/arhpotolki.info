import { reducer as settingsReducer } from './settings';
import { reducer as feedbackReducer } from './feedback';
import { reducer as picturesReducer } from './pictures';


export const reducer = (state, action) => ({
    ...state,
    settings: settingsReducer(state.settings, action),
    feedback: feedbackReducer(state.feedback, action),
    pictures: picturesReducer(state.pictures, action),
});

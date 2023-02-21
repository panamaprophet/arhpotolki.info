import {
    ACTION_PICTURES_CHANGE,
    ACTION_FEEDBACK_CHANGE,
    ACTION_SETTINGS_CHANGE,
    ACTION_PICTURES_REMOVE,
    ACTION_FEEDBACK_REMOVE,
    ACTION_SETTINGS_REMOVE,
} from '../';


export const createUpdatePictureAction = dispatch => async (payload) => {
    await fetch(`/api/pictures/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
    });

    dispatch({
        type: ACTION_PICTURES_CHANGE,
        payload,
    });
};

export const createUpdateFeedbackAction = dispatch => async (payload) => {
    await fetch(`/api/feedback/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
    });

    dispatch({
        type: ACTION_FEEDBACK_CHANGE,
        payload,
    });
};

export const createSettingsUpdateAction = dispatch => async (payload) => {
    await fetch(`/api/settings/${payload.key}`, {
        method: 'PUT',
        body: JSON.stringify({ value: payload.value }),
    });

    dispatch({
        type: ACTION_SETTINGS_CHANGE,
        payload,
    });
};

export const createRemovePictureAction = dispatch => async (payload) => {
    await fetch(`/api/pictures/${payload.id}`, {
        method: 'DELETE',
    });

    dispatch({
        type: ACTION_PICTURES_REMOVE,
        payload,
    });
};

export const createRemoveFeedbackAction = dispatch => async (payload) => {
    await fetch(`/api/feedback/${payload.id}`, {
        method: 'DELETE',
    });

    dispatch({
        type: ACTION_FEEDBACK_REMOVE,
        payload,
    });
};

export const createRemoveSettingsAction = dispatch => async (payload) => {
    await fetch(`/api/pictures/${payload.key}`, {
        method: 'DELETE',
    });

    dispatch({
        type: ACTION_SETTINGS_REMOVE,
        payload,
    });
};

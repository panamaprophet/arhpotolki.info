import {
    ACTION_PICTURES_CHANGE,
    ACTION_FEEDBACK_CHANGE,
    ACTION_SETTINGS_CHANGE,
    ACTION_PICTURES_REMOVE,
    ACTION_FEEDBACK_REMOVE,
    ACTION_SETTINGS_REMOVE,
    ACTION_PICTURES_ADD,
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

export const createSettingsUpdateAction = dispatch => async (key, value) => {
    await fetch(`/api/settings/${key}`, {
        method: 'PUT',
        body: JSON.stringify({ value: value }),
    });

    dispatch({
        type: ACTION_SETTINGS_CHANGE,
        payload: { key, value },
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

export const createAddPictureAction = dispatch => async ({ url, tags }) => {
    const { id } = await fetch(`/api/pictures`, {
        method: 'POST',
        body: JSON.stringify({ url, tags }),
    })
        .then(response => response.json())
        .then(response => response.item);

    dispatch({
        type: ACTION_PICTURES_ADD,
        payload: { id, url, tags },
    });
};

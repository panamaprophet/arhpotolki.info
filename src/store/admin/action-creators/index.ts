import { Dispatch } from 'react';
import {
    ACTION_PICTURES_CHANGE,
    ACTION_FEEDBACK_CHANGE,
    ACTION_SETTINGS_CHANGE,
    ACTION_PICTURES_REMOVE,
    ACTION_FEEDBACK_REMOVE,
    ACTION_SETTINGS_REMOVE,
    ACTION_PICTURES_ADD,
} from '../';
import { Feedback, Picture, Settings } from '../../../types';
import { ACTION } from '../reducer/action-types';


export const createUpdatePictureAction = (dispatch: Dispatch<ACTION>) => async (payload: Picture) => {
    await fetch(`/api/pictures/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
    });

    dispatch({
        type: ACTION_PICTURES_CHANGE,
        payload,
    });
};

export const createUpdateFeedbackAction = (dispatch: Dispatch<ACTION>) => async (payload: Feedback) => {
    await fetch(`/api/feedback/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
    });

    dispatch({
        type: ACTION_FEEDBACK_CHANGE,
        payload,
    });
};

export const createSettingsUpdateAction = (dispatch: Dispatch<ACTION>) => async (key: keyof Settings, value: unknown) => {
    await fetch(`/api/settings/${key}`, {
        method: 'PUT',
        body: JSON.stringify({ value: value }),
    });

    dispatch({
        type: ACTION_SETTINGS_CHANGE,
        payload: { key, value },
    });
};

export const createRemovePictureAction = (dispatch: Dispatch<ACTION>) => async (payload: Picture) => {
    await fetch(`/api/pictures/${payload.id}`, {
        method: 'DELETE',
    });

    dispatch({
        type: ACTION_PICTURES_REMOVE,
        payload,
    });
};

export const createRemoveFeedbackAction = (dispatch: Dispatch<ACTION>) => async (payload: Feedback) => {
    await fetch(`/api/feedback/${payload.id}`, {
        method: 'DELETE',
    });

    dispatch({
        type: ACTION_FEEDBACK_REMOVE,
        payload,
    });
};

export const createRemoveSettingsAction = (dispatch: Dispatch<ACTION>) => async (payload: { key: keyof Settings }) => {
    await fetch(`/api/pictures/${payload.key}`, {
        method: 'DELETE',
    });

    dispatch({
        type: ACTION_SETTINGS_REMOVE,
        payload,
    });
};

export const createAddPictureAction = (dispatch: Dispatch<ACTION>) => async ({ url, tags }: { url: string, tags: string[] }) => {
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

import * as types from './mutation-types'
import API from '../api'


export const addCategory = ({ commit }, category) => {
    API.categories.add(category).then(savedCategory => {
        commit(types.ADD_CATEGORY, savedCategory)
    })
}

export const removeCategory = ({ commit }, category) => {
    API.categories.delete(category).then(() => {
        commit(types.REMOVE_CATEGORY, {
            id : category.id
        })
    })
}

export const updateCategory = ({ commit }, category) => {
    API.categories.save(category).then(savedCategory => {
        commit(types.UPDATE_CATEGORY, savedCategory)
    })
}

export const addImage = ({ commit }, image) => {
    API.images.add(image).then(savedImage => {
        commit(types.ADD_IMAGE, savedImage)
    })
}

export const updateImage = ({ commit }, image) => {
    API.images.save(image).then(savedImage => {
        commit(types.UPDATE_IMAGE, savedImage)
    })
}

export const removeImage = ({commit}, image) => {
    API.images.delete(image).then(() => {
        commit(types.REMOVE_IMAGE, {
            id : image.id
        })
    })
}

export const updateResponse = ({commit}, response) => {
    API.feedback.save(response).then(savedResponse => {
        commit(types.UPDATE_RESPONSE, savedResponse)
    })
}

export const deleteResponse = ({ commit }, response) => {
    API.feedback.delete(response).then(() => {
        commit(types.REMOVE_RESPONSE, {
            id : response.id
        })
    })
}

export const saveSettings = ({commit}, response) => {
    API.settings.save(response).then(() => {
        commit(types.SETTINGS_SAVE, {
            settings: response
        })
    })
}

export const init = ({commit}) => {

    Promise.all([
        API.categories.all(),
        API.images.all(),
        API.feedback.all(true),
        API.settings.all(),
    ]).then(([categories, images, responses, settings]) => {
        commit(types.INIT, { images, categories, responses, settings })
    })
}
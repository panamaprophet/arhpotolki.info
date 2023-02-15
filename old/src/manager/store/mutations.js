import {assign} from 'lodash/fp'
import * as types from './mutation-types'

export default {

    [types.ADD_CATEGORY] (state, category) {
        state.categories.push(category)
    },

    [types.REMOVE_CATEGORY] (state, category) {
        state.categories = state.categories.filter(item => item.id !== category.id)
    },

    [types.UPDATE_CATEGORY] (state, category) {

        let index = state.categories
                        .map(category => category.id)
                        .indexOf(category.id)

        if (index !== -1) {
            state.categories[index] = category
        }
    },


    [types.ADD_IMAGE] (state, image) {
        state.images.push(image)
    },

    [types.REMOVE_IMAGE] (state, image) {
        state.images = state.images.filter(item => item.id !== image.id)
    },

    [types.UPDATE_IMAGE] (state, image) {

        let index = -1

        for (let i = 0, l = state.images.length; i < l; i++){
            if (state.images[i].id === image.id) {
                index = i
                break
            }
        }

        if (index !== -1) {
            state.images[index] = image
        }
    },


    [types.UPDATE_RESPONSE] (state, response) {

        let index = state.responses.map(item => item.id).indexOf(response.id)

        if (index !== -1) {
            state.responses[index] = response
        }
    },

    [types.REMOVE_RESPONSE] (state, response) {
        state.responses = state.responses.filter(item => item.id !== response.id)
    },

    [types.SETTINGS_SAVE] (state, response) {
        assign(response.settings, state.settings)
    },


    [types.INIT] (state, { categories, images,responses, settings }) {
        state.categories = categories
        state.images = images
        state.responses = responses
        state.settings = settings
    }

}
import * as types from './mutation-types'

export default {
	    [types.INIT] (state, { categories, images, feedback, settings }) {
        	state.categories = categories
        	state.images = images
        	state.feedback = feedback
        	state.settings = settings
        },

        [types.ORDER_UPDATE] (state, {order}) {        	
        	state.order = order
        }
}
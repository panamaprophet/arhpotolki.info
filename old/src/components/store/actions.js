import * as types from './mutation-types'

export const orderUpdate = ({commit}, order) => {
	commit(types.ORDER_UPDATE, order)
}

export const init = ({commit}) => {

	const images = window.state.images
	const feedback = window.state.feedback
	const categories = window.state.categories
	const settings = window.state.settings

	commit(types.INIT, {
		images,
		feedback,
		categories,
		settings,
	})
}	
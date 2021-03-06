
import axios from 'axios'
export const state = () => ({
	ui: [
		{ nom: 'anglais', on: true}, // DOIT RESTER EN INDEX 0
		{ nom: 'tags' },
		{ nom: 'bio', on: false}
	],
	filters : [],

})

export const getters = {
	getName: (state) => (nom) => {
		return state.ui.find(thing => thing.nom === nom)

	},
}

const uiIncrSize = 10
function clamp(val, min, max) {
	return val > max ? max : val < min ? min : val;
}
export const mutations = {
	REMOVE_TAGS(state,data){
		state.filters = []
		for(const tag of state.Tags){
			tag.isSelected = false
		}
	},
	INCR(state, data) {
		const val = uiIncrSize * data[1]
		data[0].val = clamp(data[0].val + val, 10, 100)
	},
	SWITCH(state, data) {
		data.on = !data.on
	},
	SWITCH_TAG(state, data){
		data.isSelected = !data.isSelected
		if(data.isSelected){
			state.filters = [ data.id, ...state.filters]
		}
		else{
			state.filters.splice(state.filters.find(x => x === data.tag),1)
		}

	},
	TAGS_INIT(state, data) {
		data = state.Tags
	},
	SORT_FETCH(state, data) {
			// console.log(document.documentElement.style)

		data.Projets.data.forEach(e => {
			console.log(e)	
		})
		for(const projet of data.Projets.data){
			projet.visited = false
			for(const tag of projet.tags){
				tag.tags_CLEAN = data.Tags.data.find((x) => x.id === tag.tags_id)
			}
//			if(projet.translations.length != 2){
//				projet.translations[1] = projet.translations[0]
//			}
			sortByKey(projet.translations, "languages_code")
		}
		for(const tag of data.Tags.data){
			tag.isSelected = false
		}
		state.Bio = data.Bio.data
		state.Tags = data.Tags.data
		state.Style = data.Style.data
		// state.Projets = data.Projets.data.filter(projet => projet.featured === true).reverse()
		state.Projets = data.Projets.data
	}
}
export const actions = {
	async nuxtServerInit({ commit }) {
		try {
			const Projets = await axios.get(`${this.$config.API_URL}items/projets?fields=*.*`)
			const Tags = await axios.get(`${this.$config.API_URL}items/tags`)
			const Style = await axios.get(`${this.$config.API_URL}items/style`)
			const Bio = await axios.get(`${this.$config.API_URL}items/bio?fields=*.*`)
			const Files = await axios.get(`${this.$config.API_URL}files`)
			
			commit('SORT_FETCH', { Projets: Projets.data, Tags: Tags.data, Bio: Bio.data, Files: Files.data, Style : Style.data })
		}
		catch (error) {
			console.log('error', error)
		}
		commit('TAGS_INIT', this.state.ui[1])
	}
}

function sortByKey(array, key){
	return array.sort(function(a,b) {
		let x = a[key]
		let y = b[key]
		return ((x>y) ? -1 : ((x > y) ? 1 : 0))
	})
}
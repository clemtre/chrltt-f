import axios from 'axios'
export const state = () => ({
	ui: [
		{ nom: 'images', on: true, val: 100 },
		{ nom: 'bio', on: true },
		{ nom: 'tags', on: true },
		{ nom: 'darkmode', on: true },
		{ nom: 'projets', on: true }
	],
	// isPortrait: window.innerWidth < window.innerHeight || false,
	Projets: [],
	Bio: [],

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
	INCR(state, data) {
		const val = uiIncrSize * data[1]
		data[0].val = clamp(data[0].val + val, 10, 100)
	},
	SWITCH(state, data) {
		data.on = !data.on
	},
	DARKMODE_INIT(state, data) {
		data = this.$colorMode.preference
	},
	SORT_FETCH(state, data) {
		for(const projet of data.Projets.data){
			projet.elephant = 'a'
			if(projet.translations[0].corps){
				// projet.translations[0].corpsMd = $md.render(projet.translations[0].corps) 
				// 
			}
		}
		/*
		for (const projet of data.Projets.data) {

			projet.titre = projet.titre.replace('<p>', "").replace('</p>', "")

			const nomClient = data.Tags.data.find((x) => x.id === projet.client.nom);
			const enteteFix = data.Files.data.find((x) => x.id === projet.entete);
			const entete_portraitFix = data.Files.data.find((x) => x.id === projet.entete_portrait);

			projet.nomClient = projet.client.nom;
			projet.entete = projet.entete.filename_disk
			projet.entete_portrait = projet.entete_portrait.filename_disk

			projet.medias_CLEAN = []
			let countMedia = 0


			// console.log(projet.titre, projet.medias.length ? "c'est bien" : "Y'A PAS D'IMAGES !!!")

			if (projet.medias.length) {
				for(const media of projet.medias){
					const imageRes = data.Images.data.find((x) => x.id === parseInt(media.item,10));
					for(const imageIndiv of imageRes.images){
						const imgMediasFix = data.Files.data.find((x) => x.id === imageIndiv.directus_files_id)
						// console.log(imgMediasFix.filename_disk)
						imageIndiv.disk = imgMediasFix.filename_disk
					}
					// console.log(imageRes)
					projet.medias_CLEAN[countMedia] = imageRes.images
					// projet.medias_CLEAN[countMedia].directus_files_id = imgMediasFix.filename_disk
					countMedia ++
				}
				for (const media of projet.medias) {
					const imageRes = data.Images.data.find((x) => x.Images_id === parseInt(media.item,10));
					// console.log(media)
					if (imageRes) {
						// console.log(imageRes)
					}
				}
			}
		}
		*/
		state.Bio = data.Bio.data
		// state.Projets = data.Projets.data.filter(projet => projet.featured === true).reverse()
		state.Projets = data.Projets.data
	}

}
export const actions = {
	async nuxtServerInit({ commit }) {
		try {
			const Projets = await axios.get(`${this.$config.apiUrl}items/projets?fields=*.*`)
			const Tags = await axios.get(`${this.$config.apiUrl}items/tags`)
			// const Images = await axios.get(`${this.$config.apiUrl}items/Images?fields=*.*`)
			const Bio = await axios.get(`${this.$config.apiUrl}items/bio?fields=*.*`)
			const Files = await axios.get(`${this.$config.apiUrl}files`)
			

			commit('SORT_FETCH', { Projets: Projets.data, Tags: Tags.data, Bio: Bio.data, Files: Files.data })
		}
		catch (error) {
			console.log('error', error)
		}
		// console.log(this.$colorMode.preference)



		// commit('DARKMODE_INIT', state.ui.)


	}
}
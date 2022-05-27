<template>
  <div>
    <site-bio v-show="$store.state.ui[2].on"></site-bio>

    <div class="projet-ctn">
      <ul class="projet" v-for="(projet, id) of ProjetsFiltered" :key="id">
        <nuxt-link :to="projet.slug">
          <li>
            <p class="titre">{{ projet.translations[lang].titre }}</p>
            <p>
              {{ projet.translations[lang].accroche }}
            </p>
            <br />
            <img
              class="thumbnail"
              :src="`${$config.apiUrl}assets/${projet.miniature.filename_disk}`"
              alt=""
            />
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBio : false
    };
  },
  computed: {
    ProjetsFiltered: function () {
      if (!this.$store.state.filters.length) {
        return this.$store.state.Projets;
      } else {
        const filters = this.$store.state.filters
        console.log(filters)
        function filterByTag(obj) {
          for(const tag of obj.tags){
            if(filters.includes(tag.tags_CLEAN.id)){
              return obj

            }
          }
        }
        return this.$store.state.Projets.filter(filterByTag);

        let res = [];
        for (const projet of this.$store.state.Projets) {
          for (const tag of projet.tags) {
            if (tag.tags_CLEAN.tag === "Presse") {
              res += projet;
            }
          }
        }
        return res;
      }
    },
    lang: function () {
      return this.$store.state.ui[0].on ? 1 : 0;
    },
  },
};
</script>

<style scoped>
.projet-ctn {
  display: flex;
  flex-wrap: wrap;
}
.thumbnail {
  max-width: 100%;
  max-height: 30vh;
  box-sizing: border-box;
}
.thumbnail:hover {
  border: 10px solid red;
}
a {
  text-decoration: none;
}
p {
  margin: 0;
  color: black;
}
.titre {
  text-decoration: underline;
}
img:hover {
  max-height: 40vh;
}
</style>
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
            <!-- <tag-labels :data="projet"></tag-labels> -->
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
      showBio: false,
    };
  },
  computed: {
    ProjetsFiltered: function () {
      if (!this.$store.state.filters.length) {
        return this.$store.state.Projets;
      } else {
        const filters = this.$store.state.filters;
        function filterByTag(obj) {
          for (const tag of obj.tags) {
            if (filters.includes(tag.tags_CLEAN.id)) {
              return obj;
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
  gap: calc(var(--gutter) * 2);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: var(--gutter);
}

a {
  text-decoration: none;
}
li {
  width: 100%;
}
p {
  line-height: 18px;
  margin: 0;
  color: var(--noir);
  max-width: 400px;
}
.titre {
  text-decoration: underline;
  color: var(--principale);
}
img:hover {
}
.thumbnail {
  margin-top: var(--gutter);
  max-height: 500px;
  /* width: 100%; */
  object-fit: contain;
  /* box-sizing: border-box; */
  /* transition: 0.05s linear; */
  box-sizing: border-box;
  margin-left: calc(var(--gutter) * -1);
  border: 0 solid var(--interaction);

  margin-bottom: calc(var(--gutter) * 2);
}
.projet:hover .thumbnail {
  border: calc(var(--gutter) * 1) solid var(--interaction);
}

li::before {
  /* content: 'pastille'; */
}
ul {
  padding-left: var(--gutter);
  margin: 0;
}
.projet {
  /* height: 300px; */
  width: auto;
}
</style>
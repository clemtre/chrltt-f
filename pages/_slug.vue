<template>
  <div>
    <div class="nav">
      <nuxt-link to="/" class="nav-lien">←</nuxt-link>
      <nuxt-link
        class="nav-lien"
        v-for="e in projets"
        :key="e.id"
        :to="e.slug"
        >{{ e.translations[lang].titre }}</nuxt-link
      >
    </div>
    <h1>
      {{ projet.translations[lang].titre }}
    </h1>
    <div
      v-html="
        $md.render(
          `${
            projet.translations[lang].corps
              ? projet.translations[lang].corps
              : ''
          }`
        )
      "
    ></div>
    <div class="img-ctn">
      <div v-for="(image, id) in projet.images" :key="id">
        <img
          :src="`${$config.CDN}image/fetch/w_1000,h_1000,c_limit/${$config.apiUrl}assets/${image.directus_files_id}`"

          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projet: {},
      prev: "",
      next: "",
      projets: {},
    }
  },
  created() {
    this.projets = this.$store.state.Projets
    this.projet = this.$store.state.Projets.find(
      (x) => x.slug === this.$route.params.slug
    )
    const refProjet = this.projets.find((x) => x.slug === this.projet.slug)
    refProjet.active = true
    this.prev =
      this.$store.state.Projets.find((x) => x.id - 1 === this.projet.id) ||
      this.$store.state.Projets[0]
    this.next =
      this.$store.state.Projets.find((x) => x.id + 1 === this.projet.id) ||
      this.$store.state.Projets[this.$store.state.Projets.length - 1]
  },
  computed: {
    lang: function () {
      return this.$store.state.ui[0].on ? 1 : 0
    },
  },
}
</script>

<style scoped lang="sass">
h1
  text-align: center

.nav
  display: flex
  flex-wrap: wrap
  gap: 0 var(--gutter)
a
  color: var(--noir) !important
  margin: 0
  padding: 0
.img-ctn
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: var(--gutter)

img
  max-height: 95vh
  float: left

.nav *
  background-color: white
  // padding: calc(var(--gutter) / 2)

@for $a from 1 through 8
  $b: $a - 1
  .nav-lien:hover:nth-of-type(#{$b}n)
    color: var(--tag#{$a}) !important
.nuxt-link-active
</style>
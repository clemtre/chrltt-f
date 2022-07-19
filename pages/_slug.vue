<template>
  <div>
    <div class="nav">
      <nuxt-link to="/" class="nav-lien L">←</nuxt-link>
      <nuxt-link class="nav-lien" v-for="e in projets" :key="e.id" :to="e.slug"
        >{{ e.translations[lang].titre }}
      </nuxt-link>
    </div>
    <div class="nav-horizontale L">
      <nuxt-link :to="prev.slug">←</nuxt-link>
      <nuxt-link :to="next.slug">→</nuxt-link>
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
          :src="`${$config.CDN}image/fetch/w_1000,h_1000,c_limit/${$config.API_URL}assets/${image.directus_files_id}`"
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
      this.$store.state.Projets[this.$store.state.Projets.length - 1]
    this.next =
      this.$store.state.Projets.find((x) => x.id + 1 === this.projet.id) ||
      this.$store.state.Projets[0]
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

.nav-horizontale
  width: 900px
  text-align: center
  line-height: 24px !important
.L 
  font-size: 24px
  line-height: 12px
.nav
  display: flex
  flex-wrap: wrap
  align-items: baseline
  gap: 0 var(--gutter)
a
  color: var(--noir)
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

nuxt-link,a 
  text-decoration: none !important
.nuxt-link-active
  color: green !important
  text-decoration: underline !important
</style>

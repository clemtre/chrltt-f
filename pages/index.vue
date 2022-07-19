<template>
  <div>
    <div
      class="nav-intro"
      v-html="$md.render($store.state.Bio.translations[lang].navigation)"
    ></div>
    <site-bio v-show="$store.state.ui[2].on"></site-bio>
    <div class="projet-ctn">
      <ul class="projet" v-for="(projet, ordre) of ProjetsFiltered" :key="ordre">
        <nuxt-link :to="projet.slug">
          <li>
            <p class="titre">{{ projet.translations[lang].titre }}</p>
            <p>
              {{ projet.translations[lang].accroche }}
            </p>
            <!-- <tag-labels :data="projet"></tag-labels> -->
            <img
              class="thumbnail"
              :src="`${$config.CDN}image/fetch/w_1000,h_1000,c_limit/${$config.API_URL}assets/${projet.miniature.filename_disk}`"
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
    }
  },
  computed: {
    ProjetsFiltered: function () {
      if (!this.$store.state.filters.length) {
        return this.$store.state.Projets
      } else {
        const filters = this.$store.state.filters
        function filterByTag(obj) {
          for (const tag of obj.tags) {
            if (filters.includes(tag.tags_CLEAN.id)) {
              return obj
            }
          }
        }
        return this.$store.state.Projets.filter(filterByTag)

        let res = []
        for (const projet of this.$store.state.Projets) {
          for (const tag of projet.tags) {
            if (tag.tags_CLEAN.tag === "Presse") {
              res += projet
            }
          }
        }
        return res
      }
    },
    lang: function () {
      return this.$store.state.ui[0].on ? 0 : 1
    },
  },
}
</script>

<style scoped lang="sass">
.nav-intro >>> *
  width: var(--body)
  max-width: 99%

.projet-ctn
  gap: 10px 20px
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
  margin-left: var(--gutter)
  // margin-right: auto

a
  text-decoration: none

li
  // max-width: min-content

p
  line-height: 18px
  margin: 0
  color: var(--noir)
  // max-width: 400px
  width: auto

.titre
  text-decoration: underline
  margin-bottom: 2px
  color: var(--principale)
  padding-top: var(--gutter)

  
  // img:hover

.thumbnail
  margin-top: var(--gutter)
  // max-height: 400px
  /* width: 100%; */
  object-fit: contain
  /* box-sizing: border-box; */
  /* transition: 0.05s linear; */
  border: 0 solid var(--interaction)
  margin: calc(var(--gutter) * 2)
  margin-left: calc( var(--gutter) * -1 )
  box-sizing: content-box
  width: 500px
.projet:hover
  border: 2px solid var(--noir)
  border-right: 1px solid var(--noir)
  border-left: none !important
  margin: -2px
  margin-left: 0
  // padding-left: 0

// li::before
  /* content: 'pastille'; */

ul
  padding-left: var(--gutter)
  margin: 0

.projet
  // width: calc(min(400px, 100%))
  /* height: 300px; */
  transition: all .2s

// @for $a from 1 through 20
//   .thumbnail:nth-of-type(#{$a}n)
//     max-height:  #{300 + $a * 312312 % 400}px
</style>

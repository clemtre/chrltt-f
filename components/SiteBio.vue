<template>
  <div class="ctn">
    <button id="close" @click="set('bio')">X</button>
    <div
      class="bio"
      v-html="$md.render(`${$store.state.Bio.translations[lang].about}`)"
    ></div>
    <div class="img">
      <div>
        <img
          :src="`${$config.API_URL}assets/${$store.state.Bio.photo_presentation.filename_disk}?width=1000`"
          alt=""
        />
        <h3>{{ $store.state.Bio.photo_presentation_credits }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getName: "getName",
    }),
    lang: function () {
      return this.$store.state.ui[0].on ? 0 : 1;
    },
  },
  methods: {
    set: function (arg) {
      this.$store.commit("SWITCH", this.getName(arg));
    },
  },
};
</script>

<style lang="sass" scoped>
.ctn
  margin-top: var(--gutter)
  margin-bottom: var(--gutter)
  max-width: calc( 100%)
  display: flex
  width: fit-content
  flex-direction: row
  /* flex-wrap: wrap; */
  border: 1px solid black
  border-top: 2px solid black
  border-bottom: 2px solid black
  border-left: none
  padding: var(--gutter)
  margin-top: calc(var(--gutter) * 3)
  padding-left: 0
  gap: calc(var(--gutter))
  @media screen and (max-width: 1020px)
    flex-wrap: wrap



#close
  background: lightgrey
  border: none
  position: absolute
  left: var(--gutter)
  transform: translateY(-30px)
  background-color: white
  border-right: 1px solid black
  border-top: 2px solid black
  width: 20px
  height: 20px
  &:hover
    cursor: pointer
/* right: var(--gutter); */
  /* top: var(--gutter) */

.bio
  width: var(--body)
  /* padding-right: calc(var(--gutter) * 16); */

img
  max-height: 70vh

.img
  max-width: 600px

h3
  margin: 0
  font-size: 12px
  /* margin-left: 900px; */

.force-left
  float: left

.bio >>> hr
  /* margin-top: 20px; */
  border-top: 0.5px solid pink !important
  width: 100%

hr,
.bio >>> hr

  width: calc(100% - var(--gutter))
  margin: 10px
  margin-left: 0
  margin-right: 0
</style>
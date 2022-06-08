<template>
  <div class="ctn" v-if="this.$route.path === '/'">
    <div class="tags-ctn">
      <button
        v-for="tag in $store.state.Tags"
        :key="tag.id"
        @click="setTag(tag)"
        :class="tag.isSelected ? 'active' : ''"
      >
        {{ lang ? tag.tag : tag.tag_en }}
      </button>
      <button class="close" v-if="$store.state.filters.length" @click="remTags">
        x
      </button>
    </div>
    <div class="tags-ctn placeholder">
      <button
        v-for="tag in $store.state.Tags"
        :key="tag.id"
        @click="setTag(tag)"
        :class="tag.isSelected ? 'active' : ''"
      >
        {{ lang ? tag.tag : tag.tag_en }}
      </button>
      <button class="close" v-if="$store.state.filters.length" @click="remTags">
        x
      </button>
    </div>
    <div class="meta-ctn">
      <button @click="set('anglais')">
        {{ this.getName("anglais").on ? "FR" : "EN" }}
      </button>
      <button @click="set('bio')">
        {{ this.getName("anglais").on ? "à propos" : "about" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  methods: {
    remTags: function () {
      this.$store.commit("REMOVE_TAGS")
    },
    setTag: function (arg) {
      this.$store.commit("SWITCH_TAG", arg)
    },
    set: function (arg) {
      this.$store.commit("SWITCH", this.getName(arg))
    },
  },
  computed: {
    ...mapGetters({
      getName: "getName",
    }),
    lang: function () {
      return this.$store.state.ui[0].on ? 1 : 0
    },
  },
}
</script>

<style scoped lang="sass">
.ctn
  margin-bottom: var(--gutter)

.active
  background-color: pink

.tags-ctn
  display: flex
  flex-direction: row
  flex-wrap: wrap
  width: fit-content
  position: fixed
  top: calc(var(--gutter)*2)

  & button:hover
    background-color: cornflowerblue

.placeholder
  position: static
  pointer-events: none
  opacity: 0

button
  border-radius: 0

  height: calc( var(--gutter) * 4 )
    // background-color: white

.meta-ctn
  display: flex

.tags-cor
  margin-top: 0
.close
  // transform: translateY(-50%)

$width: 5px
@for $a from 1 through 12
  .tags-ctn button:hover:nth-of-type(#{$a})
    background-color: var(--tag#{$a})
    border: 1px solid var(--tag#{$a})

  .active:nth-of-type(#{$a})
    background-color: var(--tag#{$a})
</style>
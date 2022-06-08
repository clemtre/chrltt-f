<template>
  <div>
    <div v-for="e of a" :key="e">
      {{ e.tags_CLEAN.id }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    a() {
      const tags = []
      const tagsData = this.data.tags
      let counter = 0
      for (const tag of tagsData) {
        tags[counter] = tag
        counter++
      }
      return tags
    },
    b() {
      const tags = []
      const res = []
      const tagsData = this.data.tags
      let counter = 0
    // const refProjet = this.projets.find((x) => x.slug === this.projet.slug)
      
      for (const tag in tagsData) {
          console.log(this.$store.state.filters)
        //   tag.find()
        tags[counter] = tag
        counter++
      }
      return tags
    },
  },
}
</script>

<style>
</style>
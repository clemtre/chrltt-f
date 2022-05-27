<template>
  <div>
    <nuxt-link :to="prev.slug"><- {{prev.translations[lang].titre}}</nuxt-link><br>
    <nuxt-link :to="next.slug">{{next.translations[lang].titre}} -></nuxt-link><br>
    <nuxt-link to="/">maison</nuxt-link>
    <h1>
      {{ projet.translations[lang].titre }}
    </h1>
    <div v-html="$md.render(`${projet.translations[lang].corps}` )"></div>
    <div v-for="(image, id) in projet.images" :key="id">
      <img :src="`${$config.apiUrl}assets/${image.directus_files_id}`" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      projet: {
      },
      prev : '',
      next : ''

    }
  },
  created() {
    this.projet = this.$store.state.Projets.find(
      (x) => x.slug === this.$route.params.slug
    );
    this.prev = this.$store.state.Projets.find((x) => x.id - 1 === this.projet.id ) || this.$store.state.Projets[0]
    this.next = this.$store.state.Projets.find((x) => x.id + 1 === this.projet.id ) || this.$store.state.Projets[this.$store.state.Projets.length - 1]
  },
  computed:{
    lang : function(){
      return this.$store.state.ui[0].on ? 1 : 0
    }
  }
};
</script>

<style>
</style>
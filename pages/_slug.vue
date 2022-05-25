<template>
  <div>
    <nuxt-link to="/">maison</nuxt-link>
    <h1>
      {{ projet.translations[0].titre }}
    </h1>
    <p>
      {{ projet.translations[0].corps }}

    </p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      projet: {
      }

    }
  },
  created() {
    this.projet = this.$store.state.Projets.find(
      (x) => x.slug === this.$route.params.slug
    );
  },
};
</script>

<style>
</style>
<template>
  <div>
    <ul v-for="projet in $store.state.Projets" :key="projet.id">
      <li>
        <nuxt-link :to="projet.slug">

          {{projet.translations[0].titre}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

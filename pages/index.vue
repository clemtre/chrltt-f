<template>
  <div>
    <div class="projet-ctn">
    <ul class="projet" v-for="projet in $store.state.Projets" :key="projet.id">
        <nuxt-link :to="projet.slug">
      <li>
          <p class="titre">{{projet.translations[0].titre}}
          </p>
          <p>
          {{projet.translations[0].accroche}}
          </p>
          <br>
          <img class="thumbnail" :src="`${$config.apiUrl}assets/${projet.miniature.filename_disk}`" alt="">
      </li>
        </nuxt-link>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.projet-ctn {
  display:flex;
  flex-wrap: wrap;

}
  .thumbnail {
    max-width: 100%;
    max-height: 30vh;
    box-sizing: border-box;
}
  .thumbnail:hover {
    border: 10px solid red;
  }
  a{
    text-decoration: none;
  }
  p {
    margin:0;
    color:black;
  }
  .titre {
    text-decoration: underline;
  }
  img:hover{
    max-height: 40vh;
  }
</style>
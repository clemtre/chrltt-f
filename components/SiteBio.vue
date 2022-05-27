<template>
  <div class="ctn">
      <hr>
      <div class="bio" v-html="$md.render(`${$store.state.Bio.translations[lang].about}` )">
    </div>
    <div class="img">

        <img :src="`${$config.apiUrl}assets/${$store.state.Bio.photo_presentation.filename_disk}`" alt="" >
    <h3>{{$store.state.Bio.photo_presentation_credits}}</h3>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
computed:{
    lang: function () {
      return this.$store.state.ui[0].on ? 1 : 0;
    }
}
}
</script>

<style scoped>
.ctn {
    margin-top: var(--gutter);
    margin-bottom: var(--gutter);
    display: inline-block;
    width: 100%;
}
.bio {
    float: left;
}
img {
    max-width: 600px;
    /* float: right; */
}
h3 {
    margin:0;
    font-size: 12px;
    margin-left: 900px;
}

</style>
<template>
  <div class="ctn">
    <div
      class="bio"
      v-html="$md.render(`${$store.state.Bio.translations[lang].about}`)"
    ></div>
    <div class="img">
      <div>
        <img
          :src="`${$config.apiUrl}assets/${$store.state.Bio.photo_presentation.filename_disk}?width=1000`"
          alt=""
        />
        <h3>{{ $store.state.Bio.photo_presentation_credits }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lang: function () {
      return this.$store.state.ui[0].on ? 1 : 0;
    },
  },
};
</script>

<style scoped>
.ctn {
  margin-top: var(--gutter);
  margin-bottom: var(--gutter);
  display: inline-block;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  border:  1px solid black;
  border-left: none;
  padding: 10px;
  padding-left: 0;
}
.bio {
  float: left;
}
.img {
  max-width: 600px;
  float: left;
}
h3 {
  margin: 0;
  font-size: 12px;
  /* margin-left: 900px; */
}
.force-left {
  float: left;
}
hr {
  /* margin-top: 20px; */
  width: 100%;
}
hr,
.bio >>> hr {
  border: none;
  border-top: 0.5px solid black;
}
.bio >>> hr {
  width: calc(100% - var(--gutter));
  margin: 10px;
  margin-left: 0;
  margin-right: 0;
}
</style>
<template>
  <div class="ctn">
    <hr />
    <p>
      &copy;2022 &mdash;
      <a
        target="_blank"
        :href="`https://www.instagram.com/${$store.state.Bio.instagram}`"
        >@{{ $store.state.Bio.instagram }}</a
      >
      &mdash; {{ $store.state.Bio.email }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: black;
}
p {
  float: right;
  margin: 0;
  margin-right: var(--gutter);
  text-align: right;
}
.ctn {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  padding-top: 100px;
  padding-bottom: calc(var(--gutter)*2);
}
</style>
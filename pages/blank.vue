<template>
  <div>
      <tool-bar/>
      <p>{{$store.state.ui[0].on}}</p>
      <ul v-for="(elem, id) in $store.state" :key="id">
        <li>{{elem}}</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
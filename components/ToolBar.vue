<template>
  <div class="ctn">
    <button @click="set('anglais')">
      {{ this.getName("anglais").on ? "FR" : "EN" }}
    </button>
      <button @click="set('bio')">
        {{ this.getName("anglais").on ? "à propos" : "about" }}
      </button>
    <div class="tags-ctn" v-if="this.$route.path === '/'">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    remTags: function () {
      this.$store.commit("REMOVE_TAGS");
    },
    setTag: function (arg) {
      this.$store.commit("SWITCH_TAG", arg);
    },
    set: function (arg) {
      this.$store.commit("SWITCH", this.getName(arg));
    },
  },
  computed: {
    ...mapGetters({
      getName: "getName",
    }),
    lang: function () {
      return this.$store.state.ui[0].on ? 1 : 0;
    },
  },
};
</script>

<style>
.active {
  background-color: pink;
}
.tags-ctn {
  display: flex;
  width: fit-content;
}
button {
  border-radius: 0;
  background-color: white;
}
.close {
  transform: translateY(-50%);
}
</style>
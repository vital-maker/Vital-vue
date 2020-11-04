<template>
  <abbr :title="title" :class="[initialismClass]"></abbr>
</template>

<script>
export default {
  name: 'VTAbbr',
  props: {
    title: {
      type: String,
      default: null
    },
    initialism: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    initialismClass: function () {
      if (this.initialism) {
        return 'initialism'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

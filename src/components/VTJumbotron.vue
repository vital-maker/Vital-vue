<template>
  <div class="jumbotron" :class="[jumbotronFluidClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTJumbotron',
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    jumbotronFluidClass: function () {
      if (this.fluid) {
        return 'jumbotron-fluid'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

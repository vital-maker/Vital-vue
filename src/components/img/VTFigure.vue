<template>
  <figure :class="[figureClass]">
    <slot></slot>
  </figure>
</template>

<script>
export default {
  name: 'VTFigure',
  props: {
    figure: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    figureClass: function () {
      if (this.figure) {
        return 'figure'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

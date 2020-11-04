<template>
  <footer :class="[blockquoteFooterClass]">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'VTFooter',
  props: {
    blockquote: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    blockquoteFooterClass: function () {
      if (this.blockquote) {
        return 'blockquote-footer'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

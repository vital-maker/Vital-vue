<template>
  <thead :class="[theadDarkClass,theadLightClass,textStyleValue]">
  <slot></slot>
  </thead>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTThead',
  mixins: [mixins],
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    theadDarkClass: function () {
      if (this.dark) {
        return 'thead-dark'
      } else {
        return null
      }
    },
    theadLightClass: function () {
      if (this.light) {
        return 'thead-light'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div
    class="container"
    :class="[
      containerSm,
      containerMd,
      containerLg,
      containerXl,
      responsiveClass,
      responsiveSmClass,
      responsiveMdClass,
      responsiveLgClass,
      responsiveXlClass
      ]">
    <slot></slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTContainer',
  mixins: [mixins],
  props: {
    sm: {
      type: Boolean,
      default: false
    },
    md: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerSm: function () {
      if (this.sm) {
        return 'container-sm'
      }
      return null
    },
    containerMd: function () {
      if (this.md) {
        return 'container-md'
      }
      return null
    },
    containerLg: function () {
      if (this.lg) {
        return 'container-lg'
      }
      return null
    },
    containerXl: function () {
      if (this.xl) {
        return 'container-xl'
      }
      return null
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <ul
    :class="[
      unStyledClass,
      inlineClass,
      groupClass,
      groupFlushClass,
      horizontalClass,
      groupHorizontalClass
      ]" class="list-group">
    <slot></slot>
  </ul>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTUl',
  mixins: [mixins],
  props: {
    unStyled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    },
    groupFlush: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {
    unStyledClass: function () {
      if (this.unStyled) {
        return 'list-unstyled'
      } else {
        return null
      }
    },
    inlineClass: function () {
      if (this.inline) {
        return 'list-inline'
      } else {
        return null
      }
    },
    groupClass: function () {
      if (this.group) {
        return 'list-group'
      } else {
        return null
      }
    },
    groupFlushClass: function () {
      if (this.groupFlush) {
        return 'list-group-flush'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <table
    :class="[
      tableClass,
      tableDarkClass,
      tableStripedClass,
      tableBorderedClass,
      borderlessClass,
      tableHoverClass,
      tableSmClass,
      textStyleValue
      ]">
    <caption v-if="caption">{{ captionText }}</caption>
    <slot></slot>
  </table>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTTable',
  mixins: [mixins],
  props: {
    table: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    caption: {
      type: Boolean,
      default: false
    },
    captionText: {
      type: String,
      default: null
    }
  },
  computed: {
    tableClass: function () {
      if (this.table) {
        return 'table'
      } else {
        return null
      }
    },
    tableDarkClass: function () {
      if (this.dark) {
        return 'table-dark'
      } else {
        return null
      }
    },
    tableStripedClass: function () {
      if (this.striped) {
        return 'table-striped'
      } else {
        return null
      }
    },
    tableBorderedClass: function () {
      if (this.bordered) {
        return 'table-bordered'
      } else {
        return null
      }
    },
    borderlessClass: function () {
      if (this.borderless) {
        return 'table-borderless'
      } else {
        return null
      }
    },
    tableHoverClass: function () {
      if (this.hover) {
        return 'table-hover'
      } else {
        return null
      }
    },
    tableSmClass: function () {
      if (this.sm) {
        return 'table-sm'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

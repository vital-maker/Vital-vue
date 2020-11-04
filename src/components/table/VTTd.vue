<template>
  <td :class="[TrTdTableColorClass,TrTdBgColorClass,textStyleValue]">
    <slot></slot>
  </td>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTTd',
  mixins: [mixins],
  props: {
    table: {
      type: String,
      default: null
    },
    bg: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      tableBgOptions: ['active', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      bgOptions: ['primary', 'success', 'danger', 'warning', 'info']
    }
  },
  computed: {
    TrTdTableColorClass: function () {
      if (this.tableBgOptions.includes(this.table)) {
        return `table-${this.table}`
      } else {
        return null
      }
    },
    TrTdBgColorClass: function () {
      if (this.bgOptions.includes(this.bg)) {
        return `bg-${this.bg}`
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

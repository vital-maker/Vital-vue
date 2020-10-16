<template>
  <span :class="[btnBadge]"><slot>{{ value }}</slot></span>
</template>

<script>
export default {
  name: 'VTSpan',
  props: {
    badge: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: '0'
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>

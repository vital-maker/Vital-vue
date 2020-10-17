<template>
  <span :class="[btnBadge]"><slot>{{ text }}</slot></span>
</template>

<script>
export default {
  name: 'VTSpan',
  props: {
    badge: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'span'
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>

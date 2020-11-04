<template>
  <div class="card-footer" :class="[textStyleValue,titleMuted,backGroundColor,borderClass]">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTCardFooter',
  mixins: [mixins],
  props: {
    text: {
      type: String,
      default: 'Card footer'
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <a
    :href="href"
    :class="[
      btnColor,
      btnSize,
      btnBlock,
      btnRounded,
      btnBadge,
      dropdownLink,
      typeAlert,
      activeCardLink,
      activeClass,
      disableClass,
      groupActionClass,
      groupItemColorClass
      ]">
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTLink',
  mixins: [mixins],
  props: {
    text: {
      type: String,
      default: 'link'
    },
    href: {
      type: String,
      default: '#'
    },
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>

</style>

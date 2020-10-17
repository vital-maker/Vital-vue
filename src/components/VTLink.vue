<template>
  <a :href="href" :class="[btnColor,btnSize,btnBlock,btnRounded,dropdownLink,btnBadge,typeAlert,activeCardLink]">
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
export default {
  name: 'VTLink',
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
  },
  data () {
    return {}
  },
  computed: {

  }
}
</script>

<style scoped>

</style>

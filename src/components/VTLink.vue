<template>
  <a :href="to" :class="[btnColor,btnSize,btnBlock,btnRounded,dropdownLink,btnBadge,typeAlert]">
    <slot>{{ value }}</slot>
  </a>
</template>

<script>
export default {
  name: 'VTLink',
  props: {
    dropdown: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: 'link'
    },
    to: {
      type: String,
      default: '#'
    },
    href: {
      type: String,
      default: ''
    },
    alert: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {
    typeAlert: function () {
      let alert = ''
      switch (this.alert) {
        case true:
          alert = 'alert-link'
          break
        default:
          alert = null
      }
      return alert
    },

    dropdownLink: function () {
      let dropDown = ''
      switch (this.dropdown) {
        case true:
          dropDown = 'dropdown-item'
          break
        default:
          dropDown = null
      }
      return dropDown
    }
  }
}
</script>

<style scoped>

</style>

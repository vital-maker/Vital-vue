<template>
  <div
    class="dropdown"
    :class="[
      btnGroupClass,
      dropUpClass,
      dropRightClass,
      dropLeftClass
      ]" role="group">
    <slot name="VTToggle"></slot>
    <div class="dropdown-menu"
         :class="[
           dropdownRightClass,
           dropdownSmClass,
           dropdownMdClass,
           dropdownLgClass,
           dropdownXlClass
           ]">
      <slot name="VTDropDownItem"></slot>
    </div>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTButtonDropDown',
  mixins: [mixins],
  props: {
    btnGroup: {
      type: Boolean,
      default: false
    },
    dropUp: {
      type: Boolean,
      default: false
    },
    dropRight: {
      type: Boolean,
      default: false
    },
    dropLeft: {
      type: Boolean,
      default: false
    },
    dropdownRight: {
      type: Boolean,
      default: false
    },
    dropdownSm: {
      type: String,
      default: null
    },
    dropdownMd: {
      type: String,
      default: null
    },
    dropdownLg: {
      type: String,
      default: null
    },
    dropdownXl: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      dropdownPosition: ['left', 'right']
    }
  },
  computed: {
    btnGroupClass: function () {
      if (this.btnGroup) {
        return 'btn-group'
      } else {
        return null
      }
    },
    dropUpClass: function () {
      if (this.dropUp) {
        return 'dropup'
      } else {
        return null
      }
    },
    dropRightClass: function () {
      if (this.dropRight) {
        return 'dropright'
      } else {
        return null
      }
    },
    dropLeftClass: function () {
      if (this.dropLeft) {
        return 'dropleft'
      } else {
        return null
      }
    },
    dropdownRightClass: function () {
      if (this.dropdownRight) {
        return 'dropdown-menu-right'
      } else {
        return null
      }
    },
    dropdownSmClass: function () {
      if (this.dropdownPosition.includes(this.dropdownSm)) {
        return `dropdown-menu-sm-${this.dropdownSm}`
      } else {
        return null
      }
    },
    dropdownMdClass: function () {
      if (this.dropdownPosition.includes(this.dropdownMd)) {
        return `dropdown-menu-md-${this.dropdownMd}`
      } else {
        return null
      }
    },
    dropdownLgClass: function () {
      if (this.dropdownPosition.includes(this.dropdownLg)) {
        return `dropdown-menu-lg-${this.dropdownLg}`
      } else {
        return null
      }
    },
    dropdownXlClass: function () {
      if (this.dropdownPosition.includes(this.dropdownXl)) {
        return `dropdown-menu-xl-${this.dropdownXl}`
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

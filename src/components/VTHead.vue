<script>
import mixins from '@/data'
import { h } from 'vue'

export default {
  name: 'VTHead',
  mixins: [mixins],
  render () {
    return h(this.headTagsTarget,
      {
        class: [
          this.fontBold,
          this.fontItalic,
          this.fontLight,
          this.fontBolder,
          this.backGroundColor,
          this.textStyleValue,
          this.displayClass,
          this.alertHeadingClass,
          this.dropdownHeaderClass
        ]
      }, this.$slots.default ? this.$slots : this.text)
  },
  props: {
    alertHeading: {
      type: Boolean,
      default: false
    },
    dropdownHeader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    alertHeadingClass: function () {
      if (this.alertHeading) {
        return 'alert-heading'
      } else {
        return null
      }
    },
    dropdownHeaderClass: function () {
      if (this.dropdownHeader) {
        return 'dropdown-header'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

<script>
import { h } from 'vue'

export default {
  name: 'VTHead',
  render () {
    return h(this.headTagsTarget,
      {
        class: [
          this.fontBold,
          this.fontItalic,
          this.fontLight,
          this.fontBolder,
          this.backGroundColor,
          this.textStyleValue
        ]
      }, this.$slots.default ? this.$slots : this.text)
  }
}
</script>

<style scoped>

</style>

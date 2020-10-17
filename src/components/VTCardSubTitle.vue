<script>
import { h } from 'vue'

export default {
  name: 'VTCardSubTitle',
  render () {
    return h(this.tagTarget, { class: ['card-subtitle', this.titleMuted] }, this.$slots.default ? this.$slots : this.text)
  },
  props: {
    text: {
      type: String,
      default: 'Card subtitle'
    }
  },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style scoped>

</style>

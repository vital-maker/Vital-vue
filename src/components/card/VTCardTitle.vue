<script>
import mixins from '@/data'
import { h } from 'vue'

export default {
  name: 'VTCardTitle',
  mixins: [mixins],
  render () {
    return h(this.tagTarget, { class: 'card-title' }, this.$slots.default ? this.$slots : this.text)
  },
  props: {
    tag: {
      type: String,
      default: 'h5'
    },
    text: {
      type: String,
      default: 'Card title'
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

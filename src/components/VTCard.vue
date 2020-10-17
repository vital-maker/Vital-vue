<script>
import { h } from 'vue'

export default {
  name: 'VTCard',
  render () {
    return h(this.cardTag, { class: ['card', this.gridSystem] }, this.$slots)
  },
  props: {
    tag: {
      type: String,
      default: 'article'
    }
  },
  data () {
    return {
      cartTagTarget: ['article', 'div']
    }
  },
  computed: {
    cardTag: function () {
      if (this.cartTagTarget.includes(this.tag)) {
        return this.tag
      } else {
        return 'article'
      }
    }
  }
}
</script>

<style scoped>

</style>

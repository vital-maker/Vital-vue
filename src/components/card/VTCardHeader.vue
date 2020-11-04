<script>
import { h } from 'vue'
import mixins from '@/data'

export default {
  name: 'VTCardHeader',
  mixins: [mixins],
  render () {
    return h(this.cardHead,
      {
        class: ['card-header', this.backGroundColor, this.borderClass]
      },
      this.$slots.default ? this.$slots : this.text
    )
  },
  data () {
    return {
      cardHeadTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']
    }
  },
  props: {
    text: {
      type: String,
      default: 'Featured'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    cardHead: function () {
      if (this.cardHeadTags.includes(this.tag)) {
        return this.tag
      } else {
        return 'div'
      }
    }
  }
}
</script>

<style scoped>

</style>

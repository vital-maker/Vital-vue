<script>
import mixins from '@/data'
import { h } from 'vue'

export default {
  name: 'VTImg',
  render () {
    return h('img', {
      class: [
        this.imgFluidClass,
        this.imgThumbnailClass,
        this.roundedClass,
        this.floatClass,
        this.roundedBottomClass,
        this.roundedLeftClass,
        this.roundedTopClass,
        this.roundedRightClass,
        this.roundedCircleClass,
        this.figureImgClass,
        this.imgTopClass,
        this.cardImgClass,
        this.alignItemsClass,
        this.alignItemsGridClass,
        this.alignContentClass,
        this.alignContentGridClass,
        this.alignSelfClass,
        this.alignSelfGridClass
      ],
      src: this.src,
      alt: this.alt,
      title: this.title
    })
  },
  mixins: [mixins],
  props: {
    src: {
      type: String,
      default: null,
      require: true
    },
    alt: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    imgFluid: {
      type: Boolean,
      default: false
    },
    imgThumbnail: {
      type: Boolean,
      default: false
    },
    figureImg: {
      type: Boolean,
      default: false
    },
    imgTop: {
      type: Boolean,
      default: false
    },
    cardImg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imgFluidClass: function () {
      if (this.imgFluid) {
        return 'img-fluid'
      } else {
        return null
      }
    },
    imgThumbnailClass: function () {
      if (this.imgThumbnail) {
        return 'img-thumbnail'
      } else {
        return null
      }
    },
    figureImgClass: function () {
      if (this.figureImg) {
        return 'figure-img'
      } else {
        return null
      }
    },
    imgTopClass: function () {
      if (this.imgTop) {
        return 'card-img-top'
      } else {
        return null
      }
    },
    cardImgClass: function () {
      if (this.cardImg) {
        return 'card-img'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>

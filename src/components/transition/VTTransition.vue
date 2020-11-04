<template>
  <transition ref="animate" @enter="enterAction" @leave="leaveAction">
    <slot></slot>
  </transition>
</template>

<script>
import mixins from '@/data'
export default {
  name: 'VTTransition',
  mixins: [mixins],
  props: {
    name: {
      type: String,
      default: null
    },
    animation: {
      type: String,
      default: null
    },
    enter: {
      type: String,
      default: null
    },
    leave: {
      type: String,
      default: null
    },
    customClass: {
      type: Array,
      default: () => {
        return []
      }
    },
    duration: {
      type: [String, Number, Object],
      default: 1000,
      validator (value) {
        return Number(value)
      }
    }
  },
  methods: {
    action: function (e, animate) {
      if (this.animation !== null) {
        if (this.allAnimation.includes(this.animation)) {
          e.classList.add(this.animation)
          e.style.animationDuration = this.duration + 'ms'
          setTimeout(() => {
            e.classList.remove(this.animation)
            e.style.animationDuration = ''
          }, this.duration)
        } else {
          console.error(`This animation ${this.animation} not found. You can custom this animation by yourself or using this https://cssanimate.com/ | https://animista.net/ to help you and use it`)
        }
      } else {
        if (this.allAnimation.includes(animate)) {
          e.classList.add(animate)
          e.style.animationDuration = this.duration + 'ms'
          e.style.animationTimingFunction = 'ease-in-out'
          setTimeout(() => {
            e.classList.remove(animate)
            e.style.animationDuration = ''
          }, this.duration)
        } else {
          console.error(`This animation ${this.animation} not found. You can custom this animation by yourself or using this https://cssanimate.com/ | https://animista.net/ to help you and use it`)
        }
      }
    },
    enterAction: function (e) {
      this.action(e, this.enter)
    },
    leaveAction: function (e) {
      this.action(e, this.leave)
    }
  },
  data () {
    return {
      animationOptions: [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shakeX',
        'shakeY',
        'headShake',
        'heartBeat',
        'swing',
        'tada',
        'wobble',
        'jello',
        'backInDown',
        'backInLeft',
        'backInRight',
        'backInUp',
        'backOutDown',
        'backOutLeft',
        'backOutRight',
        'backOutUp',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft',
        'flip',
        'flipInX',
        'flipInY',
        'flipOutX',
        'flipOutY',
        'lightSpeedInRight',
        'lightSpeedInLeft',
        'lightSpeedOutRight',
        'lightSpeedOutLeft',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight',
        'hinge',
        'jackInTheBox',
        'rollIn',
        'rollOut',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
        'zoomOut',
        'zoomOutDown',
        'zoomOutLeft',
        'zoomOutRight',
        'zoomOutUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',
        'slideOutDown',
        'slideOutLeft',
        'slideOutRight',
        'slideOutUp'
      ]
    }
  },
  computed: {
    allAnimation: function () {
      return [...this.customClass, ...this.animationOptions]
    }
  }
}
</script>

<style scoped lang="scss">
//@import "src/assets/css/animate.css";
</style>

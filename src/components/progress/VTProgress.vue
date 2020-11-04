<template>
  <div class="VTProgress"
       :class="[
       backGroundColor
       ]"
       :style="{'height': height + 'px'}">
    <slot>
      <VTProgressBar
        :bg-color="progressBarBg"
        :bold="bold"
        :bolder="bolder"
        :light="light"
        :lighter="lighter"
        :italic="italic"
        :normal="normal"
        :text-style="textStyle"
        :stripe-animate="stripeAnimate"
        :progress-top="progressTop"
        :progress-bottom="progressBottom"
        :stripe="stripe"
        :value="value"
        :value-min="valueMin"
        :value-max="valueMax"/>
    </slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTProgress',
  mixins: [mixins],
  props: {
    valueMin: {
      type: [String, Number],
      default: null,
      require: true,
      validator: (value) => {
        return String(value)
      }
    },
    valueMax: {
      type: [String, Number],
      default: null,
      require: true,
      validator: (value) => {
        return String(value)
      }
    },
    value: {
      type: [String, Number],
      default: null,
      require: true,
      validator: (value) => {
        return String(value)
      }
    },
    progressBarBg: {
      type: String,
      default: null
    },
    progressTop: {
      type: Boolean,
      default: false
    },
    progressBottom: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: null,
      require: true,
      validator: (value) => {
        return String(value)
      }
    },
    stripeAnimate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.VTProgress {
  display: flex;
  height: 1rem;
  /*overflow: hidden;*/
  line-height: 0;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem;
}

.VTProgress .VTProgressBar:first-child {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.VTProgress .VTProgressBar:last-child {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
}
</style>

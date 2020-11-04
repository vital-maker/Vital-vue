<template>
  <div
    class="VTProgressBar"
    :class="[
      backGroundColor,
      textStyleValue,
      fontBold,
      fontItalic,
      fontBolder,
      fontLight,
      fontLighter,
      fontNormal,
      progressTop === true ? 'VTProgressBarTop' : '',
      progressBottom === true ? 'VTProgressBarBottom' : '',
      stripe === true ? 'VTProgressBarStripe' : '',
      stripeAnimate === true ? 'progressAnimate' : ''
      ]" :style="{'width': valueProgress + '%'}">
    <span :class="[progressTop === true ? 'top' : '',progressBottom === true ? 'bottom' : '']">
      <slot>{{ valueProgress + ' %' }}</slot>
    </span>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTProgressBar',
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
    stripeAnimate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    valueProgress: function () {
      if (Number(this.value) < (Number(this.valueMax) - Number(this.valueMin))) {
        return ((Number(this.value) * 100) / (Number(this.valueMax) - Number(this.valueMin))).toFixed(1)
      } else {
        return (100).toFixed(1)
      }
    }
  }
}
</script>

<style scoped>
.VTProgressBar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*overflow: hidden;*/
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: all .6s ease;
  /*border-radius: .25rem;*/
  /*padding: 0 10px;*/
}

.VTProgressBarStripe {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.VTProgressBar span {
  padding: 0 10px;
}

.VTProgressBarTop {
  justify-content: flex-start;
}

.VTProgressBarBottom {
  justify-content: flex-end;
}

.VTProgressBar span.top {
  margin-top: -10px;
}

.VTProgressBar span.bottom {
  margin-bottom: -10px;
}

.progressAnimate {
  animation: progressBarAnimate 1s linear infinite;
}

@keyframes progressBarAnimate {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>

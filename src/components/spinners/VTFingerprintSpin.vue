<template>
  <div ref="fingerprint" class="fingerprint">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTFingerprintSpin',
  props: {
    color: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: null
    },
    duration: {
      type: String,
      default: null
    }
  },
  mounted () {
    const el = this.$refs.fingerprint
    const children = el.children
    if (this.width !== null) {
      el.style.width = this.width + 'px'
      el.style.height = this.width + 'px'
      children.forEach((item, index) => {
        item.style.width = `calc(${Number(this.width)}px / 9 + ${index} * ${Number(this.width)}px / 9)`
        item.style.height = `calc(${Number(this.width)}px / 9 + ${index} * ${Number(this.width)}px / 9)`
      })
    }
    if (this.color !== null) {
      children.forEach((item) => {
        item.style.borderTopColor = this.color
      })
    }
    if (this.duration !== null) {
      children.forEach((item, index) => {
        item.style.animationDuration = this.duration + 's'
        item.style.animationDelay = `calc(${(Number(this.duration) * 0.05) / 1.5}s * ${index + 1})`
      })
    }
  }
}
</script>

<style scoped>
/*
 * fingerprint
 */
.fingerprint {
  height: 64px;
  width: 64px;
  padding: 2px;
  overflow: hidden;
  position: relative;
}

.fingerprint div {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #ffffff;
  animation: fingerprintLoad 1500ms cubic-bezier(0.680, -0.750, 0.265, 1.750) infinite forwards;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.fingerprint div:nth-child(1) {
  height: calc(60px / 9 + 0 * 60px / 9);
  width: calc(60px / 9 + 0 * 60px / 9);
  animation-delay: calc(50ms * 1);
}

.fingerprint div:nth-child(2) {
  height: calc(60px / 9 + 1 * 60px / 9);
  width: calc(60px / 9 + 1 * 60px / 9);
  animation-delay: calc(50ms * 2);
}

.fingerprint div:nth-child(3) {
  height: calc(60px / 9 + 2 * 60px / 9);
  width: calc(60px / 9 + 2 * 60px / 9);
  animation-delay: calc(50ms * 3);
}

.fingerprint div:nth-child(4) {
  height: calc(60px / 9 + 3 * 60px / 9);
  width: calc(60px / 9 + 3 * 60px / 9);
  animation-delay: calc(50ms * 4);
}

.fingerprint div:nth-child(5) {
  height: calc(60px / 9 + 4 * 60px / 9);
  width: calc(60px / 9 + 4 * 60px / 9);
  animation-delay: calc(50ms * 5);
}

.fingerprint div:nth-child(6) {
  height: calc(60px / 9 + 5 * 60px / 9);
  width: calc(60px / 9 + 5 * 60px / 9);
  animation-delay: calc(50ms * 6);
}

.fingerprint div:nth-child(7) {
  height: calc(60px / 9 + 6 * 60px / 9);
  width: calc(60px / 9 + 6 * 60px / 9);
  animation-delay: calc(50ms * 7);
}

.fingerprint div:nth-child(8) {
  height: calc(60px / 9 + 7 * 60px / 9);
  width: calc(60px / 9 + 7 * 60px / 9);
  animation-delay: calc(50ms * 8);
}

.fingerprint div:nth-child(9) {
  height: calc(60px / 9 + 8 * 60px / 9);
  width: calc(60px / 9 + 8 * 60px / 9);
  animation-delay: calc(50ms * 9);
}

@keyframes fingerprintLoad {
  100% {
    transform: rotate(360deg);
  }
}
</style>

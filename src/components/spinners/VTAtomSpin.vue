<template>
  <div ref="atom" class="atom">
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div>&#9679;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTAtomSpin',
  props: {
    color: {
      type: String,
      default: null
    },
    colorFirst: {
      type: String,
      default: null
    },
    colorSecond: {
      type: String,
      default: null
    },
    colorThird: {
      type: String,
      default: null
    },
    colorBall: {
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
    const el = this.$refs.atom
    const children = el.children[0].children
    children[3].style.color = this.color === null ? this.colorBall : this.color
    children[0].style.borderLeftColor = this.color === null ? this.colorFirst : this.color
    children[1].style.borderLeftColor = this.color === null ? this.colorSecond : this.color
    children[2].style.borderLeftColor = this.color === null ? this.colorThird : this.color
    if (this.width !== null) {
      el.style.width = this.width + 'px'
      el.style.height = this.width + 'px'
      children[3].style.fontSize = `calc(${this.width}px * 0.24)`
      for (let i = 0; i < 3; i++) {
        children[i].style.borderLeftWidth = `calc(${this.width}px / 25)`
        children[i].style.borderTopWidth = `calc(${this.width}px / 25)`
      }
    }
    if (this.duration !== null) {
      for (let i = 0; i < 3; i++) {
        children[i].style.animationDuration = this.duration + 's'
      }
    }
    // console.log(this.$refs.atom.children[0].children)
  }
}
</script>

<style scoped>
/*
 * atom
 */
.atom {
  height: 60px;
  width: 60px;
  overflow: hidden;
}

.atom > div:nth-child(1) {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
}

.atom > div:nth-child(1) div:nth-child(4) {
  display: block;
  position: absolute;
  color: #ffffff;
  font-size: calc(60px * 0.24);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.atom > div:nth-child(1) div:not(:nth-child(4)) {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-duration: 1s;
  border-left-width: calc(60px / 25);
  border-top-width: calc(60px / 25);
  border-left-color: #ffffff;
  border-left-style: solid;
  border-top-style: solid;
  border-top-color: transparent;
}

.atom > div div:nth-child(1) {
  animation: atom1 1s linear infinite;
  transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
}

.atom > div div:nth-child(2) {
  animation: atom2 1s linear infinite;
  transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
}

.atom > div div:nth-child(3) {
  animation: atom3 1s linear infinite;
  transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
}

@keyframes atom1 {
  100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom2 {
  100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom3 {
  100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}
</style>

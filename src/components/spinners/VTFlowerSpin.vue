<template>
  <div ref="flower" class="flower">
    <div>
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTFlowerSpin',
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
    const el = this.$refs.flower
    const level1 = el.children
    if (this.width !== null) {
      el.style.width = this.width + 'px'
      el.style.height = this.width + 'px'
      level1[0].style.width = `calc(${this.width}px / 7)`
      level1[0].style.height = `calc(${this.width}px / 7)`
      level1[0].children[0].style.setProperty('--flowerBoxShadowWidthFirstPlus', (Number(this.width) * 26 / 70) + 'px')
      level1[0].children[0].style.setProperty('--flowerBoxShadowWidthFirst', (-(Number(this.width) * 26 / 70)) + 'px')
      level1[0].children[0].style.setProperty('--flowerBoxShadowWidthSecondPlus', ((Number(this.width) * 19 / 70)) + 'px')
      level1[0].children[0].style.setProperty('--flowerBoxShadowWidthSecond', (-(Number(this.width) * 19 / 70)) + 'px')
      level1[0].children[0].children[0].style.setProperty('--flowerBoxShadowWidthThirdPlus', ((Number(this.width) * 14 / 70)) + 'px')
      level1[0].children[0].children[0].style.setProperty('--flowerBoxShadowWidthThird', (-(Number(this.width) * 14 / 70)) + 'px')
      level1[0].children[0].children[0].style.setProperty('--flowerBoxShadowWidthFourthPlus', ((Number(this.width) * 10 / 70)) + 'px')
      level1[0].children[0].children[0].style.setProperty('--flowerBoxShadowWidthFourth', (-(Number(this.width) * 10 / 70)) + 'px')
    }
    if (this.color !== null) {
      level1[0].children[0].style.background = this.color
      level1[0].children[0].children[0].style.background = this.color
      level1[0].children[0].style.setProperty('--flowerBoxShadowColor', this.color)
      level1[0].children[0].children[0].style.setProperty('--flowerBoxShadowColor', this.color)
    }
    if (this.duration !== null) {
      level1[0].children[0].style.animationDuration = this.duration + 's'
      level1[0].children[0].children[0].style.animationDuration = this.duration + 's'
    }
  }
}
</script>

<style scoped>
/*
 * flower
 */
.flower {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.flower > div:nth-child(1) {
  height: calc(70px / 7);
  width: calc(70px / 7);
}

.flower > div:nth-child(1) > div:nth-child(1) {
  background: #ffffff;
  height: 100%;
  width: 100%;
  padding: 10%;
  border-radius: 50%;
  animation: flowerBiggerLoad 2.5s 0s infinite both;
}

.flower > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
  background: #ffffff;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  animation: flowerSmallerLoad 2.5s 0s infinite both;
}

@keyframes flowerBiggerLoad {
  0%, 100% {
    box-shadow: var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0;
  }

  50% {
    transform: rotate(180deg);
  }

  25%, 75% {
    box-shadow: var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthFirstPlus) 0 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthFirst) 0 0,
    var(--flowerBoxShadowColor) 0 var(--flowerBoxShadowWidthFirstPlus) 0,
    var(--flowerBoxShadowColor) 0 var(--flowerBoxShadowWidthFirst) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthSecondPlus) var(--flowerBoxShadowWidthSecond) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthSecondPlus) var(--flowerBoxShadowWidthSecondPlus) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthSecond) var(--flowerBoxShadowWidthSecond) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthSecond) var(--flowerBoxShadowWidthSecondPlus) 0;
  }

  100% {
    transform: rotate(360deg);
    box-shadow: var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0;
  }
}

@keyframes flowerSmallerLoad {
  0%, 100% {
    box-shadow: var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0;
  }

  25%, 75% {
    box-shadow: var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthThirdPlus) 0 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthThird) 0 0,
    var(--flowerBoxShadowColor) 0 var(--flowerBoxShadowWidthThirdPlus) 0,
    var(--flowerBoxShadowColor) 0 var(--flowerBoxShadowWidthThird) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthFourthPlus) var(--flowerBoxShadowWidthFourth) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthFourthPlus) var(--flowerBoxShadowWidthFourthPlus) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthFourth) var(--flowerBoxShadowWidthFourth) 0,
    var(--flowerBoxShadowColor) var(--flowerBoxShadowWidthFourth) var(--flowerBoxShadowWidthFourthPlus) 0;
  }

  100% {
    box-shadow: var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0,
    var(--flowerBoxShadowColor) 0 0 0;
  }
}
</style>

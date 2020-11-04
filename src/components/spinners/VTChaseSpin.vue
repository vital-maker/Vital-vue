<template>
  <div ref="chase" class="chase">
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
  name: 'VTChaseSpin',
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
    const el = this.$refs.chase
    const children = el.children
    if (this.width !== null) {
      el.style.width = this.width + 'px'
      el.style.height = this.width + 'px'
    }
    if (this.color !== null) {
      children.forEach((item) => {
        item.style.setProperty('--chaseBackground', this.color)
      })
    }
    if (this.duration !== null) {
      const duration = Number(this.duration) / 2
      let constant = 0
      let first = duration
      el.style.animationDuration = (Number(this.duration) + 0.5) + 's'
      children.forEach((item) => {
        item.style.animationDuration = (this.duration) + 's'
        item.style.setProperty('--chaseBeforeDuration', (this.duration) + 's')
        item.style.animationDelay = (first - constant) + 's'
        first = (first - constant)
        constant = (this.duration / 2 - this.duration / 4) / 5
      })
      constant = 0
      first = duration
      for (let i = 0; i < 6; i++) {
        children[i].style.setProperty(`--chaseBeforeAnimationDelay${i + 1}`, (first - constant) + 's')
        first = (first - constant)
        constant = (this.duration / 2 - this.duration / 4) / 5
      }
    }
  }
}
</script>

<style scoped>
/*
 * chase
 */
/*:root {*/
/*  --background: #fff*/
/*}*/

.chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: chaseLoad 2.5s infinite linear both;
}

.chase div {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: chaseDot 2.0s infinite ease-in-out both;
}

.chase div:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: var(--chaseBackground);
  border-radius: 100%;
  animation: chaseDot-before var(--chaseBeforeDuration) infinite ease-in-out both;
}

.chase div:nth-child(1) {
  animation-delay: 1s;
}

.chase div:nth-child(2) {
  animation-delay: .9s;
}

.chase div:nth-child(3) {
  animation-delay: .8s;
}

.chase div:nth-child(4) {
  animation-delay: .7s;
}

.chase div:nth-child(5) {
  animation-delay: .6s;
}

.chase div:nth-child(6) {
  animation-delay: .5s;
}

.chase div:nth-child(1):before {
  animation-delay: var(--chaseBeforeAnimationDelay1);
}

.chase div:nth-child(2):before {
  animation-delay: var(--chaseBeforeAnimationDelay2);
}

.chase div:nth-child(3):before {
  animation-delay: var(--chaseBeforeAnimationDelay3);
}

.chase div:nth-child(4):before {
  animation-delay: var(--chaseBeforeAnimationDelay4);
}

.chase div:nth-child(5):before {
  animation-delay: var(--chaseBeforeAnimationDelay5);
}

.chase div:nth-child(6):before {
  animation-delay: var(--chaseBeforeAnimationDelay6);
}

@keyframes chaseLoad {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes chaseDot {
  80%, 100% {
    transform: rotate(360deg);
  }
}

@keyframes chaseDot-before {
  50% {
    transform: scale(0.4);
  }
  100%, 0% {
    transform: scale(1.0);
  }
}

</style>

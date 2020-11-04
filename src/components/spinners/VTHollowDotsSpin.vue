<template>
  <div class="hollowDots">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTHollowDotsSpin'
}
</script>

<style scoped>
/*
 * hollowDots
 */

.hollowDots {
  height: 15px;
  width: calc(30px * 3);
}

.hollowDots div {
  width: 15px;
  height: 15px;
  margin: 0 calc(15px / 2);
  border: calc(15px / 5) solid #ff1d5e;
  border-radius: 50%;
  float: left;
  transform: scale(0);
  animation: hollowDotsLoad 1000ms ease infinite 0ms;
}

.hollowDots div:nth-child(1) {
  animation-delay: calc(300ms * 1);
}

.hollowDots div:nth-child(2) {
  animation-delay: calc(300ms * 2);
}

.hollowDots div:nth-child(3) {
  animation-delay: calc(300ms * 3);
}

@keyframes hollowDotsLoad {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

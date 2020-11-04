<template>
  <div class="rhombusesLoop">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTRhombusesLoopSpin'
}
</script>

<style scoped>
/*
 * rhombusesLoop
 */
.rhombusesLoop {
  width: calc(15px * 4);
  height: 15px;
  position: relative;
}

.rhombusesLoop div {
  height: 15px;
  width: 15px;
  background-color: #ff1d5e;
  left: calc(15px * 4);
  position: absolute;
  margin: 0 auto;
  border-radius: 2px;
  transform: translateY(0) rotate(45deg) scale(0);
  animation: rhombusesLoopLoad 2500ms linear infinite;
}

.rhombusesLoop div:nth-child(1) {
  animation-delay: calc(2500ms * 1 / -1.5);
}

.rhombusesLoop div:nth-child(2) {
  animation-delay: calc(2500ms * 2 / -1.5);
}

.rhombusesLoop div:nth-child(3) {
  animation-delay: calc(2500ms * 3 / -1.5);
}

@keyframes rhombusesLoopLoad {
  0% {
    transform: translateX(0) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(-233%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(-466%) rotate(45deg) scale(0);
  }
}
</style>

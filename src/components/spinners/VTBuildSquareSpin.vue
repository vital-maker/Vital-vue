<template>
  <div class="buildSquare">
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
  name: 'VTBuildSquareSpin'
}
</script>

<style scoped>
/*
 * buildSquare
 */
.buildSquare {
  height: 40px;
  width: 40px;
  top: calc( -10px * 2 / 3);
}

.buildSquare div {
  height: 10px;
  width: 10px;
  top: calc( -10px * 2 / 3);
  margin-right: calc(10px / 3);
  margin-top: calc(10px / 3);
  background: #ff1d5e;
  float: left;
  position:relative;
  opacity: 0;
  animation: buildSquareLoad 6s infinite;
}

.buildSquare div:nth-child(1) {
  animation-delay: calc(300ms * 6);
}

.buildSquare div:nth-child(2) {
  animation-delay: calc(300ms * 7);
}

.buildSquare div:nth-child(3) {
  animation-delay: calc(300ms * 8);
}

.buildSquare div:nth-child(4) {
  animation-delay: calc(300ms * 3);
}

.buildSquare div:nth-child(5) {
  animation-delay: calc(300ms * 4);
}

.buildSquare div:nth-child(6) {
  animation-delay: calc(300ms * 5);
}

.buildSquare div:nth-child(7) {
  animation-delay: calc(300ms * 0);
}

.buildSquare div:nth-child(8) {
  animation-delay: calc(300ms * 1);
}

.buildSquare div:nth-child(9) {
  animation-delay: calc(300ms * 2);
}

@keyframes buildSquareLoad {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    top: 0;
  }
  50.9% {
    opacity: 1;
    top: 0;
  }
  55.9% {
    opacity: 0;
    top: inherit;
  }
}
</style>

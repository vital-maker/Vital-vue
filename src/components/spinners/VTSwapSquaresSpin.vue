<template>
  <div class="swapSquares">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTSwapSquaresSpin'
}
</script>

<style scoped>
/*
 * swapSquares
 */
.swapSquares {
  height: 65px;
  width: 65px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.swapSquares div {
  height: calc(65px * 0.25 / 1.3);
  width:  calc(65px * 0.25 / 1.3);
  animation-duration: 1000ms;
  border: calc(65px * 0.04 / 1.3) solid #ff1d5e;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  animation-iteration-count: infinite;
}

.swapSquares div:nth-child(1) {
  animation-name: swapSquares1Load;
  animation-delay: 500ms;
}

.swapSquares div:nth-child(2) {
  animation-name: swapSquares2Load;
  animation-delay: 0ms;
}

.swapSquares div:nth-child(3) {
  animation-name: swapSquares3Load;
  animation-delay: 500ms;
}

.swapSquares div:nth-child(4) {
  animation-name: swapSquares4Load;
  animation-delay: 0ms;
}

@keyframes swapSquares1Load {
  50% {
    transform: translate(150%,150%) scale(2,2);
  }
}

@keyframes swapSquares2Load {
  50% {
    transform: translate(-150%,150%) scale(2,2);
  }
}

@keyframes swapSquares3Load {
  50% {
    transform: translate(-150%,-150%) scale(2,2);
  }
}

@keyframes swapSquares4Load {
  50% {
    transform: translate(150%,-150%) scale(2,2);
  }
}
</style>

<template>
  <div class="fillSquare"></div>
</template>

<script>
export default {
  name: 'VTFillSquareSpin'
}
</script>

<style scoped>
/*
 * fillSquare
 */
.fillSquare {
  height: 50px;
  width: 50px;
  position: relative;
  border: 4px solid #ff1d5e;
  animation: fillSquareLoad 4s infinite ease;
}

.fillSquare:before {
  content: '';
  vertical-align: top;
  display: inline-block;
  background-color: #ff1d5e;
  width: 100%;
  opacity: 1;
  animation: fillSquareInnerLoad 4s infinite ease-in;
}

@keyframes fillSquareLoad {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes fillSquareInnerLoad {
  0% {
    height: 0;
  }

  25% {
    height: 0;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0;
  }
}
</style>

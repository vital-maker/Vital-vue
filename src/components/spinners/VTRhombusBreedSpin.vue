<template>
  <div class="rhombusBreed">
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
  name: 'VTRhombusBreedSpin'
}
</script>

<style scoped>
/*
 * rhombusBreed
 */
.rhombusBreed {
  height: 65px;
  width: 65px;
  position: relative;
  transform: rotate(45deg);
}

.rhombusBreed div {
  height: calc(65px / 7.5);
  width: calc(65px / 7.5);
  animation-duration: 2000ms;
  top: calc(65px / 2.3077);
  left: calc(65px / 2.3077);
  background-color: #ff1d5e;
  position: absolute;
  animation-iteration-count: infinite;
}

.rhombusBreed div:nth-child(2n+0) {
  margin-right: 0;
}

.rhombusBreed div:nth-child(1) {
  animation-name: rhombusBreed1Load;
  animation-delay: calc(100ms * 1);
}

.rhombusBreed div:nth-child(2) {
  animation-name: rhombusBreed2Load;
  animation-delay: calc(100ms * 2);
}

.rhombusBreed div:nth-child(3) {
  animation-name: rhombusBreed3Load;
  animation-delay: calc(100ms * 3);
}

.rhombusBreed div:nth-child(4) {
  animation-name: rhombusBreed4Load;
  animation-delay: calc(100ms * 4);
}

.rhombusBreed div:nth-child(5) {
  animation-name: rhombusBreed5Load;
  animation-delay: calc(100ms * 5);
}

.rhombusBreed div:nth-child(6) {
  animation-name: rhombusBreed6Load;
  animation-delay: calc(100ms * 6);
}

.rhombusBreed div:nth-child(7) {
  animation-name: rhombusBreed7Load;
  animation-delay: calc(100ms * 7);
}

.rhombusBreed div:nth-child(8) {
  animation-name: rhombusBreed8Load;
  animation-delay: calc(100ms * 8);
}

.rhombusBreed div:nth-child(9) {
  height: calc(65px / 3);
  width: calc(65px / 3);
  animation-duration: 2000ms;
  top: calc(65px / 3);
  left: calc(65px / 3);
  background-color: #ff1d5e;
  animation: rhombusBreed9Load 2s infinite;
  animation-delay: 0.5s;
}

@keyframes rhombusBreed1Load {
  50% {
    transform: translate(-325%, -325%);
  }
}

@keyframes rhombusBreed2Load {
  50% {
    transform: translate(0, -325%);
  }
}

@keyframes rhombusBreed3Load {
  50% {
    transform: translate(325%, -325%);
  }
}

@keyframes rhombusBreed4Load {
  50% {
    transform: translate(325%, 0);
  }
}

@keyframes rhombusBreed5Load {
  50% {
    transform: translate(325%, 325%);
  }
}

@keyframes rhombusBreed6Load {
  50% {
    transform: translate(0, 325%);
  }
}

@keyframes rhombusBreed7Load {
  50% {
    transform: translate(-325%, 325%);
  }
}

@keyframes rhombusBreed8Load {
  50% {
    transform: translate(-325%, 0);
  }
}

@keyframes rhombusBreed9Load {
  50% {
    transform: scale(0.5);
  }
}
</style>

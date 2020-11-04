<template>
  <div class="aroundDot"></div>
</template>

<script>
export default {
  name: 'VTAroundDotsSpin'
}
</script>

<style scoped>
/*
 * aroundDot
 */
.aroundDot {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: aroundDotRotate 2.0s infinite linear;
  animation: aroundDotRotate 2.0s infinite linear;
}

.aroundDot:before, .aroundDot:after {
  content: '';
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #ffffff;
  border-radius: 100%;

  -webkit-animation: aroundDotBounce 2.0s infinite ease-in-out;
  animation: aroundDotBounce 2.0s infinite ease-in-out;
}

.aroundDot:after {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes aroundDotRotate {
  100% {
    -webkit-transform: rotate(360deg)
  }
}

@keyframes aroundDotRotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg)
  }
}

@-webkit-keyframes aroundDotBounce {
  0%, 100% {
    -webkit-transform: scale(0.0)
  }
  50% {
    -webkit-transform: scale(1.0)
  }
}

@keyframes aroundDotBounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>

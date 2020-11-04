<template>
  <div class="circleBounce"></div>
</template>

<script>
export default {
  name: 'VTCircleBounceSpin'
}
</script>

<style scoped>
/*
 * circle Bounce
 */
.circleBounce {
  width: 40px;
  height: 40px;

  position: relative;
  margin: 100px auto;
}

.circleBounce:before, .circleBounce:after {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: circleBounceLoad 2.0s infinite ease-in-out;
  animation: circleBounceLoad 2.0s infinite ease-in-out;
}

.circleBounceLoad:after {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes circleBounceLoad {
  0%, 100% {
    -webkit-transform: scale(0.0)
  }
  50% {
    -webkit-transform: scale(1.0)
  }
}

@keyframes circleBounceLoad {
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

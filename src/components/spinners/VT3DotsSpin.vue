<template>
  <div class="dots-3"></div>
</template>

<script>
export default {
  name: 'VT3DotsSpin'
}
</script>

<style scoped>
/*
 * dots-3
 */
.dots-3,
.dots-3:before,
.dots-3:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: dots-3 1.8s infinite ease-in-out;
  animation: dots-3 1.8s infinite ease-in-out;
}

.dots-3 {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.dots-3:before,
.dots-3:after {
  content: '';
  position: absolute;
  top: 0;
}

.dots-3:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.dots-3:after {
  left: 3.5em;
}

@-webkit-keyframes dots-3 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

@keyframes dots-3 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>

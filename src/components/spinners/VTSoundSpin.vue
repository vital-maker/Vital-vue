<template>
  <div class="sound"></div>
</template>

<script>
export default {
  name: 'VTSoundSpin'
}
</script>

<style scoped>
/*
 * sound
 */
.sound,
.sound:before,
.sound:after {
  background: #ffffff;
  -webkit-animation: sound1 1s infinite ease-in-out;
  animation: sound1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}

.sound {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.sound:before,
.sound:after {
  position: absolute;
  top: 0;
  content: '';
}

.sound:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.sound:after {
  left: 1.5em;
}

@-webkit-keyframes sound1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

@keyframes sound1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>

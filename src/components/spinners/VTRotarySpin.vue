<template>
  <div class="rotary">
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
  name: 'VTRotarySpin'
}
</script>

<style scoped>
/*
 * rotary
 */
.rotary {
  position: relative;
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
  /*margin: auto;*/
  width: 97px;
  height: 97px;
  animation: rotaryLoad 0.4s infinite linear;
  -o-animation: rotaryLoad 0.4s infinite linear;
  -ms-animation: rotaryLoad 0.4s infinite linear;
  -webkit-animation: rotaryLoad 0.4s infinite linear;
  -moz-animation: rotaryLoad 0.4s infinite linear;
}

.rotary div {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.rotary div:nth-child(odd) {
  border-top: none;
  border-left: none;
}

.rotary div:nth-child(even) {
  border-bottom: none;
  border-right: none;
}

.rotary div:nth-child(2) {
  border-width: 2px;
  left: 0;
  top: -4px;
  width: 12px;
  height: 12px;
}

.rotary div:nth-child(3) {
  border-width: 2px;
  left: -1px;
  top: 3px;
  width: 18px;
  height: 18px;
}

.rotary div:nth-child(4) {
  border-width: 3px;
  left: -1px;
  top: -4px;
  width: 23px;
  height: 23px;
}

.rotary div:nth-child(5) {
  border-width: 3px;
  left: -1px;
  top: 4px;
  width: 31px;
  height: 31px;
}

.rotary div:nth-child(6) {
  border-width: 4px;
  left: 0px;
  top: -4px;
  width: 39px;
  height: 39px;
}

.rotary div:nth-child(7) {
  border-width: 4px;
  left: 0px;
  top: 6px;
  width: 49px;
  height: 49px;
}

@keyframes rotaryLoad {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@-o-keyframes rotaryLoad {
  from {
    -o-transform: rotate(360deg);
  }
  to {
    -o-transform: rotate(0deg);
  }
}

@-ms-keyframes rotaryLoad {
  from {
    -ms-transform: rotate(360deg);
  }
  to {
    -ms-transform: rotate(0deg);
  }
}

@-webkit-keyframes rotaryLoad {
  from {
    -webkit-transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}

@-moz-keyframes rotaryLoad {
  from {
    -moz-transform: rotate(360deg);
  }
  to {
    -moz-transform: rotate(0deg);
  }
}
</style>

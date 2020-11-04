<template>
  <div ref="intersecting" class="intersecting">
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTIntersectingSpin',
  color: {
    type: String,
    default: null
  },
  width: {
    type: String,
    default: null
  },
  duration: {
    type: String,
    default: null
  },
  mounted () {

  }
}
</script>

<style scoped>
/*
 * intersecting
 */

.intersecting {
  height: 70px;
  width: 70px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.intersecting > div:nth-child(1) {
  animation: intersecting-animation 1200ms linear infinite;
  transform-origin: center;
  display: block;
  height: 35px;
  width: 35px;
}

.intersecting > div:nth-child(1) div {
  display: block;
  border: 2px solid #ff1d5e;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.intersecting > div:nth-child(1) div:nth-child(1) {
  left: 0;
  top: 0;
}

.intersecting > div:nth-child(1) div:nth-child(2) {
  left: calc(35px * -0.36);
  top: calc(35px * 0.2);
}

.intersecting > div:nth-child(1) div:nth-child(3) {
  left: calc(35px * -0.36);
  top: calc(35px * -0.2);
}

.intersecting > div:nth-child(1) div:nth-child(4) {
  left: 0;
  top: calc(35px * -0.36);
}

.intersecting > div:nth-child(1) div:nth-child(5) {
  left: calc(35px * 0.36);
  top: calc(35px * -0.2);
}

.intersecting > div:nth-child(1) div:nth-child(6) {
  left: calc(35px * 0.36);
  top: calc(35px * 0.2);
}

.intersecting > div:nth-child(1) div:nth-child(7) {
  left: 0;
  top: calc(35px * 0.36);
}

@keyframes intersecting-animation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>

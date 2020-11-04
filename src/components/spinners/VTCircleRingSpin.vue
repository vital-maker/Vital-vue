<template>
  <div class="circleRing"></div>
</template>

<script>
export default {
  name: 'VTCircleRingSpin'
}
</script>

<style scoped>
/*
 * circleRing
 */
.circleRing {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.circleRing:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: circleRingLoad 1.2s linear infinite;
}

@keyframes circleRingLoad {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

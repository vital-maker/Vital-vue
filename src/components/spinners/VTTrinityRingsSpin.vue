<template>
  <div class="trinityRings">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTTrinityRingsSpin'
}
</script>

<style scoped>
/*
 * trinityRings
 */
.trinityRings {
  height: 66px;
  width: 66px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
}
.trinityRings div {
  position:absolute;
  display:block;
  border-radius:50%;
  border: 3px solid #ff1d5e;
  opacity: 1;
}

.trinityRings div:nth-child(1) {
  height: 60px;
  width: 60px;
  animation : trinityRings1Load 1.5s infinite linear;
  border-width: 3px;
}
.trinityRings div:nth-child(2) {
  height: calc(60px * 0.65);
  width: calc(60px * 0.65);
  animation : trinityRings2Load 1.5s infinite linear;
  border-width: 2px;
}
.trinityRings div:nth-child(3) {
  height: calc(60px * 0.1);
  width: calc(60px * 0.1);
  animation:trinityRings3Load 1.5s infinite linear;
  border-width: 1px;
}

@keyframes trinityRings1Load{
  0% {
    transform: rotateZ(20deg) rotateY(0deg);
  }
  100% {
    transform: rotateZ(100deg) rotateY(360deg);
  }
}
@keyframes trinityRings2Load{
  0% {
    transform: rotateZ(100deg) rotateX(0deg);
  }
  100% {
    transform: rotateZ(0deg) rotateX(360deg);
  }
}
@keyframes trinityRings3Load{
  0% {
    transform: rotateZ(100deg) rotateX(-360deg);
  }
  100% {
    transform: rotateZ(-360deg) rotateX(360deg);
  }
}
</style>

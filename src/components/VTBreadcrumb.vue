<template>
  <nav class="w-100" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <slot>
        <li class="breadcrumb-item active" aria-current="page">example 1</li>
        <li class="breadcrumb-item">
          <VTLink href="#">example 2</VTLink>
        </li>
        <li class="breadcrumb-item">
          <VTLink href="#">example 3</VTLink>
        </li>
      </slot>
    </ol>
  </nav>
</template>

<script>
import mixins from '@/data'
export default {
  name: 'VTBreadcrumb',
  mixins: [mixins]
}
</script>

<style scoped>

</style>

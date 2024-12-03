<script lang="ts" setup>
// const { darkMode } = storeToRefs(useAppStore())

// const curPage = getCurrentPages().at(-1) as any

// #ifdef H5
// if (window.parent !== window.self) {
//   window.parent.postMessage({
//     type: 'route',
//     data: curPage.route.slice(0, -6),
//   }, '*')
// }
// #endif
</script>

<template>
  <!-- <nut-config-provider :theme="darkMode ? 'dark' : ''"> -->
  <div>
    <slot />
  </div>
  <!-- </nut-config-provider> -->
</template>

<style lang="scss">

</style>

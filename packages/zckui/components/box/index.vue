<script lang="ts" setup>
defineOptions({
  options: {
    virtualHost: true,
    addGlobalClass: true,
    // #ifndef H5
    styleIsolation: 'shared',
    // #endif
  },
})
</script>

<template>
  <view class="zck-box">
    <view class="zck-box--header">this is a box</view>
    <slot />
    <view class="zck-box--footer">
      <slot name="footer" />
    </view>
  </view>
</template>

<style lang="scss">
.zck-box {
  border: 1px solid yellow;

  &--header {
    font-size: 2em;
    font-weight: bold;
  }
}
</style>

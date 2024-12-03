<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  options: {
    virtualHost: true,
    addGlobalClass: true,
    // #ifndef H5
    styleIsolation: 'shared',
    // #endif
  },
})
const {
  background = '#ffffff00',
  title,
  modelValue,
  titleColor = '#666666',
  valueColor = '#191919',
  isLink = false,
  icon,
  iconSize,
  iconColor,
  // eslint-disable-next-line unused-imports/no-unused-vars
  iconBold = false,
  isPadding = true,
  round = false,
  size = 14,
  titleWidth = '6em',
  valueSize = null,
  valueStyle = {},
  center = false,
  linkIcon = 'i-ep-arrow-right',
} = defineProps<{
  background?: string
  modelValue?: string | number
  title: string | number
  valueColor?: string
  titleColor?: string
  isLink?: boolean
  icon?: string
  iconSize?: number | string
  iconColor?: string
  iconBold?: boolean
  isPadding?: boolean
  round?: boolean
  size?: number
  valueSize?: number
  titleWidth?: string
  center?: boolean
  valueStyle?: any
  linkIcon?: string
}>()

const emits = defineEmits(['update:modelValue', 'open'])
function open() {
  emits('open')
}

const cellStyle = computed(() => {
  return {
    fontSize: `${size * 2}rpx`,
    padding: isPadding ? 0 : `${(size / 2.5) * 2}rpx ${(size / 2.5) * 2}rpx`,
  }
})
</script>

<template>
  <div
    class="gy-cell"
    :class="{ 'gy-cell--active': isLink }"
    :style="{
      '--background': background,
      'borderRadius': round ? '16px' : '0px',
      ...cellStyle,
      'alignItems': isLink || center ? 'center' : 'flex-start',
    }"
    @click="open"
  >
    <slot name="title">
      <div class="gy-cell--title" :style="{ gridTemplateColumns: icon ? `max-content 1fr` : '1fr', width: titleWidth }">
        <GyIcon
          v-if="icon"
          :name="icon"
          :color="iconColor"
          :size="iconSize"
        />
        <div :style="{ color: titleColor }">{{ title }}</div>
      </div>
    </slot>
    <div
      class="gy-cell--value"
      :style="{
        color: valueColor,
        gridTemplateColumns: isLink ? `1fr max-content` : '1fr',
        gap: isLink ? '6px' : 0,
        fontSize: `${valueSize != null ? valueSize * 2 : size * 2}rpx`,
        ...valueStyle,
      }"
    >
      <slot name="default">
        <div>{{ modelValue }}</div>
      </slot>
      <GyIcon v-if="isLink" :name="linkIcon" :color="valueColor" />
    </div>
  </div>
</template>

<style lang="scss">
.gy-cell {
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 16px;
  justify-items: self-end;
  width: 100%;
  overflow: hidden;
  background: var(--background);

  &--value {
    display: grid;
    place-items: center end;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    font-weight: 500;
    text-align: right;
  }

  &--title {
    display: grid;
    gap: 4px;
    align-items: center;
    font-weight: 500;
    text-align: left;
  }
}
</style>

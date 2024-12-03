/* eslint-disable */
// @ts-nocheck

declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ZckBox: typeof import('./components/box/index.vue')['default']
    ZckCell: typeof import('./components/cell/index.vue')['default']
  }
}

export {}

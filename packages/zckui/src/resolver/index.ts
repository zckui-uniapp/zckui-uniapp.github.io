// import process from 'node:process'
import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'

// const processShim: typeof process
//   = typeof process !== 'undefined' ? process : ({} as typeof process)
// const envShim = processShim.env || ({} as typeof process.env)

// type PLATFORM =
//   | 'h5'
//   | 'app'
//   | 'mp-alipay'
//   | 'mp-baidu'
//   | 'mp-kuaishou'
//   | 'mp-lark'
//   | 'mp-qq'
//   | 'mp-toutiao'
//   | 'mp-weixin'
//   | 'quickapp-webview'
//   | 'quickapp-webview-huawei'
//   | 'quickapp-webview-union'

/** Value of `process.env.UNI_PLATFORM` */
// const platform = envShim.UNI_PLATFORM as PLATFORM
/** Detect if `process.env.UNI_PLATFORM` is `H5` */
// const isH5 = platform === 'h5'

export function ZckUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(Zck[A-Z]|zck-[a-z])/)) {
        const cName = name.slice(3).replace(/([a-z])/, '$1').toLowerCase()
        const component = `zckui-uniapp/components/${cName}/index.vue`
        // const style = `zck-uniapp/components/${cName}/index.scss`

        return {
          name,
          from: component,
          // sideEffects: isH5 ? style : '',
        }
      }
    },
  }
}

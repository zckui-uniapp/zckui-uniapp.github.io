import { isH5, isMp } from '@uni-helper/uni-env'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUni({
      uno: {
        dark: isH5 ? 'class' : 'media',
      },
      attributify: {
        ignoreAttributes: ['block', 'fixed', 'align'],
      },
    }),
    presetIcons({
      warn: true,
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    preflightRoot: isMp ? ['page,::before,::after'] : undefined,
    colors: {
      context: 'rgb(var(--ano-c-context))',
      primary: '#fa2c19',
      success: 'rgb(39, 197, 48)',
      warning: 'rgb(255, 190, 13)',
      info: 'rgb(73, 101, 242)',
      danger: 'rgb(250, 44, 25)',
    },
  },
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-aren-inset-top) env(safe-aren-inset-right) env(safe-aren-inset-bottom) env(safe-aren-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-aren-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-aren-inset-bottom)' }],
  ],
  shortcuts: {

  },
})

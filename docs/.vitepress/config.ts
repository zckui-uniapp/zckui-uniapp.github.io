import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { components, guides } from './items'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'zckui-uniapp',
  description: '智充客风格的移动端组件库，完全适配uni-app',
  lastUpdated: true,
  head: [
    ['meta', { property: 'og:title', content: 'ZckUi' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '智充客风格的移动端组件库，完全适配uni-app',
      },
    ],
    ['meta', { property: 'og:url', content: 'https://github.com/zckui-uniapp/zckui-uniapp' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    // ['link', { rel: 'icon', href: 'https://s2.loli.net/2023/08/30/1AxH9rbqi4kvCls.png', type: 'image/png' }],
  ],
  themeConfig: {
    // logo: 'https://s2.loli.net/2023/08/30/foMY3ui4nQpUA1C.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', items: guides },
      { text: '组件', items: components },
      {
        text: `v${version}`,
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/zckui-uniapp/zckui-uniapp/releases',
          },
          {
            text: '贡献',
            link: 'https://github.com/zckui-uniapp/zckui-uniapp/blob/main/CONTRIBUTING.md',
          },
          {
            text: '行为准则',
            link: 'https://github.com/zckui-uniapp/zckui-uniapp/blob/main/CODE_OF_CONDUCT.md',
          },
        ],
      },

    ],

    search: {
      provider: 'local',
    },

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: guides,
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: components,
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zckui-uniapp/zckui-uniapp' }],

    editLink: {
      pattern: 'https://github.com/zckui-uniapp/zckui-uniapp/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: 'MIT Licensed',
      copyright: '版权所有 © 2023 年-至今 zckui-uniapp 贡献者',
    },
    aside: false,
    returnToTopLabel: 'top',

  },

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})

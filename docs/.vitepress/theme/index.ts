// https://vitepress.dev/guide/custom-theme
import Layout from '../components/Layout.vue'
import 'uno.css'

export default {
  Layout() {
    return h(Layout)
  },
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // },
}

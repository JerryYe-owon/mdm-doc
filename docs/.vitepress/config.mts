import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MDM Docs",
  description: "A VitePress Site",
  base: '/mdm-doc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Installation', link: '/mdm-install-guide' },
      { text: 'Manual', link: '/mdm-user-manual' },
    ],

    sidebar: [
      {
        // text: 'Examples',
        items: [
          { text: 'Installation', link: '/mdm-install-guide' },
          { text: 'Manual', link: '/mdm-user-manual' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://jerryye-owon.github.io/mdm-doc/' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'MDM Docs.',
      copyright: 'Copyright © 2024-present MDM Team'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zhs: {
      label: '简体中文',
      lang: 'zhs', // optional, will be added  as `lang` attribute on `html` tag
      link: '/zhs' // default /zhs/ -- shows on navbar translations menu, can be external
    }
  }
})

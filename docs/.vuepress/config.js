module.exports = {
  title: '划词翻译',
  description: '让浏览不同语言的网站变得无比轻松的浏览器扩展程序。',
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-163159722-1',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '反馈问题', link: '/issues.html' },
      { text: '隐私政策', link: '/privacy-policy.html' },
    ],
  },
}

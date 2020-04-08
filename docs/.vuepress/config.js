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
}

import { defineConfig } from'vitepress'
import type { DefaultTheme } from'vitepress'
import { nav } from './nav'

export default defineConfig({
  base: '/frontend-handbook/',
  title: 'Frontend Handbook',
  description: 'Just playing around.',
  themeConfig: {
    nav: nav(),
    socialLinks: socialLinks()
  },
})

function socialLinks(): DefaultTheme.SocialLink[] {
  return [
    {
      icon: 'github',
      link: 'https://github.com/soramitsukhmer/frontend-handbook'
    }
  ]
}

import { defineConfig } from'vitepress'
import { nav } from './nav'

export default defineConfig({
  title: 'Frontend Handbook',
  description: 'Just playing around.',
  themeConfig: {
    nav: nav()
  },
  base: '/frontend-handbook/'
})

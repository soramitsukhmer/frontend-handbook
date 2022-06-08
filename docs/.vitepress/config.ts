import { defineConfig } from'vitepress'
import { nav } from './nav'

export default defineConfig({
  base: '/frontend-handbook/',
  title: 'Frontend Handbook',
  description: 'Just playing around.',
  themeConfig: {
    nav: nav()
  },
})

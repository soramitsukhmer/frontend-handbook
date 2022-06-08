import { defineConfig } from'vitepress'
import type { DefaultTheme } from'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Soramitsu (Khmer)',
  description: 'Just playing around.',
  base: '/frontend-handbook/',
  lastUpdated: true,
  themeConfig: {
    logo: 'https://static.tildacdn.com/tild6631-3830-4336-b664-373834303236/soramitsu-logo-6year.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: {
      '/on-boarding/': onBoardingSidebar(),
      '/guide/': guideSidebar(),
    },
    socialLinks: socialLinks(),
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

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'On-Boarding', link: '/on-boarding/' },
    { text: 'Engineering Guide', link: '/guide/' },
    { text: 'Contribute', link: '/development' },
  ]
}

function onBoardingSidebar(): DefaultTheme.SidebarGroup[] {
  return [
    {
      text: 'On-Boarding',
      collapsible: true,
      items: [
        { text: 'Getting Started', link: '/on-boarding/' },
        { text: 'Checklist', link: '/on-boarding/checklist' },
        { text: 'Setting up services', link: '/on-boarding/setting-up-services' },
        { text: 'Setup your environment', link: '/on-boarding/setup-your-environment' },
      ]
    }
  ]
}

function guideSidebar(): DefaultTheme.SidebarGroup[] {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'Getting Started', link: '/guide/' },
      ]
    }
  ]
}

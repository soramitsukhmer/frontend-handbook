import { defineConfig } from'vitepress'
import type { DefaultTheme } from'vitepress'

const metadata = {
  repo: "soramitsukhmer/frontend-handbook",
  url: "https://github.com/soramitsukhmer/frontend-handbook"
}

export default defineConfig({
  lang: 'en-US',
  title: 'Handbook For Team Frontend',
  description: 'This Handbook should be the starting point for any new team members. It provides an overview our roles, our team norms, and details of our processes.',
  // base: '/frontend-handbook/',
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
    editLink: {
      repo: metadata.repo,
      dir: 'docs',
      branch: 'develop',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Socheat Sok'
    },
  },
})

function socialLinks(): DefaultTheme.SocialLink[] {
  return [
    {
      icon: 'github',
      link: metadata.url
    }
  ]
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'On-Boarding', link: '/on-boarding/' },
    { text: 'Engineering Guide', link: '/guide/' },
    {
      text: 'Help',
      items: [
        { text: 'Contribution', link: '/contribution' },
        { text: 'Discussions', link: `${metadata.url}/discussions/3` },
      ]
    },
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
    },
    // {
    //   text: 'Project setup',
    //   collapsible: true,
    //   items: [
    //     { text: 'Configure git repo', link: '/guide/wip' },
    //     { text: 'Project Scaffolding', link: '/guide/wip' },
    //   ]
    // },
    {
      text: 'Guide',
      collapsible: true,
      items: [
        { text: 'Coding Guidelines', link: '/guide/coding-guideline' },
        { text: 'API Guidelines', link: '/guide/api-guideline' },
        { text: 'Development Process', link: '/guide/development-process' },
        { text: 'Source Code Organization', link: '/guide/source-code-organization' },
      ]
    },
    {
      text: 'Tooling',
      collapsible: true,
      items: [
        { text: 'IDE Support', link: '/guide/tooling/ide-support' },
        { text: 'Browser Devtools', link: '/guide/tooling/browser-devtools' },
      ]
    },
    // {
    //   text: 'Best Practices',
    //   collapsible: true,
    //   items: [
    //     { text: 'Production  Deployment', link: '/guide/wip' },
    //     { text: 'Performance', link: '/guide/wip' },
    //     { text: 'Accessibility', link: '/guide/wip' },
    //     { text: 'Security', link: '/guide/wip' },
    //   ]
    // },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        { text: 'Migration from Vetur', link: '/guide/migrations/migration-from-vetur' },
        { text: 'Switch from Volar to Vetur', link: '/guide/migrations/migration-from-volar' },
      ]
    },
  ]
}

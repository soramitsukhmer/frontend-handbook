import type { DefaultTheme } from 'vitepress'
export function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/' },
        { text: 'Getting Started', link: '/getting-started/' }
    ]
}

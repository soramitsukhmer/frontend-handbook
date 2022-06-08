import type { DefaultTheme } from 'vitepress'
export function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Frontend Handbook', link: '/' },
        { text: 'Getting Started', link: '/getting-started/' }
    ]
}

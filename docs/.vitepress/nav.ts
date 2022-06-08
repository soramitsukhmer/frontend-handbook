import type { DefaultTheme } from 'vitepress'
export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Getting Started',
            link: '/getting-started/'
        }
    ]
}

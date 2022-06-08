import type { DefaultTheme } from 'vitepress'
export function nav(): DefaultTheme.Config['nav'] {
    return [
        {
            text: 'Getting Started',
            link: '/getting-started/'
        }
    ]
}

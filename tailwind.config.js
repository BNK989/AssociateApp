/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                accent: {
                    1: 'hsl(var(--color-accent1) / <alpha-value>)',
                    2: 'hsl(var(--color-accent2) / <alpha-value>)',
                    3: 'hsl(var(--color-accent3) / <alpha-value>)',
                },
                bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
                bkg_dark: 'hsl(var(--color-bkg-dark) / <alpha-value>)',
                content: 'hsl(var(--color-content) / <alpha-value>)',
                warn: 'hsl(var(--color-warn) / <alpha-value>)',
                error: 'hsl(var(--color-error) / <alpha-value>)',
            },
            animation: {
                'pulse-slow': 'pulse 11s linear infinite',
                'pulse-slow-offset': 'pulse 13s linear infinite',
            },
        },
    },
    plugins: [require('tailwindcss-rtl')],
}

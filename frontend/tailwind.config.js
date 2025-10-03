/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // slate-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // yellow-600
        background: 'var(--color-background)', // softer-white
        foreground: 'var(--color-foreground)', // slate-800
        primary: {
          DEFAULT: 'var(--color-primary)', // white
          foreground: 'var(--color-primary-foreground)', // slate-800
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // slate-50
          foreground: 'var(--color-secondary-foreground)', // slate-800
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // slate-100
          foreground: 'var(--color-muted-foreground)', // slate-500
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // yellow-600
          foreground: 'var(--color-accent-foreground)', // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // slate-800
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // slate-800
        },
        success: {
          DEFAULT: 'var(--color-success)', // emerald-600
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-600
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)', // white
        },
        // Brand-specific colors
        surface: 'var(--color-surface)', // slate-100
        'text-primary': 'var(--color-text-primary)', // slate-800
        'text-secondary': 'var(--color-text-secondary)', // slate-500
        'text-strong': 'var(--color-text-strong)', // slate-900
        gold: 'var(--color-gold)', // yellow-600
        'gold-warm': 'var(--color-gold-warm)', // gold
        'gold-deep': 'var(--color-gold-deep)', // amber-700
        canvas: 'var(--color-canvas)', // white
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'saira': ['Saira', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'headline': ['2rem', { lineHeight: '1.3' }],
        'title': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'micro': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        // Golden ratio spacing
        'golden-xs': '0.5rem', // 8px
        'golden-sm': '0.8125rem', // 13px
        'golden-md': '1.3125rem', // 21px
        'golden-lg': '2.125rem', // 34px
        'golden-xl': '3.4375rem', // 55px
      },
      borderRadius: {
        'luxury': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'luxury': '0 4px 6px rgba(202, 138, 4, 0.07), 0 10px 15px rgba(0, 0, 0, 0.1)',
        'luxury-hover': '0 8px 12px rgba(202, 138, 4, 0.15), 0 20px 25px rgba(0, 0, 0, 0.15)',
        'gold': '0 4px 20px rgba(202, 138, 4, 0.15)',
        'gold-lg': '0 10px 40px rgba(202, 138, 4, 0.2)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(202, 138, 4, 0.7)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(202, 138, 4, 0)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'luxury': '20px',
      },
      gridTemplateColumns: {
        'golden': '1.618fr 1fr 1.382fr',
        'luxury': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      aspectRatio: {
        'golden': '1.618',
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}
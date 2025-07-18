/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
  	],
  	theme: {
  		extend: {
  			colors: {
				'absensi-primary': 'var(--color-absensi-primary)',
				'absensi-secondary': 'var(--color-absensi-secondary)',
				'absensi-tertiary': 'var(--color-absensi-tertiary)',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: 'var(--color-tertiary)',
  			error: 'var(--color-error)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
				DEFAULT: "hsl(var(--sidebar))",
				foreground: "hsl(var(--sidebar-foreground))",
				primary: "hsl(var(--sidebar-primary))",
				"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
				accent: "hsl(var(--sidebar-accent))",
				"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
				border: "hsl(var(--sidebar-border))",
				ring: "hsl(var(--sidebar-ring))",
			}
			},
			fontFamily: {
				poppins: [
					'var(--font-poppins)',
					'sans-serif'
				]
			},
			keyframes: {
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'slide-in': 'slide-in 0.3s ease-out forwards'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
  	},
  	plugins: [
    	import("tailwindcss-animate")
  	],
}


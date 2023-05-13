/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			screens: {
				xm: '412px'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				space_grotesk: ['Space Grotesk', 'sans-serif']
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			orange: '#FF642F',
			black: '#000000',
			white: '#FFFFFF',
			red: '#FF0000',
			'light-orange': '#FFD7C9',
			'whisper-blue': '#f2f9ff',
			'slate-gray': '#7F7F7F',
			gray: '#454545',
			'pearl-gray': '#E8E8E8'
		}
	},
	plugins: []
};

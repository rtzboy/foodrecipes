/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			screens: {
				xm: '412px'
			},
			fontFamily: {
				salsa: ['Salsa', 'cursive', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				sofia: ['Sofia Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};

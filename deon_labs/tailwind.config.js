/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'url("/Hero.png")',
        'hero-pattern-mobile': 'url("/Hero_mobile.png")',
        'hero-pattern-tablet': 'url("/Hero_tablet.png")',
        'gradient': 'url("/Frame.png")',
        'Grad-left' : 'url("/Grad-left.png")',
        'Grad-right' : 'url("/Grad-right.png")',
        'Background' : 'url("/Background.png")',
      },
      fontFamily: {
        tektur: ["Tektur" , "cursive"],
        poppins: "Poppins",
        inter: "Inter",
      },
    },
  },
  plugins: [],
}

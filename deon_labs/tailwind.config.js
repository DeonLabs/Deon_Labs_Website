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
        'gradient-tablet': 'url("/Frame_tablet.png")',
        'gradient-pc' : 'url("/Frame_pc.png")',
        'Grad-left' : 'url("/Grad-left.png")',
        'Grad-right' : 'url("/Grad-right.png")',
        'Background' : 'url("/Background.png")',
        'Footer-mobile'  : 'url("/Footer.png")',
        'Footer-tablet'  : 'url("/section-bottom.png")',
        'Footer-Desktop' : 'url("/Section-5.png")',
        'Achievments-mobile': 'url("/Mask group.png")',
        'border-gradient' : 'url("/Group 2338 (1).png")',
        'Service-grad' : 'url("/service-bg.png")',
        'About-grad' : 'url("/Hero_About_pc.png")',
        'About-grad-tab' : 'url("/Hero_About_tab.png")',
        'About-grad-phone' : 'url("/Hero_About_phone.png")',
        'Community-grad-phone' : 'url("/Hero_Community_phone.png")',
        'Community-grad-tab' : 'url("/Hero_Community_tab.png")',
        'Community-grad' : 'url("/Hero (3).png")',
      },
      fontFamily: {
        tektur: ["Tektur" , "cursive"],
        poppins: "Poppins",
        inter: "Inter",
      },
      screens: {
        'tablet' : '400px', 
        'pro': {'max': '1024px'},
        'fold':{ 'max': '280px'}, 
        'phone': {'max': '400px'},
        'sm': {'min': '200px', 'max': '1130px'}, 
        'mobile': {'min': '200px', 'max': '500px'},
      }
      ,
      colors:{
        'grad' : 'linear-gradient(to right top, #8f00ff, #7c00ff, #6500ff, #4700ff, #0000ff)'
      },
      boxShadow: {
        '3xl'  : ''
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['"Proxima Nova"', 'sans-serif']
    },
    extend: {
      height: {
        'cardImage': '145px'
      },
      gridTemplateColumns: {
        'courseScroll': 'repeat(4, 1fr)',
        'navScroll': 'repeat(7, 1fr)',
      },
      minWidth: {
        'courseScroll': '240px'
      }
    }
  }
}

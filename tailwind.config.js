

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["sans-serif"],
        youngserif: ["sans-serif"]
      },
      colors: {
        'Nutmeg': 'hsl(14, 45%, 36%)',
        'Dark-Raspberry': 'hsl(332, 51%, 32%)',
        'White': 'hsl(0, 0%, 100%)',
        'Rose-White': 'hsl(330, 100%, 98%)',
        'Eggshell': 'hsl(30, 54%, 90%, 1)',
        'Light-Grey': 'hsl(30, 18%, 87%)',
        'Wenge-Brown': 'hsl(30, 10%, 34%)',
        'Dark-Charcoal': 'hsl(24, 5%, 18%)',
        'Brandy-Red': 'rgba(133, 70, 50, 1)',
        'Snow': 'rgba(255, 247, 251, 1)',
        'White-Coffe': 'rgba(227, 221, 215, 1)', 
        'Rose-White': 'hsl(330, 100%, 98%)'
      },
      
    fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        YoungSerif: ['Young Serif', 'serif'],
      }, 
    },
  },
  plugins: [],
}


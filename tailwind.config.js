// tailwind.config.js
module.exports = {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        main: '#efebe0',
        'text-main': '#2e2b26',
        link: '#8b4513',
        'link-hover': '#cd4416',
        'border-blockquote': '#666',
        'code-bg': '#dadada',
        'code-text': '#223244',
      },
      fontFamily: {
        body: ['"Noto Sans Mono"', 'monospace'],
        code: ['"Anonymous Pro"', 'monospace'],
      },
      fontSize: {
        base: '1.8em',
        h1: '2.4em',
        h2: '2em',
        h3: '1.6em',
        h4: '1.4em',
        h5: '1.2em',
        h6: '1em',
      },
      letterSpacing: {
        normal: '0.032em',
        heading: '0.024em',
      },
      spacing: {
        '1.4': '1.4rem',
        '1.6': '1.6rem',
        '1.8': '1.8rem',
        '2.4': '2.4rem',
        '3.2': '3.2rem',
      },
      maxWidth: {
        container: '120rem',
      },
    },
  },
  plugins: [],
}

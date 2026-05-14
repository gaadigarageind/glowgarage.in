@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;700;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  
  --color-gold-400: #FBBF24;
  --color-gold-500: #F59E0B;
  --color-gold-600: #D97706;
}

body {
  @apply bg-zinc-950 text-zinc-300 font-sans antialiased overflow-x-hidden;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-heading text-white;
}

/* Custom scrollbar for a premium feel */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-zinc-950;
}
::-webkit-scrollbar-thumb {
  @apply bg-zinc-800 rounded-full;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-zinc-700;
}

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ["var(--font-raleway)", "sans-serif"],
		},
		borderRadius: {
		  "10": "10px",
		},
		colors: {
		  primary: "#0846A6",
		  white: {
			700: "#F9FAFC",
			DEFAULT: "#ffffff",
		  },
		  grey: {
			100: "#F5F5F5",
			200: "#8F92A1",
			400: "#D4D4D4",
			500: "#D9D9D9",
			600: "#78797A",
			700: "#979797",
			DEFAULT: "#232830",
		  },
		  red: {
			DEFAULT: "#DC3444",
		  },
		  green: {
			DEFAULT: "#00875A",
		  },
		  yellow: {
			DEFAULT: "#FBBC05",
		  },
		},
		spacing: {
		  18: "4.5rem",
		  22: "5.5rem",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  
  export default tailwindConfig;
  
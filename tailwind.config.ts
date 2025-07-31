// // import type {Config} from "tailwindcss";

// // const config: Config = {
// // 	darkMode: "class",
// // 	content: [
// // 		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
// // 		"./components/**/*.{js,ts,jsx,tsx,mdx}",
// // 		"./app/**/*.{js,ts,jsx,tsx,mdx}",
// // 		"./sanity/**/*.{js,ts,jsx,tsx,mdx}",
// // 	],
// // 	theme: {
// // 		extend: {
// // 			screens: {
// // 				xs: "475px",
// // 			},
// // 			colors: {
// // 				primary: {
// // 					"100": "#FFE8F0",
// // 					DEFAULT: "#EE2B69",
// // 				},
// // 				secondary: "#FBE843",
// // 				black: {
// // 					"100": "#333333",
// // 					"200": "#141413",
// // 					"300": "#7D8087",
// // 					DEFAULT: "#000000",
// // 				},
// // 				white: {
// // 					"100": "#F7F7F7",
// // 					DEFAULT: "#FFFFFF",
// // 				},
// // 			},
// // 			fontFamily: {
// // 				"work-sans": ["var(--font-work-sans)"],
// // 			},
// // 			borderRadius: {
// // 				lg: "var(--radius)",
// // 				md: "calc(var(--radius) - 2px)",
// // 				sm: "calc(var(--radius) - 4px)",
// // 			},
// // 			boxShadow: {
// // 				100: "2px 2px 0px 0px rgb(0, 0, 0)",
// // 				200: "2px 2px 0px 2px rgb(0, 0, 0)",
// // 				300: "2px 2px 0px 2px rgb(238, 43, 105)",
// // 			},
// // 		},
// // 	},
// // 	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
// // };

// // export default config;
// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         xs: "475px",
//       },
//       colors: {
//         primary: {
//           "100": "#FFE8F0",
//           DEFAULT: "#EE2B69",
//         },
//         secondary: "#FBE843",
//         black: {
//           "100": "#333333",
//           "200": "#141413",
//           "300": "#7D8087",
//           DEFAULT: "#000000",
//         },
//         white: {
//           "100": "#F7F7F7",
//           DEFAULT: "#FFFFFF",
//         },
//       },
//      fontFamily: {
//   'work-sans': ['var(--font-work-sans)', 'sans-serif'],
// },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       boxShadow: {
//         100: "2px 2px 0px 0px rgb(0, 0, 0)",
//         200: "2px 2px 0px 2px rgb(0, 0, 0)",
//         300: "2px 2px 0px 2px rgb(238, 43, 105)",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
// };

// export default config;

// import type {Config} from "tailwindcss";

// const config: Config = {
//     darkMode: "class",
//    content: [
//   "./app/**/*.{ts,tsx}",
//   "./components/**/*.{ts,tsx}",
//   "./styles/**/*.{css,scss}",
//   "./**/*.{js,ts,jsx,tsx}"
// ],

//     theme: {
//         extend: {
//             screens: {
//                 xs: "475px",
//             },
//             colors: {
//                 primary: {
//                     "100": "#FFE8F0",
//                     DEFAULT: "#EE2B69",
//                 },
//                 secondary: "#FBE843",
//                 black: {
//                     "100": "#333333",
//                     "200": "#141413",
//                     "300": "#7D8087",
//                     DEFAULT: "#000000",
//                 },
//                 white: {
//                     "100": "#F7F7F7",
//                     DEFAULT: "#FFFFFF",
//                 },
//             },
//             fontFamily: {
//                 "work-sans": ["var(--font-work-sans)"],
//             },
//             borderRadius: {
//                 lg: "var(--radius)",
//                 md: "calc(var(--radius) - 2px)",
//                 sm: "calc(var(--radius) - 4px)",
//             },
//             boxShadow: {
//                 100: "2px 2px 0px 0px rgb(0, 0, 0)",
//                 200: "2px 2px 0px 2px rgb(0, 0, 0)",
//                 300: "2px 2px 0px 2px rgb(238, 43, 105)",
//             },
//         },
//     },
//     plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
// };

// export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css,scss}",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#FFE8F0",
          DEFAULT: "#EE2B69",
        },
        secondary: "#FBE843",
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(238, 43, 105)",
      },

      // ✅ Add this section 👇
      animation: {
        'star-movement-bottom': 'star-movement-bottom 6s linear infinite alternate',
        'star-movement-top': 'star-movement-top 6s linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;

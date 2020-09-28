module.exports = {
	purge: process.env.NODE_ENV === "production" && {
		content: [
			"./src/**/*.svelte",
			"./src/**/*.html",
			"./src/**/*.css",
			"./index.html",
		],
		options: {
			whitelistPatterns: [/svelte-/],
			defaultExtractor: (content) => {
				const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
				const matchedTokens = [];
				let match = regExp.exec(content);
				while (match) {
					if (match[0].startsWith("class:")) {
						matchedTokens.push(match[0].substring(6));
					} else {
						matchedTokens.push(match[0]);
					}
					match = regExp.exec(content);
				}
				return matchedTokens;
			},
		},
	},
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1440px",
		},
		fontFamily: {
			raj: ["Rajdhani", "sans-serif"],
			ano: ["anonymous-pro"],
			body: ["Giorgio"],
			lato: ["Lato"],
			robot: ['Roboto', "sans-serif"]
		},
		fontSize: {
			tiny: ["8px", "16px"],
			xs: ["10px", "18px"],
			sm: ["12px", "20px"],
			base: ["16px", "24px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
			"2xl": ["28px", "36px"],
			"3xl": ["32px", "40px"],
		},
		extend: {
			backgroundImage: (theme) => ({
				gmail: "url('/assets/icons/favicon-32x32.png')",
			}),
			colors: {
				amarillo: {
					lighter: "#404995",
					default: "#F7C705",
					dark: "#17C905",
				},
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
			},
		},
	},
	variants: {},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};

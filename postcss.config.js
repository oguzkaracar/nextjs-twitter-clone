module.exports = {
	plugins: {
		"postcss-nested": {},
		"postcss-custom-media": {
			importFrom: [
				{
					customMedia: { "--t": "(min-width: 1005px)" },
				},
				{
					customMedia: { "--d": "(min-width: 1265px)" },
				},
			],
		},
	},
};

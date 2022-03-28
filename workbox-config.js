module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,svg,jpg,png,json,js,ttf,md,jpeg,webp}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swSrc: 'service-worker.js'
};

module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'babel-plugin-root-import',
				{
					rootPathSuffix: 'app/',
					rootPathPrefix: '@/'
				}
			],
			['nativewind/babel'],
			[
				'module:react-native-dotenv',
				{
					envName: 'APP_ENV',
					moduleName: '@env',
					path: '.env',
					safe: false,
					allowUndefined: true,
					verbose: false
				}
			],
			['react-native-reanimated/plugin']
		]
	}
}

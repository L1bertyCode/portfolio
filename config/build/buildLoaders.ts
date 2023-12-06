import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export function buildLoaders(
	isDev: boolean
): RuleSetRule[] {
	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
				plugins: [
					[
						"i18next-extract",
						{
							locales: ["en", "ru"],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	};
	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};
	const scssLoader = {
		test: /\.(saas|scss|less|css)$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: /\.module\.\w+$/i,
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:8]",
					},
				},
			},
			"sass-loader",
		],
	};
	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};
	return [
		fileLoader,
		babelLoader,
		tsLoader,
		scssLoader,
		svgLoader,
	];
}

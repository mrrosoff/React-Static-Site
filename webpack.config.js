const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputDirectory = "dist";
const mode = process.env.NODE_ENV || "development";

module.exports = {
	entry: "./index.js",
	devServer: {
		static: { directory: path.resolve(__dirname, outputDirectory) },
		port: 3000,
		open: true,
		hot: true
	},
	devtool: "eval-source-map",
	mode: mode,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: { presets: ["@babel/react"] }
			},
			{ test: /\.css$/i, use: ["style-loader", "css-loader"] },
			{
				test: /\.s[ac]ss$/i,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "postcss-loader",
						options: { postcssOptions: { plugins: ["autoprefixer", "precss"] } }
					},
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif|mp4|wav|mp3)$/i,
				loader: "file-loader"
			}
		]
	},
	output: { filename: "bundle.js", path: path.join(__dirname, outputDirectory) },
	plugins: [
		new HtmlWebpackPlugin({
			template: "./static/template/index.html",
			favicon: "./static/template/favicon.ico",
			title: "React-Express-Template"
		}),
		new webpack.DefinePlugin({ IS_DEVELOPMENT: mode === "development" })
	],
	stats: "minimal"
};

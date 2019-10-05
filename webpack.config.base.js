"use strict";

import path from 'path';
import { dependencies as externals } from './package.json';

export default {

	output: {
		path: path.join(__dirname, 'dist', 'renderer'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
				
			},
			{
				test: /\.scss$/,
				use: [
				  'vue-style-loader',
				  'css-loader',
				]
			  }

		],
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			  }, 
			  {
				  test: /\.s[a|c]ss$/,
				  loader: 'style!css!sass'
			  }
		]
	},

	plugins: [],

	optimization: {
		// true by default for production
		// https://github.com/babel/minify probably does not work (outputs are even bigger)
		// minimize: false
	},

	externals: Object.keys(externals || {}),

};

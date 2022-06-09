/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import path from "path";

import {aliasItems, devServerUrl, externalItems} from "./config";
import entry                                     from "./entry";
import optimization                              from "./optimization";
import * as pluginList                           from "./plugins";
import * as rules                                from "./rules";
import {isDevServer, isProd}                     from "./utils/env";
import {arrayFilterEmpty}                        from "./utils/helpers";

const plugins = isProd ? arrayFilterEmpty([
  pluginList.htmlWebpackPlugin,
  pluginList.providePlugin,
  pluginList.definePlugin,
  pluginList.forkTsCheckerWebpackPlugin,
  pluginList.esLintPlugin,
  // pluginList.copyPlugin,
]) : arrayFilterEmpty([
  pluginList.htmlWebpackPlugin,
  pluginList.providePlugin,
  pluginList.definePlugin,
  pluginList.forkTsCheckerWebpackPlugin,
  pluginList.esLintPlugin,
  pluginList.webpackbarPlugin,
  // pluginList.copyPlugin,
]);

export default {
  context:   __dirname,
  target:    isDevServer ? "web" : ["web", "es6"],
  mode:      isProd ? "production" : "development",
  entry,
  output:    {
    path:       path.join(__dirname, "../dist"),
    publicPath: isDevServer ? devServerUrl : "/",
    filename:   isDevServer
                ? "[name].[fullhash].js"
                : "[name].[contenthash].js",
  },
  module:    {
    rules: arrayFilterEmpty([
      rules.javascriptRule,
      rules.typescriptRule,
      rules.htmlRule,
      // rules.imagesRule,
      rules.fontsRule,
      rules.cssRule,
      ...rules.sassRules,
      ...rules.svgRules,
    ]),
  },
  plugins:   plugins,
  resolve:   {
    alias:      aliasItems,
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  optimization,
  externals: externalItems,
};

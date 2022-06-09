/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from "path";

import {rootDir} from "../utils/env";

export const aliasItems = {
  "$actions":    join(rootDir, "/src/actions"),
  "$components": join(rootDir, "/src/components"),
  "$config":     join(rootDir, "/src/config"),
  "$elements":   join(rootDir, "/src/elements"),
  "$features":   join(rootDir, "/src/features"),
  "$layouts":    join(rootDir, "/src/layouts"),
  "$models":     join(rootDir, "/src/models"),
  "$pages":      join(rootDir, "/src/pages"),
  "$plugins":    join(rootDir, "/src/plugins"),
  "$routes":     join(rootDir, "/src/routes"),
  "$scss":       join(rootDir, "/src/assets/scss"),
  "$services":   join(rootDir, "/src/services"),
  "$store":      join(rootDir, "/src/store"),
  "$types":      join(rootDir, "/src/types"),
  "$utils":      join(rootDir, "/src/utils"),
};

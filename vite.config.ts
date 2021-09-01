import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { each, trimEnd } from "lodash";
import path from "path";
import pathsAliasJson from "./tsconfig.paths.json";

function convertTsPathAlias() {
  const pathAlias = {};

  each(pathsAliasJson.compilerOptions.paths, (targetPaths, aliasName) => {
    each(targetPaths, (targetPath) => {
      const matched = targetPath.match(/src(.*)\/\*/);
      if (matched[1]) {
        // eslint-disable-next-line no-param-reassign
        aliasName = trimEnd(aliasName, "/*");
        pathAlias[aliasName] = path.join(__dirname, "src", matched[1]);
      }
    });
  });

  return pathAlias;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      ...convertTsPathAlias(),
    },
  },
});

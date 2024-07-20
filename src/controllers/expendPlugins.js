import { chart } from '../expendPlugins/chart/plugin';
import { print } from '../expendPlugins/print/plugin';
import { exportExcel } from '../expendPlugins/exportExcel/plugin';
import { uploadExcel } from '../expendPlugins/uploadExcel/plugin';
const pluginsObj = {
  chart: chart,
  print: print,
  exportExcel: exportExcel,
  uploadExcel: uploadExcel,
};

const isDemo = true;

/**
 * Register plugins
 */
function initPlugins(plugins, data) {
  if (plugins.length) {
    plugins.forEach((plugin) => {
      pluginsObj[plugin](data, isDemo);
    });
  }
}

export { initPlugins };

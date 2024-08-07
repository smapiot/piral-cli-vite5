import * as actions from './actions';
import type { CliPlugin } from 'piral-cli';

const plugin: CliPlugin = (cli) => {
  cli.withBundler('vite5', actions);
};

module.exports = plugin;

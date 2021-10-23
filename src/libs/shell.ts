import shell from 'shelljs';
import { pfInfo } from './cliPrintFormat';

const execWithExit = (cmd: string) => {
  const { code } = shell.exec(cmd);
  if (code) {
    shell.exit(code);
  }
};

/**
 * NPM: install dependencies
 */
const ni = (packages: string) => {
  shell.echo(pfInfo('> NPM: install dependencies:'));
  shell.echo(pfInfo(`> ${packages}`));
  execWithExit(`npm install  --no-progress ${packages}`);
};

/**
 * NPM: install dev dependencies
 */
const nid = (packages: string) => {
  shell.echo(pfInfo('> NPM: install dev dependencies:'));
  shell.echo(pfInfo(`> ${packages}`));
  execWithExit(`npm install --no-progress --save-dev ${packages}`);
};

export default { ...shell, execWithExit, ni, nid };

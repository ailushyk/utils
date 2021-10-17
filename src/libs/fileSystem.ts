import fs from 'fs';
import rimraf from 'rimraf';
import { echo } from 'shelljs';
import { pfError } from './cliPrintFormat';
import path from 'path';

const mkdir = (path: string): void => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

const rmfr = (rmPath: string) => {
  if (path.isAbsolute(rmPath)) {
    echo(pfError(`The build path cannot be absolute`));
    return;
  }
  rimraf.sync(rmPath);
};
export { mkdir, rmfr };

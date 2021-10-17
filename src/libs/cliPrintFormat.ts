import chalk from 'chalk';

const pfInfo = (message: string): string => {
  return chalk(message);
};

const pfSuccess = (message: string): string => {
  return chalk.green(message);
};

const pfWarning = (message: string): string => {
  return chalk.yellow(message);
};

const pfError = (message: string): string => {
  return chalk.red(message);
};

export { pfInfo, pfSuccess, pfWarning, pfError };

import { Command } from 'commander';

export const build = (): Command => {
  const program = new Command();
  program.name('build');
  program.action(() => {
    console.log('npm run build!');
  });
  return program;
};

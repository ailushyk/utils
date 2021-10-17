import { Command } from 'commander';
import { pfInfo, pfSuccess, pfWarning, rmfr } from '../libs';
import shell from '../libs/shell';

interface CommandOptions {
  cleanBuild?: string;
}

export const publishCommand = (): Command => {
  const program = new Command();

  program.name('publish');
  program.option('--clean-build <build-dir>', 'Clean up build directory', '');

  program.action(() => {
    const options: CommandOptions = program.opts();
    const outDir = options.cleanBuild ? options.cleanBuild || 'build' : '';

    if (outDir) {
      shell.echo(pfInfo(`> Cleaning ${pfWarning(outDir)} directory`));
      rmfr(outDir);
    }

    shell.echo(pfInfo('> Building'));
    shell.execWithExit('npm run build');

    shell.echo(pfInfo('> Publishing'));
    shell.execWithExit('npm publish');

    shell.echo(pfSuccess('Your package has been published successfully 💯'));
  });
  return program;
};

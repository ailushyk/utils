import { Command } from 'commander';
import { build } from './build';

const program = new Command();
program.name('utils');
program.addCommand(build());

program.action(() => {
  console.log('run program');
  program.help();
});

program.parse(process.argv);

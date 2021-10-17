import { Command } from 'commander';
import { publishCommand } from './publishCommand';
import { config } from 'dotenv';

config();

const program = new Command();
program.name('utils');
program.addCommand(publishCommand());

program.action(() => {
  program.help();
});

program.parse(process.argv);

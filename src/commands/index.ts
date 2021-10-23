import { Command } from 'commander';
import { config } from 'dotenv';
import { publishCommand } from './publishCommand';
import { setupCodeStyle } from './setupCodeStyle';

config();

const program = new Command();
program.name('utils');
program.addCommand(publishCommand());
program.addCommand(setupCodeStyle());

program.action(() => {
  program.help();
});

program.parse(process.argv);

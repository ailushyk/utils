import path from 'path';
import shell from '../libs/shell';
import { Command } from 'commander';
import { getTemplatesPath } from '../libs';

const packages = [
  'eslint',
  'prettier',
  'eslint-config-prettier',
  'eslint-plugin-prettier',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
];

export const setupCodeStyle = (): Command => {
  const program = new Command();
  program.name('setup-code-style');

  program.action(() => {
    shell.nid(packages.join(' '));

    shell.cp(
      [
        path.join(getTemplatesPath(), 'codeStyle/.eslintrc.json'),
        path.join(getTemplatesPath(), 'codeStyle/.prettierrc.json'),
      ],
      '.'
    );
  });

  return program;
};

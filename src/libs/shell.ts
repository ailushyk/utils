import shell from 'shelljs';

const execWithExit = (cmd: string) => {
  const { code } = shell.exec(cmd);
  if (code) {
    shell.exit(code);
  }
};

export default { ...shell, execWithExit };

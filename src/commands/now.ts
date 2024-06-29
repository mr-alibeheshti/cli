import { Command, Flags } from '@oclif/core';
import moment from 'moment';

export default class Now extends Command {
  static description = 'Displays the current datetime';

  static examples = [
    '$ alibcli now',
    '$ alibcli now --unix',
  ];

  static flags = {
    unix: Flags.boolean({ default: false, description: 'Output in UNIX format' }),
  };

  async run() {
    const { flags } = await this.parse(Now);
    const { unix } = flags;

    const now = moment();

    if (unix) {
      console.log(now.unix());
    } else {
      console.log(now.format('YYYY-MM-DD HH:mm:ss'));
    }
  }
}

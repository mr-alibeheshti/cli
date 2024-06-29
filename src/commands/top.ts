import { Command, Flags } from '@oclif/core';
import axios from 'axios';
import open from 'open';

export default class Top extends Command {
  static description = 'Fetches top HackerNews posts';

  static examples = [
    '$ alibcli top -n 10',
    '$ alibcli top -n 2 -f json',
  ];

  static flags = {
    format: Flags.string({ char: 'f',default: 'text', description: 'Output format (json or text)' }),
    number: Flags.integer({ char: 'n', default: 10, description: 'Number of top posts' }),
  };

  async run() {
    const { flags } = await this.parse(Top);
    const { format, number } = flags;

    try {
      if (number === 10) {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const topIds = response.data.slice(0, number);
        const promises = topIds.map((id: number) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
        const results = await Promise.all(promises);

        if (format === 'json') {
          this.log(
            JSON.stringify(
              results.map(r => r.data),
              null,
              2
            )
          );
        } else {
          for (const [index, result] of results.entries()) {
            const post = result.data;
            this.log(`${index + 1}. ${post.title} (Score: ${post.score})`);
          }
        }
      } else {
        open(`https://news.ycombinator.com/item?id=${number}`);
      }
    } catch (error) {
      this.error(`Error fetching top stories: ${error}`);
    }
  }
}

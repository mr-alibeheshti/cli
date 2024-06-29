import { Command } from '@oclif/core';
import axios from 'axios';

export default class Weather extends Command {
  static description = 'Displays the current weather';

  async run() {
    try {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=4a094b7f55fd4f1b959125725242606&q=auto:ip');
      const weather = response.data.current;
      this.log(`Current temperature: ${weather.temp_c}°C, Condition: ${weather.condition.text}`);
    } catch (error) {
      this.error(`Error fetching weather data: ${error}`);
    }
  }
}

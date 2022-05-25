import axios from 'axios';
import schedule from 'node-schedule';
import {
  sleep
} from './utils';
import { INance } from './types';
import config from './config/dev/config.dev';
import { Nance } from './nance';
import logger from './logging';
import { CalendarHandler } from './calendar/CalendarHandler';

async function getConfigs() {
  const nance = new Nance(config);
  await sleep(2000);
  nance.setDiscussionInterval(10);
}

getConfigs();

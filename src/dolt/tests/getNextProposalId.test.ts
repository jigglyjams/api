import { doltConfig, getConfig } from '../../configLoader';
import { DoltHandler } from '../doltHandler';
import { dbOptions } from '../dbConfig';

async function main() {
  const { config } = await doltConfig('thirstythirsty');
  const dolt = new DoltHandler(dbOptions(config.dolt.repo), config.propertyKeys);
  // const proposals = await dolt.getDiscussionProposals();
  // console.log(proposals);
  // console.log(await dolt.assignProposalIds(proposals));
  dolt.getNextProposalId().then((id) => {
    console.log(id);
  });
}

main();

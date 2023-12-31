import { myProvider } from '../../utils';
import { JuiceboxHandlerV3 } from '../juiceboxHandlerV3';

async function main() {
  const juice = new JuiceboxHandlerV3('1', myProvider('mainnet'));
  console.log(await juice.getDistributionLimit());
}

main();

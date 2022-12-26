import algosdk, { mnemonicToSecretKey } from 'algosdk';
import { key } from './utils/constants';
import createAccount from './utils/createAccount';
import createTransaction from './utils/createTransaction';

console.log(key);
const myAccount = mnemonicToSecretKey(key);

createTransaction(myAccount);

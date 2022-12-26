import algosdk, { mnemonicToSecretKey } from 'algosdk';
import { key } from './utils/constants';
import { createNFT } from './utils/createNft';
import createTransaction from './utils/createTransaction';

const myAccount = mnemonicToSecretKey(key);

// createTransaction(myAccount);

createNFT(myAccount);

import algosdk, { mnemonicToSecretKey } from 'algosdk';
import { KEY, WALLET_KEY } from './utils/constants';
import { createNFT } from './utils/createNft';
import createTransaction from './utils/createTransaction';

// const myAccount = mnemonicToSecretKey(KEY);

const wallet = mnemonicToSecretKey(WALLET_KEY);

// createTransaction(myAccount);

createNFT(wallet);

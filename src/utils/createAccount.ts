import algosdk from 'algosdk';

// Create an account and add funds to it. Copy the address off
// The Algorand TestNet Dispenser is located here:
// https://dispenser.testnet.aws.algodev.network/

export default () => {
  try {
    const myaccount = algosdk.generateAccount();
    console.log('Account Address = ' + myaccount.addr);
    let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
    console.log('Secret Key = ' + myaccount.sk);
    console.log('Account Mnemonic = ' + account_mnemonic);
    console.log('Account created. Save off Mnemonic and address');
    console.log('Add funds to account using the TestNet Dispenser: ');
    console.log(
      'https://dispenser.testnet.aws.algodev.network?account=' + myaccount.addr
    );

    return myaccount;
  } catch (err) {
    console.log('err', err);
  }
};

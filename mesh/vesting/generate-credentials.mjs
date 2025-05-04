import fs from 'node:fs';
import {
  MeshWallet,
} from "@meshsdk/core";
 
 
// Generate a secret key for the owner wallet and beneficiary wallet
const owner_secret_key = MeshWallet.brew(true);
const beneficiary_secret_key = MeshWallet.brew(true);
 
//Save secret keys to files
fs.writeFileSync('owner.sk', owner_secret_key);
fs.writeFileSync('beneficiary.sk', beneficiary_secret_key);
 
const owner_wallet = new MeshWallet({
  networkId: 0,
  key: {
    type: 'root',
    bech32: owner_secret_key,
  },
});
 
const beneficiary_wallet = new MeshWallet({
  networkId: 0,
  key: {
    type: 'root',
    bech32: beneficiary_secret_key,
  },
});
 
// Save unused addresses to files 
//const ownerAddr = owner_wallet.getUnusedAddresses()[0];
//const beneficiaryAddr = beneficiary_wallet.getUnusedAddresses()[0];
fs.writeFileSync("owner.addr", (await owner_wallet.getUnusedAddresses())[0]);
fs.writeFileSync("beneficiary.addr", (await beneficiary_wallet.getUnusedAddresses())[0]);
//console.log('Owner addr:', ownerAddr);
//console.log('Beneficiary addr:', beneficiaryAddr);

//if (ownerAddr) {
//  fs.writeFileSync('owner.addr', ownerAddr);
//} else {
  //console.error('Owner address not available.');
//}

//if (beneficiaryAddr) {
 // fs.writeFileSync('beneficiary.addr', beneficiaryAddr);
//} else {
 // console.error('Beneficiary address not available.');
//}

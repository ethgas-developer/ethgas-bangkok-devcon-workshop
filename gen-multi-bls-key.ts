import { bls12_381 as bls } from '@noble/curves/bls12-381';
import * as utils from '@noble/curves/abstract/utils';
import fs from 'fs';

async function main() {
    let arr = []
    for (let i = 0; i <= 10; i++) {
        const privKey = bls.utils.randomPrivateKey()
        arr.push(utils.bytesToHex(privKey))
        console.log("BLS private key:", utils.bytesToHex(privKey))
        console.log("BLS pub key:", utils.bytesToHex(bls.getPublicKey(privKey)))
    }
    fs.writeFileSync('keys.json', JSON.stringify(arr));

}
main();
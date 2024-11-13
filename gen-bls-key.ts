import { bls12_381 as bls } from '@noble/curves/bls12-381';
import * as utils from '@noble/curves/abstract/utils';

function main() {
    const privKey = bls.utils.randomPrivateKey()
    console.log("BLS private key:", utils.bytesToHex(privKey))
}
main();
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift radar screen come hunt office army giggle'; 
let testAccounts = [
"0x3e29e81ddda9cbd7b4f3a3a9e987399a832c6e85a5e49d91b002d9bcd290a409",
"0x29f5476e795c4c1077de82bb71992cbcdc36d7e0b6b788ee5dc730087836317c",
"0x6b6226df2967c615c17d59f72bbd0246edf7bf9bab289f6c531dd4cee185b71f",
"0xa95f0dd9152acbcd1b7390efc74ab0dbfbf8449f298ecd1a3d1aa5a8cff45d90",
"0x8f1c78fe7e1ebf37e4dc4bd0d503c59f2a17d2ffd2b094d59341a2673857ccfd",
"0x9c85f1867ce0bae71481a7771156ff436d4dd53c8877c9e6653cff7e3b98dd18",
"0xeb719ca4d880842f43a3f903bfc31fda19368afd03bc1e149c30133cdc04cfa8",
"0x15f2cc1618a98d57b92e219de90e271548660e1d4847e6b4e1395a692099c7d3",
"0xa51157f15aa400cc0dbdb77bb008b9b01b0f1599e6b157ea10ce95a15dcf82f4",
"0x22c038ffca1d242d87ce33c835eebef864ac981021e22023e40c32177d4ac069"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strong riot sister property hunt brass equal genius'; 
let testAccounts = [
"0x23df8f8187f696cb2a96593e4da7b62590837632779dd6867413c66b31884e4b",
"0x5df93b8c095c5c6755b7d904391841d6833e226578400f9650423ca89dfff25c",
"0xd18f2d85a33f84742ce46d47e1500192bff40befd2425db764856c1c0a48de3c",
"0xad33add492d9fc2bdcce0e70546c4ca5cfa135fcc44856a976b01a247daf6ac1",
"0xfa55f4323a566a2b15e0c756774af6d3206e8ca4f6cf4c3fd54ab3069f7ea8cd",
"0x2f33e5abdf25363e10134f63dd4aac087b3485a0d29dcfe524527d7778a8b34e",
"0xc6f8a5c13746a0179e2e8385898e596af9be33e093f4334b371de1b58728bf10",
"0x0eeb6071f0c428eccb2d64e637fea0c01edc9c082158dfde9c6473354a386842",
"0xa88526dad44ac960ddaaca910b1be8e7edc34ecf326854fe43929f0c2680ca40",
"0xd398ad83de721e762a0620cadffc738f70add1c1f14788353a3d9695f34f8d41"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



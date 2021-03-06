module.exports = {
  nodeWS: 'wss://rpc-testnet.reefscan.com/ws',
  denom: 'REEF',
  decimalPlaces: 18,
  validator: 'VALIDATOR_STASH_ACCOUNT_ADDRESS', // VALIDATOR NAME TO BE IDENTIFIED
  password: 'YOUR_KEYSTORE_ACCOUNT_PASSWORD',
  accountJSON: './keystores/ACCOUNT_FILE.json', //JSON ACCOUNT FILE EXPORTED FROM PolkadotJS Extension
  log: true,
}

const axios = require('axios');
const accounts = require('../accounts');

const fundAccount = async accounts => 
  await Promise.all( 
    accounts.map( 
      async account => 
        await axios.get('/friendbot', {
          baseURL: 'https://horizon-testnet.stellar.org',
          params: { addr: account.publicKey }
        })
    )
  );

  fundAccount(accounts)
  .then(() => console.log('OK'))
  .catch(e => {
    console.log(e);
    throw e;
  });
  
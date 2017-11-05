var StellarSdk = require('stellar-sdk');

StellarSdk.Network.useTestNetwork();
var secretString='SAZQJONECVQRXYH27GFOQCRVSGSLUR3XFQMR3KSAOZXMQTPBPFFMGJ4W';

// create an Account object using locally tracked sequence number
var sequence = new Date().getTime().toString();
var an_account = new StellarSdk.Account("GDZTBZQJBVLQNCBHX4IYYZZ4GZJ2BXBYV3GG366JKDG3WSJQJVNX4O6V", sequence);

var transaction = new StellarSdk.TransactionBuilder(an_account)
    .addOperation(StellarSdk.Operation.createAccount({
      destination: "GCGY7OY7Y3MWBLPBAG33W27TQRPFS7PTYRN7DXTM5TNEW7Y6SF64A2CU",
      startingBalance: "20"  // in XLM
    }))
    .build();

transaction.sign(StellarSdk.Keypair.fromSecret(secretString)); // sign the transaction

// transaction is now ready to be sent to the network or saved somewhere
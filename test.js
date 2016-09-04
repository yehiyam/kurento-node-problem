'use strict'
var kurento = require('kurento-client');
var ws_uri= 'ws://localhost:8888/kurento';

function getClient() {
    return new Promise((resolve, reject) => {
        kurento(ws_uri, function (error, _kurentoClient) {
            if (error) {
                console.log("Could not find media server at address " + argv.ws_uri);
                return reject("Could not find media server at address" + argv.ws_uri
                    + ". Exiting with error " + error);
            }
            return resolve(_kurentoClient);

        });
    })
}


console.log('Trying to connect');
getClient().then(kurentoClient => {
    console.log('Connected')
}).catch(error => {
    console.log(error);
})



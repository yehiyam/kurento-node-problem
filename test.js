'use strict'
var kurento = require('kurento-client');
var chai = require('chai');
var expect = chai.expect;

var ws_uri= 'ws://localhost:8888/kurento';

function getClient() {
    return new Promise((resolve, reject) => {
        kurento(ws_uri, function (error, _kurentoClient) {
            if (error) {
                console.log("Could not find media server at address " + ws_uri);
                return reject("Could not find media server at address" + ws_uri
                    + ". Exiting with error " + error);
            }
            return resolve(_kurentoClient);

        });
    })
}


describe('try to connect',()=>{
    it('should return from the promise',done=>{
        getClient().then(kurentoClient => {
            console.log('Connected')
            done();
        }).catch(error => {
            console.log(error);
        })
    })
})




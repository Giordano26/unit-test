const assert = require('assert');
const internal = require('stream');

describe('bar.test.js', ()=>{
    context('function to be tested', ()=>{
        it('should do something', ()=>{
            assert.equal(1,1);
            console.log("ENV: ",process.env.NODE_ENV);
        });

        it('should do something else', ()=>{
            assert.deepEqual({name: 'joe'}, {name: 'joe'});
        });

        it('this is a pending test');

    });

    context('another function', ()=>{
        it('should do something');
    });
   
});

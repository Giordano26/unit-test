const chai = require('chai');
const expect = chai.expect;

let user = require('./user');

describe('user', ()=>{
    context('getFullAddress', ()=>{
        it('should return the full address', ()=>{
            let result = user.getFullAddress({
                street: '100 king', 
                city: 'London',
                province: 'ON',
                postal: '1111'
            });

            expect(result).to.equal('100 king, London, ON, 1111');
        });

        it('should return the full address', ()=>{
            let result = user.getFullAddress({
                street: '200 king', 
                city: 'London',
                province: 'ON',
                postal: '1111'
            });

            expect(result).to.equal('200 king, London, ON, 1111');
        });

        it('should return an error', ()=>{
            let result1 = user.getFullAddress({
                street: null,
                city: 'London',
                province: 'ON',
                postal: '11111'
            });

            let result2 = user.getFullAddress({
                street: '100 king',
                city: null,
                province: 'ON',
                postal: '11111'
            });

            let result3 = user.getFullAddress({
                street: '200 king',
                city: 'London',
                province: null,
                postal: '11111'
            });

            let result4 = user.getFullAddress({
                street: '200 king',
                city: 'London',
                province: 'ON',
                postal: null
            });

            expect(result1).to.equal('Invalid user');
            expect(result2).to.equal('Invalid user');
            expect(result3).to.equal('Invalid user');
            expect(result4).to.equal('Invalid user');
        });
    });
});
const { add, mul,div } = require('../src/script/math');
const {should,expect,assert} = require('chai');


//单元测试
describe('#math',()=>{
    describe('add',()=>{
        it('should return 5 when 2+3',()=>{
            assert.equal(add(2,3),5)
        })
    });
    describe('mul',()=>{
        it('should return 6 when 2*3',()=>{
            assert.equal(mul(2,3),6)
        })
    });
    describe('div',()=>{
        it('should return 3 when 9*3',()=>{
            assert.equal(div(9,3),3)
        })
    });
})

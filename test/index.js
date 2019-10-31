const { add, mul } = require('../src/script/math');
const {should,expect,assert} = require('chai');
const assertc = require('assert');
//普通方法1
// if (add(2, 3) === 5) {
//     // eslint-disable-next-line no-console
//     console.log("ok");
// } else {
//     // eslint-disable-next-line no-console
//     console.log("error");
// }

//方法2 asserts
// assertc.equal(add(2, 3),6);//不等则报错

//方法3 chai.should
// should();
// add(2, 3).should.equal(5);

//方法4 chai.expect
// expect(add(2, 3)).to.equal(6);

//方法5 chai.assert
assert.equal(add(2, 3),5)




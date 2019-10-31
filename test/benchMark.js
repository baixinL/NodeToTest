const {num1,num2} = require('../src/script/fn');
const Benchmark = require('Benchmark');
// const s1 = Date.now();
// for(let i=0;i<10000;i++)
// {
//     num1(123456)
// }
// const e1 = Date.now();
// // eslint-disable-next-line no-console
// console.log(e1-s1);
// const s2 = Date.now();
// for(let i=0;i<10000;i++)
// {
//     num2(123456)
// }
// const e2 = Date.now();
// // eslint-disable-next-line no-console
// console.log(e2-s2);

var suite = new Benchmark.Suite;
suite.add('floatInt',()=>{
    num1('123456')
})
    .add('Number',()=>{
        num2('123456')
    })
    .on('cycle', event=> {
        // eslint-disable-next-line no-console
        console.log('cycle ' +String(event.target));
    })
    .on('complete', function() {
        // eslint-disable-next-line no-console
        console.log('complete Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });


const log = console.log;
// Arrary.reduce()
// 简单使用
log([1, 2, 3, 4].reduce((accumulator, currentValue) => {
  log(`执行：${accumulator}`)
  // return accumulator;
  return accumulator + currentValue;
}, 0))
// 转化二维数组
log([[1, 2], [3, 4], [5, 6]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []));
// 计算数组每个元素出现次数
log(['alice', 'bob', 'tiff', 'bruce', 'alice'].reduce((accumulator, currentValue)=> {
  !accumulator[currentValue] ? accumulator[currentValue] = 1 : accumulator[currentValue]++;
  return accumulator;
}, {}))
// 按属性对Object分类
log([{name: 'alice', age: 21}, {name: 'max', age: 20}, {name: 'jane', age: 20 }].reduce((accumulator, currentValue)=>{
  !accumulator[currentValue.age] ? accumulator[currentValue.age] = [currentValue] : accumulator[currentValue.age].push(currentValue);
  return accumulator;
}, {}))
// 数组去重
log([1, 2, 3, 4, 5, 3, 6, 1].reduce((accumulator, currentValue) => {
  accumulator.indexOf(currentValue) < 0 && accumulator.push(currentValue);
  return accumulator;
}, []))
// 数组去重v2 Set&Array.from();
log(Array.from(new Set([1, 2, 3, 4, 5, 6, 3, 5])))
// 偏函数
const double = x => x * 2;
const triple = x => x * 3;
const quadruple = x => x * 4;

const pipe = (...functions) => input => functions.reduce(
  (acc, fn) => fn(acc),
  input
)

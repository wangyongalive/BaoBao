// fn.bind().bind(a) 等于
let fn2 = function fn1() {
  return function () {
    return fn.apply()
  }.apply(10)
}
fn2()

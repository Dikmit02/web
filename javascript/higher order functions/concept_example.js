function f1(){
    function f2(){
        return 5;//this will wxwcute because of let p=x();
    }
  return f2;
}

let x=f1();
console.log(f1)
console.log(f1())
console.log(x)

let p=x();
console.log(x)
console.log(x())
console.log(p)// 5
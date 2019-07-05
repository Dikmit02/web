function f1(){
    function f2(){
        return 5;//this will wxwcute because of let p=x();
    }
  return f2;
}

let x=f1();
let p=x();
console.log(p)// 5
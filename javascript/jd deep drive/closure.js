function county(){
    var iniiii=1;
    function plus(){
        console.log(++iniiii);
    }
    return plus;
}
var jiji=county()
jiji();
jiji();

console.log("\n");
function counter(val){
    function plus(){
        console.log(++val);
    }
    return plus;
}
var d=counter(10)
d();
d();


console.log("\n");
function createCounter(initVal,deltaval){
    return{
        up(){
            initVal+=deltaval;
            console.log(initVal);
        },
        down(){
            initVal-=deltaval;
            console.log(initVal);
        }
    }
}
var c=createCounter(10,2)
c.up();
c.up();
c.down();
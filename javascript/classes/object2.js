let obj={
    aNumber:123,
    aString:"asad",
    aFunction:function(){
        return (this.aNumber+this.aString);
        //console.log(this.aNumber+this.aString)
        // this used to refer the object itself
    }
}
console.log(obj.aFunction)//[Function: aFunction
console.log(obj.aFunction())//123asad undefined
// undefined because the function isnot returning anyhting for line 7

console.log(obj.aFunction())// line 5
// in js the call is always call by value 

var winner="harry potter"
function changedWinner(winner){
    console.log("te old winner was "+winner);
    winner="Ron Wisley"
    console.log("te new winner is "+winner);
}
console.log("The winner  "+winner);
changedWinner(winner)
console.log("now the winner is "+winner);
console.log("\n");


// look like call by refrence but actually it is call by refrence only 
//in any non primitive datatype we can use reftrence scheme
// we pass by a value but the value is itself is a refrence towhen we have an array or objects 
// any change leads to the change to the original data itself

var quickwinner=["harry",'ron','hermoine']// quickwinner refers to x , x refer to array and the winner refers to the array
function changedWinnersss(winner){
    quickwinner[0]="  potter"
    quickwinner[1]=" Wisley"
    quickwinner[2]=" girly"
}
console.log("The winner were "+quickwinner);
changedWinnersss(quickwinner)
console.log("now the winner was "+quickwinner);

// higher order function are those fujction which takes either function as an argument or returns the functon as an argumment
function greeter(){
    console.log("Hello!")
}
let hellosayer=greeter
console.log(hellosayer==greeter)
greeter();
hellosayer()

//we can treatt function like objects  chage refrence to other object
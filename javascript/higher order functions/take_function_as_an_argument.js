function getfirstname(fullname){
    return fullname.split(" ")[0]
}
function greeter(findname,fullname){
    let firstname=findname(fullname)
    console.log("Hello "+firstname)
}
greeter(getfirstname,"DIKSHA MITTAL")
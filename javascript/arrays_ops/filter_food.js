let menu=[
    "Paneer Tikka",
    "Onion Rings",
    "Garlic Naan",
    "Chicken Tandoori",
    "Egg Curry"
]
// let diksha=[
//     "Tikka",
//     "Rings",
//     "Naan",
//     "Tandoori",
//     "Curry"
// ]
function isveg(food){
    if(food.toLowerCase().indexOf("chicken")!==-1) return false;
    if(food.toLowerCase().indexOf("egg")!==-1) return false;
    return true;

}
function onionGarlicFree(food){
    if(food.toLowerCase().indexOf("garlic")!==-1) return false;
    if(food.toLowerCase().indexOf("onion")!==-1) return false;
    return true;
    
}
let vegMenu=menu.filter(isveg)
//let vegMenu=diksha.filter(isveg)
let jainMenu=menu.filter(isveg).filter(onionGarlicFree)
console.log("Menu: "+menu)
console.log("Veg Menu: "+vegMenu)
console.log("Jain Menu: "+jainMenu)

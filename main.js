//let groceryList = [];
// while(true){
// console.log(chooseOption);
// if(chooseOption.toLowerCase() === "add item") {
// //// let addItem = prompt("Add items to your grocery list:");
// let present = false;
// for(let i = 0; i < groceryList.length; i++){
//     if(groceryList[i].toLowerCase() === addItem.toLowerCase()) {
//         console.log("Item is already present");
//         present = true;
//         break;
//     }
// }
// if(!present){
//     groceryList.push(addItem);
// }
// }
// if(chooseOption.toLowerCase() === "search item") {
//     //// let searchItem = prompt("Search for an item on your grocery list:");
//     let found = false;
//     for(let i = 0; i < groceryList.length; i++) {
//         if(groceryList[i].toLowerCase() === searchItem.toLowerCase()) {
//             console.log("Found");
//             found = true;
//             break;
//         }
//     }
//     if(!found) {
//         console.log("Not found");
//     }
// }
// if(chooseOption.toLowerCase() === "remove item") {
//     let found = false;
//     //// let removeItem = prompt("Enter the item to remove from your grocery list:");
//     for(let i = 0; i < groceryList.length; i++) {
//         if(groceryList[i].toLowerCase() === removeItem.toLowerCase()) {
//             groceryList.splice(i, 1);
//             console.log("Item removed");
//             found = true;
//             break;
//         }
//     }
//     if(!found) {
//         console.log("Item does not exist.");
//     }
// }
// if(chooseOption.toLowerCase() === "quit") {
//     break;
// }
// }

let grocery = []

    let userInput = document.getElementById("userInput");
    let groceryList = document.getElementsByClassName("groceryList")[0];

function addGroceries() {
    let items = userInput.value;
    let li = document.createElement('li');
    li.textContent = items;
    groceryList.appendChild(li);
    li.addEventListener('click', groceryStrikethrough)
} 
function groceryStrikethrough(event){
    event.currentTarget.classList.toggle('completed')
}

function leftToPurchase(){
    let items = document.querySelectorAll('.groceryList li')
    if(){

    }
}
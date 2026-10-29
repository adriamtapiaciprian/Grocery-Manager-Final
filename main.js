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
    for(let i = 0; i < groceryList.children.length; i++){
        let item = groceryList.children[i];
        item.style.display = ""
        if(item.classList.contains('completed')){
            item.style.display = "none"
        }
    }
}

function purchasedItems(){
    let items = document.querySelectorAll('.groceryList li');

    for(let i = 0; i<items.length; i++){
        if(items[i].classList.contains('completed')){
            items[i].style.display ="list-item"
        }else{
            items[i].style.display = "none"
        }
    }
}
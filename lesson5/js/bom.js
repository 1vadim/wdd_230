

const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector("button"); 

button.addEventListener('click', function() {
        let myItem = input.value;
        input.value = "";
        if (myItem == ""){return false;} 
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listButton = document.createElement("button");
        listItem.appendChild(listText);
        listItem.appendChild(listButton);
        listText.textContent = myItem;
        listButton.textContent = "X";
        list.appendChild(listItem);
        listButton.onclick = function () {
          list.removeChild(listItem);
        };
        input.focus();
})
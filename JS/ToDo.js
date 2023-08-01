const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const toggleIcon = document.getElementById("toggleIcon");


item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToList(this.value)
            this.value = ""
        }
    }
)
const addToList = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <i class="fa-solid fa-xmark" id="close"></i>
    `;
    listItem.querySelector("i").addEventListener(
        "click",
        function (){
            listItem.remove();
        }
    )
    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done")
        }
    )

    toDoBox.appendChild(listItem);
}
const main = document.querySelector("main");
const box = document.querySelector(".box");
toggleIcon.addEventListener(
    'click',
    function(){
        this.classList.toggle("fa-moon");
        if(this.classList.toggle("fa-sun")){
            main.style.background = "white";
            main.style.color = "black";
            main.style.transition = "1s";
        }
        else{
            main.style.background = "black"
            box.style.background = "black";
            box.style.border = "2px solid white"
            toDoBox.style.background = "white"
            toDoBox.style.border = "2px solid white"
            main.style.color = "white";
            main.style.transition = "1s"
        }
    }
)
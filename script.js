const columns = document.querySelectorAll(".column");
const output = document.querySelector(".result");
const input = document.querySelector("#unit");
const resetButton = document.querySelector(".reset-button");
const columnsArr = [...columns];


columnsArr.forEach((column,i) => column.addEventListener("click",function(){
    let convertionValue = 1;
    for (let index = 0; index < columnsArr.length; index++) {
        convertionValue = convertionValue * 10;
        if(index === i){
            break;
        }
    }
    output.textContent = convertionValue * input.value;
}));
resetButton.addEventListener("click",function(){
    output.textContent = 0;
    input.value = "";
})

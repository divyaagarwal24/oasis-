
let result = document.getElementById("inputText");

let calculate=(number)=>{
    result.value += number;
}

let answer=()=>
{
    try
    {
        result.value = eval(result.value);

    }
    catch(error)
    {
        alert("Enter a valid input");
        clr();
    }
    
}

function clr()
{
    result.value= " ";
}
function del()
{
    result.value = result.value.slice(0,-1);
}
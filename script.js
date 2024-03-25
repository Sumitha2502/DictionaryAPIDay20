var header = document.querySelector(".header");

async function dic() {
    var word=document.querySelector(".input").value
    try {
        var dictionary = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!dictionary.ok) {
            foo('Failed to fetch data');
        }
        var data = await dictionary.json();
        console.log(data)
        for (let entry of data) {
            console.log(entry);
            
            foo(entry)
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function foo(data) {
    var userData = document.getElementById("clear");
    userData.innerHTML = JSON.stringify(data, null, 4);
}

var enter=document.querySelector(".input-container")
enter.addEventListener("submit",function (event){
    event.preventDefault()
    dic()
})
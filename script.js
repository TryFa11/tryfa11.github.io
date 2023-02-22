var query = document.getElementById("results");
var response;
document.getElementById("send").addEventListener("click", function(){
    var inp = document.querySelector("input").value;
    fetch('https://CloudBackend.tryfall.repl.co/p', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "content": inp })
})
.then(response => response.json())
.then(response => {
    query.innerText = 'QueryID: '+response.status
})});
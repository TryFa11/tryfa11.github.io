var text = document.getElementById('results');
document.getElementById("send").addEventListener("click", function(){
    var inp = document.querySelector("input").value;
    console.log(inp);
    var info = fetch(`https://CloudBackend.tryfall.repl.co/g/`+inp, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    });
        info.then(res =>
        res.json()).then(d => {
          console.log(d);
          text.innerText = "Message: "+d.status+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Details: "+JSON.stringify(d);
        });
})
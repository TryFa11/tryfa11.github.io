var query = document.getElementById("results");
var response;
document.getElementById("send").addEventListener("click", function(){
    var inp = document.querySelector("input").value;
    var imgdata = document.getElementById("input2");
    const formdata = new FormData();
    imgdata.addEventListener("change", ev => {
        formdata.append(imgdata, ev.target.files[0]);
        fetch("https://api.imgbb.com/1/upload", {
            method: 'POST',
            headers: {
                Authorization: "c6d96c681f4c4f161a7bda3b217264de"
            },body:formdata
        }).then(data=>data.json().then(data=>console.log(data)));
    });

    fetch('https://CloudBackend.tryfall.repl.co/p', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "content": inp })
})
.then(response => response.json()).then(response => {
    query.innerText = response.status
})});

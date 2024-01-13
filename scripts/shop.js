let cart = new Set();
const items = new Map();
items.set(1, "Kołowrotek Prologic Avenger BF SST");
items.set(2, "Guma spinningowa Savage Gear Craft Cannibal");
items.set(3, "Wędka DAM Base-X Multipicker");
items.set(4, "Główka Jigowa Savage Gear Ball");


function buy(element){
    cart.add(element);
    reload();
    
}


function delete_(element){
    cart.delete(element);
    reload();
}


function reload(){
    let lista = document.getElementById("lista"); 
    while(lista.firstChild){
        lista.removeChild(lista.lastChild);
    }
    for(let item of cart){
        const div = document.createElement("div");
        const delBut = document.createElement("button");
        const el = document.createElement("p");
        div.appendChild(el);
        div.appendChild(delBut);

        el.id = items.get(item);
        el.textContent = items.get(item);
        delBut.innerHTML = "X"
        delBut.onclick=() => {delete_(item)};
        //let element = `<p id="${item}" onclick="delete_(${item})">${items.get(item)}</p>`
        lista.appendChild(div);
    }
}
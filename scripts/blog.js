function sent(){
    let text = document.getElementById("text_input").innerHTML;
    let mail = document.getElementById("mail_input").innerHTML;
    document.getElementById("text_input").value = "";
    document.getElementById("mail_input").value = "";
    // narazie alert
    //alert("An Email has been sent!");
    const data = JSON.stringify({
        ishtml: 'false',
        sendto: mail,
        title: 'Witamy na naszym portalu!',
        body: `Dziekujemy za pozostawienie uwagi ${text}!`
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open('POST', 'https://rapidmail.p.rapidapi.com/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', 'f9df9936a6msh0a23d1b6fe11df9p1426a1jsnfbe10dc0628f'); // nie powinno sie tego pokazywac, ale trudno XD
    xhr.setRequestHeader('X-RapidAPI-Host', 'rapidmail.p.rapidapi.com');
    
    xhr.send(data);
}
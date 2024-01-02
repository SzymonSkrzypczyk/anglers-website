let currentPage = 0;
const maxPages = 10;
const ryby = ["amur_bialy", "bolen", "brzana", "glowacica", "jaz", "karas", "karp_lustrzen", "kielb", "klen", "krap"];


function change(_change){
    currentPage = (currentPage + _change) % 10;
    if(currentPage < 0) currentPage = 9
    let image = document.getElementById("image");
    // jak starczy czasu mozna dodac fade in fade out!
    let text = document.getElementById("desc");
    image.src = "../images/fish/" + ryby[currentPage] + ".jpg";
    text.innerHTML = ryby[currentPage].replace("_", " ");
    document.getElementById("link").href = "../src/fish/ryba" + currentPage + ".html"
}
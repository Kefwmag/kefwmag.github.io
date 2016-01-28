window.onload = function() {
    document.addEventListener('click', function(evt) {
        console.log(evt.target.parentNode);
        console.log(evt.target.innerText);
        console.log(evt.target.tagName)
        console.log(evt.target.parentNode.id)
        if((evt.target.tagName == "A") && (evt.target.innerText == "Read More")) {
            evt.target.parentNode.className = "fs";
            evt.target.innerText = "Go back"
        } else if((evt.target.tagName == "A") && (evt.target.innerText == "Go back")) {
            evt.target.parentNode.className = "";
            evt.target.innerText = "Read More";
        }
    }, false);
    var catHead = document.getElementById("categoryName");
    var cat = catHead.innerHTML;
    if (cat == "news ") {
        catHead.innerHTML = "School News";
        document.getElementsByTagName("main")[0].innerHTML += "<style>header { background-color:#d90000;border-bottom: 3px solid #9A1504;}section {    border-bottom: 3px solid #9A1504;color: #d90000;}main div article a {color:#d90000;}</style>";
    }
    if (cat == "tech ") {
        catHead.innerHTML = "Technology";
        document.getElementsByTagName("main")[0].innerHTML += "<style>header { background-color:#24bba8;border-bottom: 3px solid #088A79;}section {    border-bottom: 3px solid #088a79;color: #24bba8;}main div article a {color:#24bba8;}</style>";
    }
    if (cat == "arts ") {
        catHead.innerHTML = "Arts & Entertainment";
        document.getElementsByTagName("main")[0].innerHTML += "<style>header { background-color:#f6aa00;border-bottom: 3px solid #ce7805;}section {    border-bottom: 3px solid #ce7805;color: #f6aa00;}main div article a {color:#f6aa00;}</style>";
    }
    if (cat == "lifestyle ") {
        catHead.innerHTML = "Lifestyle";
    }
    if (cat == " ") {
        catHead.innerHTML = "All Articles";
    }
}

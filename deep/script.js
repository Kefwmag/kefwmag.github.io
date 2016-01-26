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
    }
    if (cat == "tech ") {
        catHead.innerHTML = "Technology";
    }
    if (cat == "arts ") {
        catHead.innerHTML = "Arts & Entertainment";
    }
    if (cat == "lifestyle ") {
        catHead.innerHTML = "Lifestyle";
    }
    if (cat == "") {
        catHead.innerHTML = "All Articles";
    }
}

function manage(url) {
    var xhrObject = new XMLHttpRequest();
    xhrObject.open('POST', '', true);
   // xhrObject.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhrObject.onreadystatechange = function() {
        if(xhrObject.readyState == 1) {
            console.log("readystate is 1");
        } else if(xhrObject.readyState == 2) {
            console.log("readystate is 2");
        } else if (xhrObject.readyState == 3) {
            console.log("readystate is 3");
        } else if (xhrObject.readyState == 4) {
            console.log("readystate is 4");
            updatePage(xhrObject.responseText);
        } else {
            console.log("other");
        }
    }
    xhrObject.send();
}

function updatePage(response) {
    document.getElementById("image").src = response;
//    document.getElementById("demo").innerHTML = response;
}


(function() {
    let URL = "http://api.github.com/users/samantehrani/repos";

    let xmlButton = document.querySelector('.xml');

    xmlButton.addEventListener('click', function() {
        let httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    if (httpRequest.getResponseHeader("Content-Type") === "application/json; charset=utf-8") {
                        console.log(JSON.parse(httpRequest.responseText));
                    } else {
                        console.log(httpRequest.responseText);
                    }
                }
            }
        }
        httpRequest.open('GET', URL);

        httpRequest.send();
    });
})();
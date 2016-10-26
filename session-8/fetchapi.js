(function() {
    let URL = "http://api.github.com/users/samantehrani/repos";

    let fetchButton = document.querySelector('.fetch');
    fetchButton.addEventListener('click', function() {
        var headers = new Headers();
        //headers.append("Accept", "application/json");
        var options = {
            method: 'GET',
            headers: myHeaders,
        };
        var request = new Request(URL, options);

        fetch(request)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
            });
    });
})()
(function() {
    let URL = "http://api.github.com/users/samantehrani/repos";
    let jqueryButton = document.querySelector('.jquery');

    jqueryButton.addEventListener('click', function() {
        $.ajax({
                method: "GET",
                url: URL
            })
            .done(function(response) {
                console.log(response);
            });
    });
})();
function validate() {
    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    $.getJSON("logins.json", function (json) {
        var incorrect = true;
        $.each(json, function (i, user) {
            if (username === user.login && password === user.password) {
                alert("Здравствуйте, " + user.firstName);
                document.getElementById("lb").innerText = user.firstName + "_" + user.lastName;
                incorrect = false;
                closeForm()
                entered = true;
                document.getElementById("ct").style.display = 'inline';
                document.getElementById("ct1").style.display = 'inline';
                document.getElementById("contacts").style.display = 'inline';
            }
        });
        if (incorrect) {
            alert("Ошибка входа, проверьте данные!")
        }
    });


}

function checkLogin() {
    if (!entered) {
        slowScroll('#top')
        openForm();
    } else {
        document.getElementById("lb").innerText = "Вход";
        document.getElementById("ct").style.display = 'none';
        document.getElementById("ct1").style.display = 'none';
        document.getElementById("contacts").style.display = 'none';
        entered = false;
        slowScroll('#top')
    }
}

function openForm() {
    document.getElementById('id01').style.display = 'block'
}

function closeForm() {
    document.getElementById("id01").style.display = "none";
}
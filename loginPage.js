function login() {

    const data = JSON.parse(localStorage.getItem('signup'));
    for (var i = 0; i < data.length; i++) {
        let EMAIL = data[i].email;
        let PASSWORD = data[i].password;

        if (EMAIL == myform.mail.value && PASSWORD == myform.psw.value) {
            return alert("LogIn Successful");

        }
        window.location.href = "homePage.html"
    }

    return alert("Invalid Credential");
}
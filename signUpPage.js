function signup() {

    var data = document.getElementById('myform');

    let name = data.UnName.value;
    let mobile = data.UserNum.value;
    let email = data.mail.value;
    let password = data.psswrd.value;

    var info = {
        name,
        mobile,
        email,
        password
    }
    var arr;
    arr = localStorage.getItem('signup');

    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('signup'));
    }
    arr.push(info);

    localStorage.setItem('signup', JSON.stringify(arr));
    alert('You are Successfully Registered')
    window.location.href = "homePage.html";
}
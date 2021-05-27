
$('#idsign').click(function () {
    var user = localStorage.getItem("user");
    var pass = localStorage.getItem("password")
    if (user === $('#idname').val() && pass === $('#idpassword').val()) {
        return alert("login successful")
    } else {
        return alert("username or password is incorrect")
    }
})

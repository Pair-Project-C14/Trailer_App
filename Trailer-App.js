// login //////////////////////////////////////////////////////////////////////
$('#idsign').click(function () {
    var pass = localStorage.getItem($('#idname').val());
    // console.log("pass", pass)

    if (pass === $('#idpassword').val()) {
        return alert("login successful")
    } else {
        return alert("username or password is incorrect")
    }
})
/////////////////////////////////////////////////////////////////////////////////

// var inputuser = $('#idname').val();
// var inputuserpassword = $('#idpassword').val();
// var btnsingup = $('#idsignup');

$('#idsignup').click(function () {
    // console.log("hahaha");
    var key = $('#idname').val();
    var value = $('#idpassword').val();
    localStorage.setItem(key, value)
    $('#idpassword').val("");
    $('#idname').val("");
    alert("signed up secc")
})


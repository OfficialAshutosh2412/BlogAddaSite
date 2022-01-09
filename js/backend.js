/* contact us page validation */
function validation() {
    var fname = document.getElementById("f_name").value;
    var email = document.getElementById("e_mail").value;
    var pnum = document.getElementById("phone").value;
    var message = document.getElementById("msg").value

    if ((fname == "") || (email == "") || (pnum == "") || (pnum.length < 10) || (message == "")) {
        document.getElementById("namebug").innerHTML = "Name field required !"
        document.getElementById("namebug").style.color = "red"
        document.getElementById("mailbug").innerHTML = "Email field required !"
        document.getElementById("mailbug").style.color = "red"
        document.getElementById("phonebug").innerHTML = "Phone field required !"
        document.getElementById("phonebug").style.color = "red"
        document.getElementById("phonebug").innerHTML = "Invalid Number!"
        document.getElementById("phonebug").style.color = "red"
        document.getElementById("msgbug").innerHTML = "Message field required !"
        document.getElementById("msgbug").style.color = "red"
        return false
    }
    else {
        return true
    }

}
function valid_name(x) {
    x.value = x.value.trim()

    if (x.value.length < 2) {
        document.getElementById("namebug").innerHTML = "Invalid Name !";
        document.getElementById("namebug").style.color = "red"
        return false
    }
    else {
        document.getElementById("namebug").innerHTML = "***Correct";
        document.getElementById("namebug").style.color = "green"
        return true
    }
}
function valid_email(x) {
    x.value = x.value.trim();
    if (x.value.indexOf("@") <= 0) {
        document.getElementById("mailbug").innerHTML = "Invalid Email !";
        document.getElementById("mailbug").style.color = "red"
        return false
    }
    else if ((x.value.charAt(x.value.length - 3) != ".")) {
        document.getElementById("mailbug").innerHTML = "Invalid Email ! dot(.) displaced !";
        document.getElementById("mailbug").style.color = "red"
        return false
    }
    else {
        document.getElementById("mailbug").innerHTML = "***correct";
        document.getElementById("mailbug").style.color = "green"
        return true
    }
}
function valid_phone(x) {
    x.value = x.value.trim()
    if (x.value.length < 9) {
        document.getElementById("phonebug").innerHTML = "Less than 10 digit !";
        document.getElementById("phonebug").style.color = "red"
    }
    else {
        document.getElementById("phonebug").innerHTML = "***correct";
        document.getElementById("phonebug").style.color = "green"
        return true
    }
}
function valid_msg(x) {
    if (x.value.length > 200) {
        document.getElementById("msgbug").innerHTML = "Not more than 200 character !";
        document.getElementById("msgbug").style.color = "red"
    }
    else {
        document.getElementById("msgbug").innerHTML = "***correct";
        document.getElementById("msgbug").style.color = "green"
        return true
    }
}

/* for signup form */
function signup_validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var pincode = document.getElementById('pincode').value;
    var address = document.getElementById('address').value;

    if ((fname == "") || (lname == "") || (email == "") || (password == "") || (cpassword == "") ||
        (country == "") || (state == "") || (pincode == "") || (address == "")) {
        document.getElementById("f_error").innerHTML = "*Field should not be empty"
        document.getElementById("f_error").style.color = "red"
        document.getElementById("l_error").innerHTML = "*Field should not be empty"
        document.getElementById("l_error").style.color = "red"
        document.getElementById("e_error").innerHTML = "*Field should not be empty"
        document.getElementById("e_error").style.color = "red"
        document.getElementById("p_error").innerHTML = "*Field should not be empty"
        document.getElementById("p_error").style.color = "red"
        document.getElementById("cp_error").innerHTML = "*Field should not be empty"
        document.getElementById("cp_error").style.color = "red"
        document.getElementById("cn_error").innerHTML = "*Field should not be empty"
        document.getElementById("cn_error").style.color = "red"
        document.getElementById("s_error").innerHTML = "*Field should not be empty"
        document.getElementById("s_error").style.color = "red"
        document.getElementById("pin_error").innerHTML = "*Field should not be empty"
        document.getElementById("pin_error").style.color = "red"
        document.getElementById("adrs_error").innerHTML = "*Field should not be empty"
        document.getElementById("adrs_error").style.color = "red"
        return false
    }

    else if (password != cpassword) {
        alert("password not matching !")
        return false
    }
    else {
        document.getElementById("l_error").innerHTML = "*correct"
        document.getElementById("l_error").style.color = "green"
    }
}
function f_valid(x) {
    var fst_name = x.value;

    if (fst_name.length < 2) {
        document.getElementById("f_error").innerHTML = "Name not less than 2 character !"
        document.getElementById("f_error").style.color = "red"
    }
    else if (fst_name.length > 20) {
        document.getElementById("f_error").innerHTML = "Name not more than 20 character !"
        document.getElementById("f_error").style.color = "red"
    }
    else if (!isNaN(fst_name)) {
        document.getElementById("f_error").innerHTML = "only number not allowed !"
        document.getElementById("f_error").style.color = "red"
    }
    else {
        document.getElementById("f_error").innerHTML = "*correct !"
        document.getElementById("f_error").style.color = "green"
        return true
    }
}
function l_valid(x) {
    var lst_name = x.value;

    if (lst_name.length < 2) {
        document.getElementById("l_error").innerHTML = "Name not less than 2 character !"
        document.getElementById("l_error").style.color = "red"
    }
    else if (lst_name.length > 20) {
        document.getElementById("l_error").innerHTML = "Name not more than 20 character !"
        document.getElementById("l_error").style.color = "red"
    }
    else if (!isNaN(lst_name)) {
        document.getElementById("l_error").innerHTML = "only number not allowed !"
        document.getElementById("l_error").style.color = "red"
    }
    else {
        document.getElementById("l_error").innerHTML = "*correct !"
        document.getElementById("l_error").style.color = "green"
        return true
    }
}
function email_valid(x) {
    var eml = x.value;
    eml.trim()
    if (eml.indexOf("@") <= 0) {
        document.getElementById("e_error").innerHTML = "Invalid Email !";
        document.getElementById("e_error").style.color = "red"
        return false
    }
    else if ((eml.charAt(x.value.length - 3) != ".")) {
        document.getElementById("e_error").innerHTML = "Invalid Email !";
        document.getElementById("e_error").style.color = "red"
        return false
    }
    else {
        document.getElementById("e_error").innerHTML = "*correct !"
        document.getElementById("e_error").style.color = "green"
        return true
    }
}
function pswd_valid(x) {
    var pswd = x.value;
    pswd.trim()
    if ((pswd.length < 9) | (pswd.length > 9)) {
        document.getElementById("p_error").innerHTML = "password between 0-9 character !";
        document.getElementById("p_error").style.color = "red"
        return false
    }
    else {
        document.getElementById("p_error").innerHTML = "*correct !"
        document.getElementById("p_error").style.color = "green"
        return true
    }
}
function cpswd_valid(x) {
    var cpswd = x.value;
    var pass = document.getElementById("password").value;
    cpswd.trim()
    if ((cpswd.length < 9) | (cpswd.length > 9)) {
        document.getElementById("cp_error").innerHTML = "password between 0-9 character !";
        document.getElementById("cp_error").style.color = "red"

    }
    else {
        document.getElementById("cp_error").innerHTML = "*correct !"
        document.getElementById("cp_error").style.color = "green"
        return true
    }
}
function correct_msg() {
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var pincode = document.getElementById('pincode').value;
    var address = document.getElementById('address').value;
    if (country != "") {
        document.getElementById("cn_error").innerHTML = "**correct";
        document.getElementById("cn_error").style.color = "green"
    }
    if (address != "") {
        document.getElementById("adrs_error").innerHTML = "**correct";
        document.getElementById("adrs_error").style.color = "green"
    }
    if (pincode != "") {
        document.getElementById("pin_error").innerHTML = "**correct";
        document.getElementById("pin_error").style.color = "green"
    }
    if (state != "") {
        document.getElementById("s_error").innerHTML = "**correct";
        document.getElementById("s_error").style.color = "green"
    }
}
/* for login section */
function email_login(x) {
    
    if (x.value.indexOf("@") <= 0) {
        document.getElementById("email_error").innerHTML = "Invalid Email !";
        document.getElementById("email_error").style.color = "red"
        return false
    }
    else if ((x.value.charAt(x.value.length - 3) != ".")) {
        document.getElementById("email_error").innerHTML = "Invalid Email ! dot(.) displaced !";
        document.getElementById("email_error").style.color = "red"
        return false
    }
    else {
        document.getElementById("email_error").innerHTML = "***correct";
        document.getElementById("email_error").style.color = "green"
        return true
    }
}


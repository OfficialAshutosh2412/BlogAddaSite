$(document).ready(function () {
    $("#toggleBtn").click(function () {
        $("#toggleMenu").toggle('speed')
    });

    $("#loginPage").click(function () {
        location.href = "login.html"
    });

    $("#devbtn").click(function () {
        location.href = "https://www.facebook.com/ashutosh.prasad.754365"
    });

    $("#submit_login").click(function () {
        var log_email = document.getElementById("email_field").value;
        var log_pswd = document.getElementById("pswd_field").value;

        if ((log_email == "") || (log_pswd == "")) {
            document.getElementById("email_error").innerHTML = "field should not be empty !"
            document.getElementById("pswd_error").innerHTML = "field should not be empty !"
            document.getElementById("email_error").style.color = "red"
            document.getElementById("pswd_error").style.color = "red"
            return false
        }
        else if ((log_email != "ashutosh@gmail.com") || (log_pswd != "ashu")) {
            alert("Worng email or password ! Try again.")
            return false
        }
        else {
            location.href = "userhome.html"
            alert("Successfully Logged-in !")
            return true
        }

    });
    // logout button jquerry
    $("#logout-btn").click(function () {
        if (confirm("Are you sure ?") == true) {
            location.href = "login.html"
            return true
        }
        else {
            return false
        }
    });

    /* close btn  */
    $("#closebtn").click(function () {
        location.href = "blog.html"
    });
    
    /* add post rendering */
    $("#addPost").click(function(){
        location.href="addpost.html"
    });

    /* feedback page submit btn */
    $("#feedBtn").click(function(){
        var feedName=document.getElementById("feed_name").value;
        var feedEmail=document.getElementById("feed_email").value;
        var feedMsg=document.getElementById("feed_msg").value;

        if(feedName=="") {
            document.getElementById("errorName").innerHTML = "field should not be empty !"
            document.getElementById("errorName").style.color="red"
            return false
        }
        else if(feedEmail==""){
            document.getElementById("errorEmail").innerHTML = "field should not be empty !"
            document.getElementById("errorEmail").style.color="red"
            return false
        }
        else if(feedMsg==""){
            document.getElementById("errorMsg").innerHTML = "field should not be empty !"
            document.getElementById("errorMsg").style.color="red"
            return false
        }
    });
});
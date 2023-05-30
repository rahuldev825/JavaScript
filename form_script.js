// click Event Task
function blnk_val_check() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    if (fname == "" || fname == null) {
        document.getElementById("msg").innerText = "Enter First Name"
        return false;
    }
    if (lname == "") {
        document.getElementById("msg1").innerText = "Enter Last Name"
        return false;
    }
    if (male == false && female == false) {
        document.getElementById("msg2").innerText = "Select Gender"
        return false
    }
    let dob = document.getElementById("dob").value;
    if (dob == "") {
        document.getElementById("msg3").innerText = "Select Date"
        return false
    }
    let adr = document.getElementById("adr").value;
    if (adr == "") {
        document.getElementById("msg4").innerHTML = "Enter Address"
        return false
    }
    let city = document.getElementById("city").value;
    if (city == -1) {
        document.getElementById("msg5").innerText = "Select City"
        return false
    }
    let mno = document.getElementById("mobileNo").value;
    if (mno == "") {
        document.getElementById("msg6").innerText = "Enter Mobile No"
        return false;
    } else if (mno.length < 10) {
        document.getElementById("msg6").innerText = "Mobile No Must Be In 10 Digits"
        return false;
    }
    let email = document.getElementById("EmailAdd").value;
    if (email == "") {
        document.getElementById("msg7").innerText = "Enter E-mail";
        return false;
    }


}

// keyboard Event
function name_ex(username, spanid) {
    let regex = /^[a-zA-Z]*$/
    if (regex.test(username.value)) {
        document.getElementById(spanid).innerText = "";
        return false;
    } else {
        document.getElementById(spanid).innerText = "Only Alphabet Allowed";
        return false
    }
}
function mobile_ex(mblno, spanid) {
    let regex = /^[0-9]*$/
    if (regex.test(mblno.value)) {
        document.getElementById(spanid).innerText = "";
        return false
    } else {
        document.getElementById(spanid).innerText = "Only Numbers Allowed";
        return false
    }
}
function mobile_ex(email, spanid) {
    let = regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w[2,3])+$/;
    if (regex.test(email.value)) {
        document.getElementById(spanid).innerText = "";
        return false
    } else {
        document.getElementById(spanid).innerText = "Enter Proper E-mail Address";
        return false
    }
}
function pass_ex(pass, spanid) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8, 12}$/;
    if (regex.test(pass.value)) {
        document.getElementById(spanid).innerText = "";
        return false
    } else {
        document.getElementById(spanid).innerText = "Incurrent Password";
        return false
    }
}
// blur Event
function check_input(blnk, spnid) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(spnid).innerText = "Please Enter Value";
        return false
    } else {
        document.getElementById(spnid).innerText = "";
        return false
    }
}
function check_select() {
    let city = document.getElementById("city").value;
    if (city == -1) {
        document.getElementById("msg5").innerText = "Select Value"
        return false
    } else {
        document.getElementById("msg5").innerText = ""
        return false
    }
}
// adress length
function address_length() {
    let adr = document.getElementById("adr").value;
    if (adr.length < 30) {
        document.getElementById("msg4").innerText = "Address Must Be In Between 30 To 200 Characters."
        return false
    } else {
        document.getElementById("msg4").innerText = ""
        return false
    }
}
// match the Password
function match_password() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
        document.getElementById("msg9").innerText = "Password And Confirm Password Does Not Match";
        return false;
    } else {
        document.getElementById("msg9").innerText = "";
        return false;
    }
}
// for hide and show pass
function showpass() {
    let pass = document.getElementById("pass");
    let icon = document.querySelector(".fa-eye");
    if (pass.type == "password" || icon.classList.contains("fa-eye") == true) {
        pass.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    } else {
        pass.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
    }
}
function cshowpass() {
    let cpass = document.getElementById("cpass");
    let cicon = document.querySelector(".fa-eye");
    if (cpass.type == "password" || cicon.classList.contains("fa-eye") == true) {
        cpass.type = "text"
        cicon.classList.remove("fa-eye")
        cicon.classList.add("fa-eye-slash")
    } else {
        cpass.type = "password"
        cicon.classList.remove("fa-eye-slash")
        cicon.classList.add("fa-eye")
    }
}
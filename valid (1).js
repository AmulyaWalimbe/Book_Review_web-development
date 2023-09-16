function form() {
    var uname = document.registration.un;
    var email = document.registration.em;
    var ph = document.registration.phone;
    var age = document.registration.age;
    var male = document.registration.msex;
    var female = document.registration.fsex;
    var other = document.registration.osex;
    var pw = document.registration.ps;
    var cpw = document.registration.cps;
    if (allLetter(uname)) {
            if (ValidateEmail(email)) {
                if (validatephone(ph, 10)) {
                    if (valid_age(age, 16)) {
                        if (validsex(male, female, other)) {
                            if (passid_validation(pw, 7, 12)) {
                                if (conpassid_validation(cpw, pw)) {}
                            }
                        }
                    }
                }
            }
        }
    return false;
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Username must not be empty and should have alphabet characters only');
        uname.focus();
        return false;
    }
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function validatephone(ph, l) {
    var phone_len = ph.value.length;
    var digits = /^[0-9]+$/;
    if (phone_len == l) {
        if (ph.value.match(digits)) {
            return true;
        }
    } else {
        alert("Please enter a valid phone number(10 digits)!");
        phone.focus();
        return false
    }
}
function valid_age(age, valid) {
    var digits = /^[0-9]+$/;
    var val = age.value;
    if (age.value.match(digits)) {
        if (val >= valid) {
            return true;
        } else {
            alert("Below age limit!")
            return false;
        }

    } else {
        alert('Please enter age in numbers!');
        age.focus();
        return false;
    }
}

function validsex(male, female, other) {
    x = 0;

    if (male.checked) {
        x++;
    }
    if (female.checked) {
        x++;
    }
    if (other.checked) {
        x++;
    }
    if (x == 0) {
        alert('Please select gender!');
        male.focus();
        return false;
    } else {
        return true;
    }
}

function passid_validation(pw, mx, my) {
    var passid_len = pw.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password length should be between " + mx + " to " + my);
        pw.focus();
        return false;
    }
    return true;
}

function conpassid_validation(cpw, pw) {
    if (cpw.value != pw.value) {
        alert("The confirm password does not match the password!");
        cpw.focus();
        return false;
    } else {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}
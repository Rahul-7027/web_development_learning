function checkPassword(password) {
    let regPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    if (!password || password.length === 0) {
        console.log("Password is Empty ")
    }
    // else if (password.length <= 8) {
    //     console.log("Password is greater than 8 number")
    // }
    else if (regPattern.test(password)||password.length<=8) {
        console.log("Match the Password")
    }
    else {
        console.log("Not Match Password")
    }
}

let password = "Rahul@12wweq#"
checkPassword(password)
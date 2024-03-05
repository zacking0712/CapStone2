function getInfoInput() {
    let user = {}
    var arrUser = document.querySelectorAll("form input, form select")
    console.log(arrUser)
    for(let i =0; i < arrUser.length; i++) {
        var value = arrUser[i].value
        var id = arrUser[i].id

        user[id] = value
        console.log(value)
    }
    // console.log(user.email)
    
    let isValid = true

    //Check email
    isValid &= checkEmpty(user.email,"noti_email", "email") && checkEmail(user.email, "noti_email", "email")
    //Check tên
    isValid &= checkEmpty(user.name, "noti_name", "name") && checkName(user.name , "noti_name", "name")
    //Check Password
    isValid &= checkEmpty(user.password, "noti_password", "password") && checkPassword(user.password, "noti_password", "password")
    //Check Phone
    isValid &= checkEmpty(user.phone, "noti_phone", "phone") && checkPhone(user.phone, "noti_phone", "phone", 10)
    //Check Password Confirm
    isValid &= checkEmpty(user.password_cf, "noti_pass_cf", "password_cf") && checkPasswordConfirm(user.password, user.password_cf, "noti_pass_cf", "password_cf")
    //Check Gender
    isValid &= checkEmpty(user.gender, "noti_gender", "gender")

    if(isValid) {
        var promise = axios({
            url: "https://shop.cyberlearn.vn/api/Users/signup",
            method: "POST",
            ResponseType: JSON,
            data: user,
        })
    
        
        
        
        promise.then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
}

document.querySelector(".btn-dark").onclick = getInfoInput

// function addUser {
//     var promise = axios({
//         url: ""
//     })
// }
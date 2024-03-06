function checkEmpty(value, idNoti) {
    if(value === "") {
        document.getElementById(idNoti).innerHTML = "(*) Bắt Buộc"
        return false
    } else {
        document.getElementById(idNoti).innerHTML = ""
        return true
    }
}

function checkEmail(value, idNoti) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let valueUser = regexEmail.test(value)
    console.log(valueUser)
    if (!valueUser) {   
        document.getElementById(idNoti).innerHTML = "(*) Email không đúng định dạng";
        return false
    } else {
        document.getElementById(idNoti).innerHTML = ""
        return true
    }
}

function checkName(value, idNoti) {
    const regexText = /^[a-zA-ZÀ-ỹ\s]+$/;
  
    var isValid = regexText.test(value);
  
    //   console.log(isValid);
    if (!isValid) {
      document.getElementById(idNoti).innerHTML = "(*) Tên không đúng định dạng"
      return true;
    } else {
      document.getElementById(idNoti).innerHTML = ""
      return false;
    }
}

function checkPassword(value, idNoti) {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;;
    var isValid = regexPassword.test(value)
    console.log(isValid)
    if (!isValid) {
        document.getElementById(idNoti).innerHTML = "(*) Mật khẩu có ít nhất 8 ký tự, 1 chữ in hoa, 1 chữ thường và 1 kí tự đặc biệt"
        return true;
    } else {
        document.getElementById(idNoti).innerHTML = ""
        return false;
    }
}

function checkPasswordConfirm(value1, value2, idNoti) {
    checkPassword(value1, idNoti)
    if(value1 !== value2) {
        document.getElementById(idNoti).innerHTML = "(*) Mật khẩu không đúng"
        return false;
    } else {
        document.getElementById(idNoti).innerHTML = ""
        return true;
    }
}

function checkPhone(value, idNoti, qual) {
    let soLuong = value.length
    console.log(soLuong)
    console.log(qual)
    if(soLuong != qual) {
        document.getElementById(idNoti).innerHTML = "(*) Số điện thoại không đúng định dạng"
        return false
    } else {
        document.getElementById(idNoti).innerHTML = ""
      return true;
    }
}

function checkEmpty(value, idNoti, idInput) {
    if (value == "") {
        document.getElementById(idNoti).innerHTML = "(*) Bắt buộc"
        document.getElementById(idInput).style.border = "1px solid red"
        return false
    } else {
        document.getElementById(idNoti).innerHTML = ""
        document.getElementById(idInput).style.border = "1px solid #ccc"
        return true
    }
}

//Email
function checkEmail(value, idNoti, idInput) {
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // tương tác với regex để kiểm tra người dùng
    //   var isValid = value.match(regexEmail);
    var isValid = regexEmail.test(value);
    console.log(isValid);
    if (!isValid) {
      document.getElementById(idNoti).innerHTML = "(*) Email không đúng định dạng";
      return false;
    } else {
      document.getElementById(idNoti).innerHTML = "";
      return true;
    }
  }

//   Name
function checkName(value, idNoti, idInput) {
    const regexText = /^[a-zA-ZÀ-ỹ\s]+$/;
  
    var isValid = regexText.test(value);
  
      console.log(isValid);
    if (isValid) {
      document.getElementById(idNoti).innerHTML = "";
      return true;
    } else {
      document.getElementById(idNoti).innerHTML = "(*) Không đúng định dạng";
      return false;
    }
}

// Check Password

function checkPassword(value, idNoti, idInput) {
    const regexPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;
    var isValid = regexPass.test(value);
    if (isValid) {
      document.getElementById(idNoti,).innerHTML = "";
      return true;
    } else {
      document.getElementById(idNoti,).innerHTML = "(*) Mật khẩu có ít nhất 8 ký tự, một chữ hoa, một chữ thường, chữ số và 1 ký tự đặc biệt";
      return false;
    }
}

// Check Password Confirm
function checkPasswordConfirm(value1, value2, idNoti, idInput) {
    console.log(value1);
    console.log(value2);
    console.log(value1 == value2)
    if (value1 === value2) {
        document.getElementById(idNoti,).innerHTML = "";
        return true;
    } else {
        document.getElementById(idNoti).innerHTML = "(*) Mật khẩu không khớp"
        return false
    }
}

// Check Phone
function checkPhone(value, idNoti, max) {
    let soDienThoai = value.length;
    if (soDienThoai === max) {
      document.getElementById(idNoti).innerHTML = "";
      return true;
    } else {
      document.getElementById(
        idNoti
      ).innerHTML = `(*) Số điện thoại không đúng định dạng`;
      return false;
    }
}

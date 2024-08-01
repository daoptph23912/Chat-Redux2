export const validateLogin = (acc, pass) => {
  const accRegex = /^[a-zA-Z0-9]{6,}$/; // Tài khoản phải có ít nhất 6 ký tự
  const passRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/; // Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số

  // if (!acc) {
  //   return "Tài khoản không được để trống";
  // } else
  if (!accRegex.test(acc)) {
    return "Tài khoản phải có ít nhất 6 ký tự";
  }

  if (!pass) {
    return "Mật khẩu không được để trống";
    // } else if (!passRegex.test(pass)) {
    //   return "Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số";
  }
  return null;
};

export const validateRegister = (fullname, acc, pass, confirmPass) => {
  const fullnameRegex = /^[a-zA-ZÀ-ỹà-ỹ0-9\s]{6,}\d{2,}$/;
  const accRegex = /^[a-zA-Z0-9]{6,}\d{2,}$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!fullnameRegex.test(fullname)) {
    return "Họ và tên phải có ít nhất 6 chữ cái và 2 số, có thể chứa khoảng trắng và dấu tiếng Việt";
  }

  if (!accRegex.test(acc)) {
    return "Tài khoản phải có ít nhất 6 chữ cái và 2 số";
  }

  if (!passRegex.test(pass)) {
    return "Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ cái và số";
  }

  if (pass !== confirmPass) {
    return "Mật khẩu và xác nhận mật khẩu không trùng khớp";
  }

  return null;
};

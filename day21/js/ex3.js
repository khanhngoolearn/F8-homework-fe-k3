var data = [];

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Lỗi: Thông tin không đầy đủ!");
    return;
  }

  const existingUser = data.find(user => user.email === email);
  if (existingUser) {
    console.log("Lỗi: Đã có người dùng với email này!");
    return;
  }

  const newUser = {
    name: name,
    password: password,
    email: email,
    role: "user"
  };

  data.push(newUser);
  return newUser;
}

function handleLogin(email, password) {
  const user = data.find(user => user.email === email && user.password === password);
  if (user) {
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ");
    return null;
  }
}

var dataRegister1 = handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
var dataRegister2 = handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log("data =", data);
console.log("dataLogin =", dataLogin);
const validarLogin = () => {
  alert("Teste");
};

let listUser = JSON.parse(localStorage.getItem("listUser"));
function signUpButton(e) {
  e.preventDefault();
  localStorage.setItem("flag", 0);
  let usernameInput = document.getElementById("username").value;
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;
  let infoUser = {
    username: usernameInput,
    password: passwordInput,
    email: emailInput,
  };
  if (listUser == null) {
    listUser = [];
    listUser.push(infoUser);
    localStorage.setItem("listUser", JSON.stringify(listUser));
  } else {
    let duplicateUser = listUser.find((user) => user.email === emailInput);
    if (duplicateUser) {
      alert("Email đã được sử dụng. Vui lòng nhập email khác.");
    } else {
      listUser.push(infoUser);
      localStorage.setItem("listUser", JSON.stringify(listUser));
      alert("Đăng ký thành công!");
    }
  }
}
function signInButton(e) {
  e.preventDefault();
  let userInput = document.getElementById("userEmail").value;
  let passwordInput = document.getElementById("userPassword").value;
  localStorage.setItem("flag", 1);
  let registeredUser = listUser.find(
    (user) => user.email === userInput && user.password === passwordInput
  );

  if (registeredUser) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("flag", 1);
    if (userInput === "fishyshynn@admin.com" && passwordInput === "duong") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }
  } else {
    document.getElementById("result").innerHTML =
      "Email hoặc mật khẩu không đúng.";
    localStorage.setItem("flag", 0);
  }
}
let flag = localStorage.getItem("flag");
if (flag == 1) {
  let test = JSON.parse(localStorage.getItem("listUser"));
  let userNameLocal = test[0].username;
  document.getElementById("changeIndex").innerHTML = `Hi, ${userNameLocal}`;
  document.getElementById(
    "logOutButton"
  ).innerHTML = `<button class="logOutInd" onclick="logout()">Đăng xuất</button>`;
  document
    .getElementById("changeIndex")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
      this.disabled = true; // Thiết lập thuộc tính disabled của thẻ a là true
    });
}
function logout() {
  flag = 0;
  localStorage.removeItem("flag");
  window.location.href = "index.html";
}
// let addButtonNe = document.querySelector(".buy");
// let number = document.querySelector(".numbers");
// let subButton = document.querySelector(".sell");
// let count = 0;

// addButtonNe.addEventListener("click", () => {
//   count++;
//   number.innerHTML = count;
//   if (count > 0) {
//     subButton.disabled = false;
//   }
// });

// subButton.addEventListener("click", () => {
//   count--;
//   number.innerHTML = count;
//   if (count == 0) {
//     subButton.disabled = true;
//   }
// });
let elements = document.querySelectorAll(".element");
elements.forEach((element) => {
  let addButton = element.querySelector(".buy");
  let subButton = element.querySelector(".sell");
  let number = element.querySelector(".numbers");

  addButton.addEventListener("click", () => {
    let count = parseInt(number.innerText);
    count++;
    number.innerText = count.toString();
    subButton.disabled = false;
  });

  subButton.addEventListener("click", () => {
    let count = parseInt(number.innerText);
    count--;
    number.innerText = count.toString();
    if (count == 0) {
      subButton.disabled = true;
    }
  });
});

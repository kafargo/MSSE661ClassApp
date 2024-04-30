const doLogin = async (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("useremail").value;
  const userPassword = document.getElementById("password").value;

  const res = await login({ userEmail, userPassword });

  const { auth, access_token, refresh_token } = res;

  setStorage("isAuth", auth);
  setStorage("access_token", access_token);
  setStorage("refresh_token", refresh_token);

  window.location.href = "home.html"; //here is where the user gets directed to the home screen if they have successfully logged in!
};

const doRegister = (e) => {
  e.preventDefault();
  const useremail = document.getElementById("useremail").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  register({
    useremail,
    email,
    password,
  }).then((res) => {
    window.location.href = "/";
  });
};

const doUpdate = async (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const newEmail = document.getElementById("newEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  const newPassword = document.getElementById("newPassword").value;

  if (validate()) {
    const res = await update({
      userName,
      userEmail,
      newEmail,
      userPassword,
      newPassword,
    });
    console.log(res);
    if (res._id) {
      alert("Account Updated successfully");
      window.location.href = "./main.html";
    } else {
      alert("Something went wrong. Please try again later.");
    }
  }
};

const doLogout = (e) => {
  e.preventDefault();
  logout();
  window.location.href = "/";
};

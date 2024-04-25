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

const doLogout = (e) => {
  e.preventDefault();
  logout();
  window.location.href = "/";
};

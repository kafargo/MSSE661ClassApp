class user {
  name;
  password;

  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

function createUser() {
  var userName = document.getElementById("username").value;
  var userPassword = document.getElementById("password").value;

  console.log(new user(userName, userPassword));
}

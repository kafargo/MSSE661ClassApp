const doLogin = function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  login({
    userEmail: username,
    userPassword: password
  }).then(function(res) {
    console.log(res);
    if (res.status === 200) {
      window.location.href = 'home.html';
    } else {
      alert('Invalid username or password');
    }
  }).catch(function(error) {
    console.error(error);
    alert('Something went wrong. Please try again later.');
  });
};

const doRegister = function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  register({
    userName: username,
    userEmail: email,
    userPassword: password
  }).then(function(res) {
    window.location.href = 'home.html';
  });
};

const validate = () => {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const newEmail = document.getElementById("newEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  const newPassword = document.getElementById("newPassword").value;

  if (userName && !userPassword) {
    alert("A password required to update username.");
    return false;
  } else if (newEmail && !userPassword) {
    alert("A password required to update email.");
    return false;
  } else if (!userPassword && newPassword) {
    alert("A current password is required.");
    return false;
  } else if (!newPassword && userPassword) {
    alert("A new password is required.");
    return false;
  } else {
    return true;
  }
};

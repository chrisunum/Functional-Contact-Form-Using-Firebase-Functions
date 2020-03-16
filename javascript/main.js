document.getElementById("send").addEventListener("click", validateForm);
function validateForm() {
  //gets the name
  let name = document.getElementById("contact-name").value;
  //gets the email
  let email = document.getElementById("contact-email").value;
  //gets the message
  let message = document.getElementById("contact-message").value;

  //checks if all fields have been filled before sending message.
  if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
    alert("all fields must be filled");
  } else {
    sendMessage(name, email, message);
  }
}

//sends information to firebase
function sendMessage(name, email, message) {
  //sends the name, email and message by passing them as url parameters
  window.location.href =
    "https://us-central1-naishare.cloudfunctions.net/sendMail?name=" +
    name +
    "&email=" +
    email +
    "&message=" +
    message +
    "";
}

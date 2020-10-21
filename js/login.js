function validate(){
  var username = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  $.getJSON("logins.json", function(json) {
    $.each(json, function(i, user) {
      if(username === user.login && password === user.password) {
        alert ("Здравствуйте, " + user.firstName);
        closeForm()
      }
    });
  });
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function openForm() {
  document.getElementById('id01').style.display='block'
}

function closeForm() {
  document.getElementById("id01").style.display = "none";
}
const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};
// store SignUpdata in local storage
function Store() {
  let data = localStorage.getItem("Store")
    ? JSON.parse(localStorage.getItem("Store"))
    : [];
  let formData = {
    "name" : document.getElementById("uName").value,
    "email": document.getElementById("uEmail").value,
    "password": document.getElementById("uCreatePassword").value,
    "confirmpassword": document.getElementById("uConfirmPassword").value,
  };
  data.push(formData); 
  if (localStorage) {
    localStorage.setItem("Store", JSON.stringify(data));
  }
}
// password matching
function verifyPassword(input) {
  if (input.value != uCreatePassword.value) {
    input.setCustomValidity("Password Must be Matching"); 
  } else {
    input.setCustomValidity("");
  }
}
// For UniQue (email)
function AlreadyExists(value) {
  let existemail = JSON.parse(localStorage.getItem("Store"));
  let getexistemail = existemail && existemail.filter((emailData) => {
    if (emailData.email == value.value) {
      value.setCustomValidity("email exist. try something else");
    } else {
      value.setCustomValidity("");
    }
  });
  console.log(getexistemail);
}
// Login Portion
function loginUser() {
  let loginEmail = document.getElementById("uemail").value;
  let loginPass = document.getElementById("uPassword").value;
  let matchEmail = JSON.parse(localStorage.getItem("Store"));
  console.log(matchEmail);
  let emailArray = [];
  let passArray = [];
  let result = matchEmail && matchEmail.map((emailData) => {
    emailArray.push(emailData.email);
    passArray.push(emailData.password);
  });
  console.log(result);
  if (
    emailArray.indexOf(loginEmail) > -1 &&
    passArray.indexOf(loginPass) > -1
   ) {
     alert("You have successfully loged in");
   }  else {
    alert("You have no registered with us");
   }
 }
  
 // vivek
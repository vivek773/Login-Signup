const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};
// store data in local storage
function Store() {
  let data = localStorage.getItem("SignUpdata")
    ? JSON.parse(localStorage.getItem("SignUpdata"))
    : [];
  let formData = {
    name: document.getElementById("uName").value,
    email: document.getElementById("uEmail").value,
    password: document.getElementById("uCreatePassword").value,
    confirmpassword: document.getElementById("uConfirmPassword").value,
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
//check already registered users
function AlreadyExists(value) {
  let existemail = JSON.parse(localStorage.getItem("SignUpdata"));
  let getexistemail = existemail.filter((emailData) => {
    if (emailData.email == value.value) {
      value.setCustomValidity("email exist. try something else");
    } else {
      value.setCustomValidity("");
    }
    console.log(getexistemail);
  });
}
// Login 
function login(){   
    let loginEmail = document.getElementById("uemail").value;
    let loginPass =  document.getElementById("uPassword").value;
    let matchEmail = JSON.parse(localStorage.getItem("SignUpdata"));
    console.log(matchEmail)
    let emailArray =[];
    let passArray=[];
     let result = matchEmail.map((emailData) =>{
       emailArray.push(emailData.email);
       passArray.push(emailData.password);
    });
    if(emailArray.indexOf(loginEmail) > -1 && passArray.indexOf(loginPass) > -1){
        alert("You have sucsessfuly loged in");
    }else{
        alert("You have no registered with us");
    }
  
}
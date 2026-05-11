document.getElementById("myForm").addEventListener("submit", function(event){

  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let result = document.getElementById("result");

  if(name === "" || email === "" || phone === "" || message === ""){

    result.innerHTML = "Please fill all fields!";
    result.style.color = "red";

  }

  else{

    result.innerHTML = "Form submitted successfully!";
    result.style.color = "green";

  }

});
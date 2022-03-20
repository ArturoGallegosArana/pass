// Assignment Code
var passwordR = document.getElementById("password");

//document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    var pass = "";
    var str = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstvwxyz0123456789!#$%&/()=@";
    for (i = 1; i = 8; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    alert(pass);
  }


}


// Add event listener to generate button
passwordR.addEventListener("click", writePassword());


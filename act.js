
document.getElementById("jsonButton").addEventListener("click", function() {
  let nameInput = document.getElementById("nameInput").value;
  let ageInput = document.getElementById("ageInput").value;
  let cityInput = document.getElementById("cityInput").value;

  let myObj = {
    name: nameInput,
    age: ageInput,
    city: cityInput
  };
  var myJSON = JSON.stringify(myObj);
  
  alert(myJSON);
  
  });
var myNewObj = JSON.parse(myJSON);


console.log(myNewObj.name);
console.log(myNewObj.age);
console.log(myNewObj.city);
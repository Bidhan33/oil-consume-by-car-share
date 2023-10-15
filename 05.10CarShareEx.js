
function calculateCosts() {
 
  var kilometers = Number(document.getElementById("kilometers").value);
  var consumption =Number(document.getElementById("consumption").value);
  var price =Number(document.getElementById("price").value);
  var participants = Number(document.getElementById("participants").value);

 
  var costPerPerson = (consumption / 100.0) * price * (kilometers / participants);

  // Display the result
  document.getElementById("answerId").innerHTML = "Each participant should pay: " + costPerPerson.toFixed(2) + " euros";
}

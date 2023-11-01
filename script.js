// Author: Abzal Orazbek
// Store ID
let id = 0;
// Form
let contactForm = document.getElementById("form");
// Listen for submit
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get data from inputs
  let userName = document.getElementById("name");
  let userEmail = document.getElementById("email");
  let userMessage = document.getElementById("message");
  // Add data to table
  document.getElementById("records").innerHTML +=
    "<tr>" +
    "<td scope\"row\">" +
    id++ +
    "</td>" +
    "<td>" +
    userName.value +
    "</td>" +
    "<td>" +
    userEmail.value +
    "</td>" +
    "<td>" +
    userMessage.value +
    "</td>" +
    "</tr>";
});
// Listen for click on clear button
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Reset ID
  id=0;
  // Clear table
  document.getElementById("records").innerHTML =
    "<thead>" +
    "<tr>" +
    '<th scope="col">ID</th>' +
    '<th scope="col">Name</th>' +
    '<th scope="col">Email</th>' +
    '<th scope="col">Message</th>' +
    "</tr>" +
    "</thead>";
});

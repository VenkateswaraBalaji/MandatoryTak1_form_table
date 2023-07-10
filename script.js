// DOM manipulation using JavaScript
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pinCode = document.getElementById('pinCode').value;
    var gender = document.getElementById('gender').value;
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var foodChoices = Array.from(foods).map(function(food) {
      return food.value;
    });
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
  
    // Create a new table row
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
  
    // Insert cell values
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = firstName;
  
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = lastName;
  
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = address;
  
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = pinCode;
  
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = gender;
  
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = foodChoices.join(', ');
  
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = state;
  
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = country;
  
    // Clear the form
    document.getElementById('myForm').reset();
  });
  
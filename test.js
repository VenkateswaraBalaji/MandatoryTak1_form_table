// Test suite for the form and table
function runTests() {
  // Test form submission and table update
  testSubmitForm();
}

// Test form submission and table update
function testSubmitForm() {
  // Simulate form submission with test values
  var testValues = {
    firstName: "Balaji",
    lastName: "L",
    address: "58 Marine Terrace",
    pinCode: "440058",
    gender: "male",
    food: ["pizza", "burger"],
    state: "TamilNadu",
    country: "INDIA"
  };

  // Set form values
  document.getElementById("firstName").value = testValues.firstName;
  document.getElementById("lastName").value = testValues.lastName;
  document.getElementById("address").value = testValues.address;
  document.getElementById("pinCode").value = testValues.pinCode;
  document.getElementById("gender").value = testValues.gender;
  for (var i = 0; i < testValues.food.length; i++) {
    document.getElementById("food" + (i + 1)).checked = true;
  }
  document.getElementById("state").value = testValues.state;
  document.getElementById("country").value = testValues.country;

  // Submit the form
  document.getElementById("myForm").dispatchEvent(new Event("submit"));

  // Verify the table update
  var table = document.getElementById("myTable");
  var lastRow = table.rows[table.rows.length - 1];
  var rowData = [
    lastRow.cells[0].innerHTML,
    lastRow.cells[1].innerHTML,
    lastRow.cells[2].innerHTML,
    lastRow.cells[3].innerHTML,
    lastRow.cells[4].innerHTML,
    lastRow.cells[5].innerHTML,
    lastRow.cells[6].innerHTML,
    lastRow.cells[7].innerHTML
  ];
  var expectedData = [
    testValues.firstName,
    testValues.lastName,
    testValues.address,
    testValues.pinCode,
    testValues.gender,
    testValues.food.join(", "),
    testValues.state,
    testValues.country
  ];

  if (arraysEqual(rowData, expectedData)) {
    console.log("Test Passed: Form submission and table update");
  } else {
    console.error("Test Failed: Form submission and table update");
    console.log("Expected:", expectedData);
    console.log("Received:", rowData);
  }
}

// Helper function to compare two arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Run the test suite
runTests();

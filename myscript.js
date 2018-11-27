// myscript.js
// Yaminah Qureshi
// qureshiy
// 400085876
// myscript.js contains functions used in Assignment 2, the parking lot website with a dynamic-client side

/* This function validates the Registration form, that is it checks to see if the user-entered input 
   follows the appropriate format for the input field.
   Takes in the form and returns true if all entries in the form are entered properly and
   false otherwise.
 */
function validateRegister(form) {
  var alertMsg = ""; // Stores the message to display to user indicating which fields are entered incorrectly
  var checkEntry = true; // Is true if all fields are entered correctly, set to false if a field is entered incorrectly
  if (form.fname.value == "") {
    //checks to see if First Name field contains user input
    window.alert("No First Name entered.");
    return false;
  }
  if (form.lname.value == "") {
    //checks to see if Last Name field contains user input, if not the validate function returns false
    window.alert("No Last Name entered.");
    return false;
  }
  if (form.uname.value == "") {
    //checks to see if Username field contains user input, if not the validate function returns false
    window.alert("No Username entered.");
    return false;
  }
  if (form.emailadd.value == "") {
    //checks to see if Email address field contains user input, if not the validate function returns false
    window.alert("No Email entered.");
    return false;
  }
  if (form.pass.value == "") {
    //checks to see if Password field contains user input, if not the validate function returns false
    window.alert("No Password entered.");
    return false;
  }

  if (!validateName(form.fname.value)) {
    //checks to see if First Name entry is in the appropriate format
    var el = document.getElementsByName("fname")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "First Name cannot begin with a space, contain 2 consecutive spaces or digits and must be at least 2 characters long.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("fname")[0].style.backgroundColor = "white";
  }
  if (!validateName(form.lname.value)) {
    //checks to see if Last Name entry is in the appropriate format
    var el = document.getElementsByName("lname")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Last Name cannot begin with a space, contain 2 consecutive spaces or digits and must be at least 2 characters long.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("lname")[0].style.backgroundColor = "white";
  }
  if (!validateUsername(form.uname.value)) {
    //checks to see if Username entry is in the appropriate format
    var el = document.getElementsByName("uname")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Username cannot contain spaces and must be at least 5 characters long.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("uname")[0].style.backgroundColor = "white";
  }
  if (!validateEmail(form.emailadd.value)) {
    //checks to see if Email address entry is in the appropriate format
    var el = document.getElementsByName("emailadd")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Email address must contain at least one valid character followed by '@' and a valid domain name and extension.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("emailadd")[0].style.backgroundColor = "white";
  }
  if (!validatePassword(form.pass.value)) {
    //checks to see if Password entry is in the appropriate format
    var el = document.getElementsByName("pass")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Password must be 8 characters long and contain at least 1 lowercase and 1 uppercase letter and 1 digit.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("pass")[0].style.backgroundColor = "white";
  }
  if (!checkEntry) {
    //if any of the input fields have an entry in an incorrect format
    window.alert(alertMsg); //displays an error message for each incorrect field to user
    return false; //the validate function returns fa;se
  }

  return true; //All input fields contain values in the correct format so the validate function returns true
}

/* This function validates the Search form, that is it checks to see if the user-entered input 
   follows the appropriate format for the input field.
   Takes in the form and returns true if all entries in the form are entered properly and
   false otherwise.
 */
function validateSearch(form) {
  var alertMsg = ""; // Stores the message to display to user indicating which fields are entered incorrectly
  var checkEntry = true; // Is true if all fields are entered correctly, set to false if a field is entered incorrectly

  if (!validatePrice(form.pricemin.value) && form.pricemin.value != "") {
    //checks to see if Min Price entry is in the appropriate format
    var el = document.getElementsByName("pricemin")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Minimum Price must contain only digits, a single decimal point and up to 2 digits following the decimal point.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("pricemin")[0].style.backgroundColor = "white";
  }
  if (!validatePrice(form.pricemax.value) && form.pricemax.value != "") {
    //checks to see if Max Price entry is in the appropriate format
    var el = document.getElementsByName("pricemax")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Maximum Price must contain only digits, a single decimal point and up to 2 digits following the decimal point.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("pricemax")[0].style.backgroundColor = "white";
  }
  if (
    !validatePostalCode(form.postalcode.value) &&
    form.postalcode.value != ""
  ) {
    //checks to see if Postal Code entry is in the appropriate format
    var el = document.getElementsByName("postalcode")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Postal Code must be in the Canadian Postal Code format: A0A 0A0\n";
    checkEntry = false;
  } else {
    document.getElementsByName("postalcode")[0].style.backgroundColor = "white";
  }
  if (!validateCoordinate(form.long.value) && form.long.value != "") {
    //checks to see if Longittude entry is in the appropriate format
    var el = document.getElementsByName("long")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Longittude must contain at least 1 and up to 3 digits optionally followed by a decimal point and any number of digits.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("long")[0].style.backgroundColor = "white";
  }

  if (!validateCoordinate(form.latt.value) && form.latt.value != "") {
    //checks to see if Lattitude entry is in the appropriate format
    var el = document.getElementsByName("latt")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Lattitude must contain at least 1 and up to 3 digits optionally followed by a decimal point and any number of digits.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("latt")[0].style.backgroundColor = "white";
  }

  if (!validateDistance(form.distance.value) && form.distance.value != "") {
    //checks to see if Distance entry is in the appropriate format
    var el = document.getElementsByName("distance")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += "Distance must contain a positive integer or decimal number.\n"; //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
    checkEntry = false;
  } else {
    document.getElementsByName("distance")[0].style.backgroundColor = "white";
  }
  if (!checkEntry) {
    //if any of the input fields have an entry in an incorrect format
    window.alert(alertMsg); //displays an error message for each incorrect field to user
    return false; //the validate function returns fa;se
  }

  return true; //All input fields contain values in the correct format so the validate function returns true
}

/* This function validates the Submission form, that is it checks to see if the user-entered input 
   follows the appropriate format for the input field.
   Takes in the form and returns true if all entries in the form are entered properly and
   false otherwise.
 */
function validateSubmission(form) {
  var alertMsg = ""; // Stores the message to display to user indicating which fields are entered incorrectly
  var checkEntry = true; // Is true if all fields are entered correctly, set to false if a field is entered incorrectly
  if (form.name.value == "") {
    //checks to see if Name field contains user input
    window.alert("No Name entered.");
    return false;
  }
  if (form.price.value == "") {
    //checks to see if Price field contains user input, if not the validate function returns false
    window.alert("No Price entered.");
    return false;
  }
  if (form.long1.value == "") {
    //checks to see if Longittude field contains user input, if not the validate function returns false
    window.alert("No Longittude entered.");
    return false;
  }
  if (form.latt1.value == "") {
    //checks to see if Lattitude field contains user input, if not the validate function returns false
    window.alert("No Lattitude entered.");
    return false;
  }

  if (!validateSpotName(form.name.value)) {
    //checks to see if Name entry is in the appropriate format
    var el = document.getElementsByName("name")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Name must be 5 characters long and cannot begin with a space or have consecutive spaces.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("name")[0].style.backgroundColor = "white";
  }
  if (
    !validateDescription(form.description.value) &&
    form.description.value != ""
  ) {
    //checks to see if Description entry is in the appropriate format
    var el = document.getElementsByName("description")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += "Description must be less than 300 characters.\n"; //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
    checkEntry = false;
  } else {
    document.getElementsByName("description")[0].style.backgroundColor =
      "white";
  }
  if (!validatePrice(form.price.value)) {
    //checks to see if Price entry is in the appropriate format
    var el = document.getElementsByName("price")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Price must contain only digits, a single decimal point and up to 2 digits following the decimal point.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("price")[0].style.backgroundColor = "white";
  }
  if (!validateCoordinate(form.long1.value)) {
    //checks to see if Longittude entry is in the appropriate format
    var el = document.getElementsByName("long1")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Longittude must contain at least 1 and up to 3 digits optionally followed by a decimal point and any number of digits.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("long1")[0].style.backgroundColor = "white";
  }
  if (!validateCoordinate(form.latt1.value)) {
    //checks to see if Lattitude entry is in the appropriate format
    var el = document.getElementsByName("latt1")[0]; //if entry is incorrect restyles the input element
    el.style.backgroundColor = "#f5f5f5";
    alertMsg += //if entry is incorrect adds an error message for the field to the message that will be displayed to the user
      "Lattitude must contain at least 1 and up to 3 digits optionally followed by a decimal point and any number of digits.\n";
    checkEntry = false;
  } else {
    document.getElementsByName("latt1")[0].style.backgroundColor = "white";
  }
  if (!checkEntry) {
    //if any of the input fields have an entry in an incorrect format
    window.alert(alertMsg); //displays an error message for each incorrect field to user
    return false; //the validate function returns fa;se
  }

  return true; //All input fields contain values in the correct format so the validate function returns true
}

/* This function validates a Name user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a Name.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validateName(x) {
  if (!/^\S(?!.*\s{2})(?!=.*[0-9]).{2,}$/.test(x.trim())) {
    // x cannot contain digits, 2 consecutive spaces and must be at least 2 characters long (not including leading and trailing space characters)
    return false;
  }
  return true;
}

/* This function validates a Username user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a Userame.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validateUsername(x) {
  if (!/^(?!.*\s).{5,}$/.test(x)) {
    // x cannot contain spaces and must be at least 5 characters long
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates an Email address user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for an Email address.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validateEmail(x) {
  if (
    /* x must start with at least one letter, digit, period or dash (ex: this is the user part in user@domain.ca ), 
         followed by a "@", followed by at least one digit, letter, or dash and a period afterwards (ex: this is the 
         "domain." part in user@domain.ca and can be repeated mor than once for ex: user@domain1.domain2.ca ) and at 
         least 2 characters afterwards (this is the extension, the "ca" part in user@domain.ca).
        */
    !/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/.test(x)
  ) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates a Password user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a Password.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validatePassword(x) {
  if (
    /* x must contain at least 1 digit, at least one lowercase letter, at least one uppercase letter 
         and must be a minimum of 8 characters in total
        */
    !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(x)
  ) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates a Price user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a Price.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validatePrice(x) {
  /* x must contain at least one digit optionally followed by a decimal point and either 1 or 2 digits. May have a "$" 
   at the beginning of the string
  */

  if (!/^\$?\d{1,}(\.\d{1,2})?$/.test(x)) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates a Postal Code user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a Postal Code.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validatePostalCode(x) {
  /* x must be a letter followed by a digit, a letter, optionally a space, a digit, a letter and a digit
   */

  if (!/[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/.test(x)) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates a Coordinate user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a geographical coordinate.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validateCoordinate(x) {
  /* x must be begin with 1 to 3 digits, optionally followed by a decimal point and any amount of digits and 
     may have a "+" or "-" at the beginning
    */

  if (!/^(\+|-)?\d{1,3}(\.\d*)?$/.test(x)) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates a Distance user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a Distance.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validateDistance(x) {
  /* x must be at least 1 digit optionally followed by a decimal point and any amount of digits
   */

  if (!/^\d{1,}(\.\d*)?$/.test(x)) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates a Spot Name user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for the name of a Spot.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validateSpotName(x) {
  /* x must not begin with a space, cannot have 2 consecutive spaces and must be 5 characters long
   */

  if (!/^\S(?!.*\s{2}).{5,}$/.test(x)) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function validates a Description user-entry, that is it checks to see if the user-entered input 
   follows the appropriate format for an input field asking for a Description.
   Takes in the user-entered value as a string and returns true if it is in the correct format and false otherwise.
 */
function validateDescription(x) {
  /* x must be less than 300 characters
   */

  if (!/^.{0,300}$/.test(x)) {
    return false; //x is not in an appropriate format
  }
  return true;
}

/* This function uses the html5 geolocation api to request a user's location and if permitted outputs their lattitude and longittude
   in the lattitude and longittude input fields on a form. It outputs an appropriate error message if the request is denied or 
   something goes wrong
*/
function geolocation() {
  if (navigator.geolocation) {
    //checks if browser supports the html5 geolocation api
    navigator.geolocation.getCurrentPosition(fillCoordinates, handleError);
    /* if user location is retrieved properly calls the fillCoordinates function, passing a geolocation object
     containing the user location, otherwise calls the handleErrr function passing an error object containig 
     information about the error
    */
  } else {
    window.alert("Your browser doesn't support this feature");
  }
}

/* This function takes in a geolocation object and outputs the longittude and lattitude values stored in the object to
    the input fields on a form with Id "long" and "latt", respectively.
*/
function fillCoordinates(position) {
  var longEl = document.getElementById("long"); //find longittude element
  var lattEl = document.getElementById("latt"); //find lattitude element
  longEl.value = position.coords.longitude; //ouput longittude value in longittude element
  lattEl.value = position.coords.latitude; //ouput lattitude value in lattitude element
}

/* This function takes in an error object and outputs an appropriate message to the user based on the type of error
 */
function handleError(error) {
  if (error.code == error.PERMISSION_DENIED) {
    //User did not accept the request by the browser asking for their location
    window.alert(
      "You must permit location tracking in order to use this feature"
    );
  } else {
    //An error occurred while trying to retrieve the user's location
    window.alert("Your location cannot be retrieved at this time");
  }
}

/* This function creates a map and sets its properties using the Google Map API. The map contains the location of the
   parking spot on the parking.html page and uses a marker to locate it.
*/
function mySpotMap() {
  var spotMap = new google.maps.Map(document.getElementById("spot-map"), {
    //create map in the correct div element that must contain the map
    center: new google.maps.LatLng(43.60542, -79.69185), //center map on the location of the parking spot
    zoom: 15
  });
  var marker = new google.maps.Marker({
    //create and place a marker at the location of the spot
    position: new google.maps.LatLng(43.60542, -79.69185),
    map: spotMap
  });
}

/* This function creates a map and sets its properties using the Google Map API. The map contains the location of the
   of the various parking spots that show up on the results.html page and uses markers to locate them as well as labels
   to display additional information about the spots.
*/
function myResultsMap() {
  var resultMap = new google.maps.Map(document.getElementById("results-map"), {
    //create map in the correct div element that must contain the map
    center: new google.maps.LatLng(43.55316905, -79.69105396), //center map such that all markers are in view
    zoom: 9
  });

  //labelContent<num> contains html code as a string which formats the additional information corresponding to each parking spot
  var labelContent1 =
    '<h3>123 Khan Crescent, Mississauga</h3><p>Price: $5.00/hour <br>Rating: 1.3/5 <br>This space is about a 10 minute drive from <br>UTM. Its a clean and safe area. Price...</p><a href="parking.html">See more</a>';

  var labelContent2 =
    '<h3>789 Pretend Street, Hamilton</h3><p>Price: $5.50/hour <br>Rating: 4.9/5 <br>This spot is capacious and at a convenient <br>location. Msg me at...</p><a href="parking.html">See more</a>';

  var labelContent3 =
    '<h3>1042 York Court, Toronto</h3><p>Price: $7.25/hour <br>Rating: 3.2/5 <br>This spot is capacious and at a convenient <br>location. Msg me at...</p><a href="parking.html">See more</a>';

  var labelContent4 =
    '<h3>231 Lake Crescent, North York</h3><p>Price: $7.30/hour <br>Rating: 2.2/5 <br>This spot is capacious and at a convenient <br>location. Msg me at...</p><a href="parking.html">See more</a>';

  var labelContent5 =
    '<h3>519 Mississauga Road, Mississauga</h3><p>Price: $7.85/hour <br>Rating: 4.8/5 <br>This spot is capacious and at a convenient <br>location. Msg me at...</p><a href="parking.html">See more</a>';

  //label<num> creates a label that appears everytime a marker is clicked with additional information about the spot indicated by the marker, stored in the labelContenr<num> variables
  var label1 = new google.maps.InfoWindow({
    content: labelContent1
  });
  var label2 = new google.maps.InfoWindow({
    content: labelContent5
  });
  var label3 = new google.maps.InfoWindow({
    content: labelContent2
  });
  var label4 = new google.maps.InfoWindow({
    content: labelContent4
  });
  var label5 = new google.maps.InfoWindow({
    content: labelContent3
  });

  var marker1 = new google.maps.Marker({
    //creates a marker for the first parking spot
    position: new google.maps.LatLng(43.60542, -79.69185),
    map: resultMap
  });
  marker1.addListener("click", function() {
    //links the label with the correpsonding info for this spot to the marker
    label1.open(resultMap, marker1);
  });

  var marker2 = new google.maps.Marker({
    //creates a marker for the second parking spot
    position: new google.maps.LatLng(43.61542, -79.64185),
    map: resultMap
  });
  marker2.addListener("click", function() {
    //links the label with the correpsonding info for this spot to the marker
    label2.open(resultMap, marker2);
  });

  var marker3 = new google.maps.Marker({
    //creates a marker for the third parking spot
    position: new google.maps.LatLng(43.20542, -79.89185),
    map: resultMap
  });
  marker3.addListener("click", function() {
    //links the label with the correpsonding info for this spot to the marker
    label3.open(resultMap, marker3);
  });

  var marker4 = new google.maps.Marker({
    //creates a marker for the fourth parking spot
    position: new google.maps.LatLng(43.75542, -79.45185),
    map: resultMap
  });
  marker4.addListener("click", function() {
    //links the label with the correpsonding info for this spot to the marker
    label4.open(resultMap, marker4);
  });

  var marker5 = new google.maps.Marker({
    //creates a marker for the fifth parking spot
    position: new google.maps.LatLng(43.65542, -79.45185),
    map: resultMap
  });
  marker5.addListener("click", function() {
    //links the label with the correpsonding info for this spot to the marker
    label5.open(resultMap, marker5);
  });
}

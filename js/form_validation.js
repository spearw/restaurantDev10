function validateInput() {
  var name = document.forms["contact"]["inputName"].value;
  var email = document.forms["contact"]["inputEmail"].value;
  var phone = document.forms["contact"]["inputPhone"].value;
  /* Uneeded for validation
  var additionalInfo = document.forms["contact"]["additionalInformation"].value;
  var inquiry = document.forms["contact"]["inquirySelect"].value;
  var radioValue = document.getElementsByName("gridRadios");
  for (i = 0; i < radioValue.length; i++) {
    if (radioValue[i].checked) beenBefore = radioValue[i].value;
  }
  var daysToContact = document.forms["contact"]["daysToContact"].value;
  */

  if (name == "") {
    alert("Please provide your name");
    document.forms["contact"]["inputName"].className =
      "form-control is-invalid";
    document.forms["contact"]["inputName"].focus();
    return false;
  } else if (email == "") {
    alert("Please provide your email");
    document.forms["contact"]["inputEmail"].className =
      "form-control is-invalid";
    document.forms["contact"]["inputEmail"].focus();
    return false;
  } else if (isNaN(phone) || phone.length != 10) {
    alert(
      "Please give your phone number as 10 digits with no other characters. Example: 2025550106"
    );
    document.forms["contact"]["inputPhone"].className =
      "form-control is-invalid";
    document.forms["contact"]["inputPhone"].focus();
    return false;
  } else {
    /* Validated */
    alert("Information valid");
  }
  return false;
}

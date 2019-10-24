$(function() {
  var height = parseFloat(prompt("Enter your height in cantimeters:"));
  if (height < 85) {
    alert("Sorry, there is no rides for people under 85 cm")
  }
  else if(height>=85 && height<120)
    {
      $("#weenieHutJr").css("background-color","lightgreen");
    }
    else if (height>=120)
    {
      $("#dominator").css("background-color","lightgreen");
      if (height>=165)
      {
        $("#dragster").css("background-color","lightgreen");
      }
      if(height>=200)
      {
        $("#giants").css("background-color","lightgreen");
      }
    }
    else {
      alert("Please only use numbers")
    }
});

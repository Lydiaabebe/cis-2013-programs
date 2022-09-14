  
  var intMiles, floatGallons, floatMpg;
     intMiles = parseInt(prompt("Enter miles driven"));
     floatGallons = prompt("Enter gallons of gas used");
     floatGallons = parseFloat(floatGallons)
     floatMpg = parseFloat(intMiles/floatGallons)//line calculates MPG
     alert("Miles per gallon = " + floatMpg);

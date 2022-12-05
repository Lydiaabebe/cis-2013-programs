

var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () 

//use swith statement: 
{
    var stringEntry = $("phrase").value; //dom input 
    stringEntry = stringEntry.toUpperCase(); //is this the line that makes the vowels into a capital case? 
    if (stringEntry === "") //check to make sure the input is not = to nothing
    {
        $("phrase").value= "";
        alert("please enter a phrase and select a button");
    }
    else 
    {
       var intVowel = 0;
       for( var intCount = 0; intCount < stringEntry.length; intCount++)
       {
           if(stringEntry.charAt(intCount)=== "A" || stringEntry.charAt(intCount)=== "B" || stringEntry.charAt(intCount)=== "I" || stringEntry.charAt(intCount)=== "O" || stringEntry.charAt(intCount)=== "U" );
             {
                 intVowel++; // if it is one of the letters you count it 
             }
       }
           $("output").value = "There are" + " " + intVowel + " " + "vowels in what you entered";
    }   
}



var consonants = function () 

{
var stringEntry = $("phrase").value; //dom input 
stringEntry = stringEntry.toLowerCase(); //is this the line that makes the vowels into a capital case? 
if (stringEntry === "") //check to make sure the input is not = to nothing
{
    $("phrase").value= "";
    alert("please enter a phrase and select a button");
}
else 
{
    var intConsonants = 0;
    for(intCount = 0; intCount < stringEntry.length; intCount++) //do i need to initialize the intCount
    {
        switch(stringEntry.charAt(intCount))
        {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case " ":
                break;
                default:
                    intConsonants++;
                    break;
        }
    }
    $("output").value = "Theere are" + " " + intConsonants+ " " + " consonants in the above phrase";
                
}
}





var reverse = function () 

{
    
    var stringEntry = $("phrase").value; //dom input 
 // stringEntry = stringEntry.toLowerCase(); //is this the line that makes the vowels into a capital case? 
    if (stringEntry === "") //check to make sure the input is not = to nothing
    {
        $("phrase").value= "";
        alert("please enter a phrase and select a button");
    }
    else 
    {
        var stringReversed = "";
        for (intCount = stringEntry.length-1; intCount >= 0; intCount--) //what is this one doing? 
        {
            stringReversed = stringReversed + stringEntry.charAt(intCount); //what is this one doing? 
        }
        $("output").value = "The reverse for the above phrase is: \n" + stringReversed; //what is this doing? : taking the java to html... but what is that something?
    }
}





var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  

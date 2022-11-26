//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}
 
var generate = function () 
{
	var intCount = parseInt($("total_fib").value); //what is this doing?: taking total_fib from HTML and moving it to the JS intCount variable?
    if(isNaN(intCount)|| intCount < 2 || intCount > 100)
    {
        alert("please only enter a number between 2 and 100");
        $("total_fib").value = "";  // blank out the DOM input box associated with intAmount ("total_fib")
    }

else 
    {
        var i, j, k, stringOutput;
        var i=0;
        var j=1;
        var stringOutput = i + " " + j; // initialize  the Fibbonacci numbers on the string Output (what is this line rly doing?)
    

    while (intCount>2) 
        {
        k=i+j;
        stringOutput=stringOutput + k + " ";
        i=j;
        j=k;
        intCount--;
         }
        $("output").value = stringOutput; //prints the solution to the html DOM
    }
};

window.onload = function ()
{
$("total_fib").value ="";
$("output").value ="";
$("generate").onclick = generate;
};







/*
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  
*/
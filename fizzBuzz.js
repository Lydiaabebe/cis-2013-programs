var $ = function (id) 
{
    return document.getElementById(id);
};

doStuffComputer = function()
{
	whileFunction();
	//forFunction();
	//doWhileFunction();
};


function whileFunction()
{
	var counter = 1;
	var output = "";
    while(counter<=100)
    {
        if(counter % 15===0)
        {
            output = output + "FizzBuzz\n";
            counter++;
        }
        else if(counter % 5===0)
        {
            output = output + "Buzz/n"
            counter++;
        }
            else if(counter % 3===0)
        {
            output = output + "Fizz\n"
            counter++;
        }
    }	

}







function forFunction()

{
    var output ="";
    for(var counter = 1; counter <=100; counter++)
    {
        if(counter % 15===0)
        {
            output = output + "FizzBuzz\n";
        }
        else if (counter % 5===0)
        {
            output = output + "Buzz\n";
        }
        else if (counter % 3===0)
        {
            output = output + "Fizz\n";
        }
        else 
        {
            output = output + counter+"\n";
        }
    }
}
alert(outlook); 
window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
{
   $("doIt").onclick = doStuffComputer; 
}
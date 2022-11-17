/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intGuess, intRandom, intCount;

intMin = parseInt(prompt("Choose a number greater than 0 for the minimum number"));
while (isNaN(intMin)||intMin<0)
{
    intMin = parseInt(prompt("Opps!! You need to guess a number above 0. Try again"));
}

intMax = parseInt(prompt("Choose the maximum number at lease two units greater than the minimum number you chose "));
while (isNaN(intMax)|| intMax <= (intMin +2))
{
    intMax = parseInt(prompt("Opps!! You need to guess a number above 2. Try again"));
}

intGuess = parseInt(prompt("please enter a number between the minimum and maximum number you chose"));
while (isNaN(intGuess)||intGuess < intMin||intGuess > intMax)
{
    intMax = parseInt(prompt("Please enter a number between the minimum and maximum number you chose."));
}
//new version 
    intRandom = parseInt( Math.floor(Math.random()*(intMax-intMin+1))+ intMin);
    intCount = 1
    while (intGuess != intRandom)       //this while will count the number of times the person guesses wrong
    {
        if(intGuess < intRandom) 
        {
            intGuess = parseInt(prompt("Your guess of" + intGuess + "is too low. Please guess again."));
            while (isNaN(intGuess)||intGuess < intMin || intGuess >intMax)
            {
                intGuess = parseInt(prompt("Sorry, you need to choose a number between the maximun and minimun number you cose. Make sure it is a real numebr."));
            }
        }
        else 
        {
            intGuess = parseInt(prompt("Your guess of" + intGuess + "is too high. Please guess again."));
            while (isNaN(intGuess)||intGuess < intMax||  intGuess > intMax )
            {
                intGuess = parseInt(prompt("Sorry, you need to choose a number between" + intMax + "and" + intMax));
            }
        }
        intCount++;
    }
    alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");





// calculate intRandom by generating a random number and making sure it falls between intMin and intMax ... set intCount = 1




/*
intRandom = parseInt( Math.floor(Math.random()*(intMax-intMin+1))+ intMin);
intCount = 1

while (intGuess !== intRandom)
{
    intGuess = parseInt(prompt("Guess the number"));
    intCount++

    if (intGuess === intRandom) 
    {
        alert("Correct")
        break;
    }
     if (intGuess < intRandom)
    {
        {
            alert = ("guess is too low");
            intGuess = parseInt(prompt("Choose a higher number for the guessing game"));
        }
    }
       else 
       {
            {
                alert = ("guess is too high");
                 intGuess = parseInt(prompt("Choose a lower number for the guessing game"));
            }
       }
    
    }
    alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
    " and it only took you " + intCount + " attempts!");
*/


 




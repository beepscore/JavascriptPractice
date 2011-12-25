// function can return a value, declaration doesn't show if it does.
// can define a function anywhere, browser scans for them before
// executing.
// Best practice- define before using
function myFunction (a, b)
{
    c = a*b;
    return c;
}

var dog = myFunction(2, 3);
console.log("dog = " + dog);


function testZeroIsFalse()
{
    if (!0)
    {
        console.debug("testZeroIsFalse pass");
    } else
    {
        console.error("testZeroIsFalse fail");
    }

    var expectedResult = false;
    if (0 == expectedResult)
    {
        console.debug("testZeroIsFalse pass");
    } else
    {
        console.error("testZeroIsFalse fail");
    }
    
    var myVar;
    // assignment = not equality ==
    // after assignment, myVar should be false
    if ((myVar = 0) == false)
    {
        console.debug("testZeroIsFalse pass");
    } else
    {
        console.error("testZeroIsFalse fail");
    }  
}


function testCompareThreeToBoolean()
{
    if (3)
    {
        console.debug("testCompareThreeToBoolean pass");
    } else
    {
        console.error("testCompareThreeToBoolean fail");
    }
    
    if (3 != true)
    {
        console.debug("testCompareThreeToBoolean pass");
    } else
    {
        console.error("testCompareThreeToBoolean fail");
    }
    
    var myVar;
    // assignment = not equality ==
    if ((myVar = 3) != true)
    {
        console.debug("testCompareThreeToBoolean pass");
    } else
    {
        console.error("testCompareThreeToBoolean fail");
    }
    
    if ((myVar = 3) != false)
    {
        console.debug("testCompareThreeToBoolean pass");
    } else
    {
        console.error("testCompareThreeToBoolean fail");
    }
}


function testNumber()
{
    // in JavaScript all numbers are 64 bit floating point.
    var fiveNumber = Number("5");
    var expectedResult = 5;
    if (expectedResult == fiveNumber)
    {
        console.debug("testNumber pass");
    } else
    {
        console.error("testNumber fail");
    }    
}


function testNaN()
{    
    // if assertion fails, assert logs and throws an exception
    // if assertion passes, assert doesn't log
    // Reference:
    // http://getfirebug.com/wiki/index.php/Console_API
    console.assert(!isNaN(2), "testNaN fail");

    // Number method attempts to explicitly convert argument to a number. It may return NaN.
    var actualResult = Number("foo");
    console.assert(isNaN(actualResult), "testNaN fail");
}


// call test functions
testZeroIsFalse();

testCompareThreeToBoolean();

testNumber();

testNaN();



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


// assignment = not equality ==
if (a = 3)
{
    alert("a = 3 returns true");
    console.warn("a = 3 returns true");
}


if (b = 0)
{
    console.error("b = 0 returns true");
} else
{
    console.info("b = 0 returns false");
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
    // Number method attempts to explicitly convert argument to a number. It may return NaN.
    var actualResult = Number("foo");
    
    // if assertion fails, assert logs and throws an exception
    // if assertion passes, assert doesn't log
    // Reference:
    // http://getfirebug.com/wiki/index.php/Console_API
    console.assert(isNaN(actualResult), "testNaN fail");
    console.assert(isNaN(2), "testNaN fail");
}


// call test functions
testNumber();

testNaN();



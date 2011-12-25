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


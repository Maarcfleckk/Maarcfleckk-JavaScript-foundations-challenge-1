/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
true && console.log("moo");
// This line uses the && (logical AND) operator. 
// The first operand is true, so the second operand (console.log("moo")) is evaluated and executed.
// Therefore, "moo" will be displayed in the console.

false && console.log("moo moo?");
// This line also uses the && (logical AND) operator.
// The first operand is false, so there is no need to evaluate the second operand.
// As a result, nothing will be displayed in the console.

true || console.log("hello friend");
// This line uses the || (logical OR) operator.
// The first operand is true, so there is no need to evaluate the second operand.
// Therefore, nothing will be displayed in the console.

false || console.log("bye friend");
// This line uses the || (logical OR) operator.
// The first operand is false, so the second operand (console.log("bye friend")) is evaluated and executed.
// As a result, "bye friend" will be displayed in the console.

/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
// 1. true && console.log("moo");
// Si el primer operand (true) és veritat, el segon operand (console.log("moo")) es valora i s'executa.
// Per tant, es mostrarà "moo" a la consola.
true && console.log("moo");

// 2. false && console.log("moo moo?");
// Com que el primer operand (false) és fals, no cal avaluar el segon operand.
// Com a resultat, no es mostrarà res a la consola.
false && console.log("moo moo?");

// 3. true || console.log("hello friend");
// Si el primer operand (true) és veritat, no cal avaluar el segon operand.
// Per tant, no es mostrarà res a la consola.
true || console.log("hello friend");

// 4. false || console.log("bye friend");
// Com que el primer operand (false) és fals, el segon operand (console.log("bye friend")) es valora i s'executa.
// Com a resultat, es mostrarà "bye friend" a la consola.
false || console.log("bye friend");
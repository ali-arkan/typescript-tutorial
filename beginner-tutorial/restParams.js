function Greet(greetingmsg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greetingmsg + " " + name.join(", ");
}
console.log(Greet("Hello", "Ali")); //OK
console.log(Greet("Hello")); //OK
console.log(Greet("Hello", "Ali", "Arkan")); //OK

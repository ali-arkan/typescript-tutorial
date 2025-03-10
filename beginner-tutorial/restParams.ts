function Greet(greetingmsg:string,...name:string[]) // name hold multiple values here
{
    return greetingmsg+ " " +name.join(",  "); //join(",  "); for space
}

console.log(Greet("Hello","Ali")); //OK
console.log(Greet("Hello"));//OK
console.log(Greet("Hello","Ali","Arkan"));//OK
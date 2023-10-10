// A name of a day translator from English to Tigrigna

name_day = prompt("To translate the name of the a day from English to Tigrigna. Write the name of the day:").toLowerCase();

switch(name_day) {
    case "monday":
        console.log("Senuy");
    break;

    case "tuesday":
        console.log("Selus");
    break;

    case "wensaday":
        console.log("RebuE");
    break;

    case "thursday":
        console.log("Hamus");   
    break;

    case "friday":
        console.log("Arbi");
    break;

    case "saturday":
        console.log("Kedam");   
    break;

    case "Sunday":
        console.log("Senbet");
    break;

    default:
        console.log("Error: your input is not a name of a day in english")
}

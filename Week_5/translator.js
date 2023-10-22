function helloWorld(lang) {
      
    switch(lang){
        case "es":
            alert("Hola Mundo");
            break;
        case "de":
            alert("Hola Welt");
            break;
        case "en":
            alert("Hallo, World");
            break;
        case "":
            alert("Hello World");
            break;
        default:
            alert("Error: Please enter from the above mentioned languages");
    }
}

let inputLang = prompt("Please enter your favorite language from the lists: (es, de, en)")

inputLang = inputLang.toLowerCase();

helloWorld(inputLang);

/**
 * function helloWorld(lang) {
    let lan="";
    if(lang === "es"){
        lan = "Hola Mundo";
    } else if((lang === "de")){
        lan = "Hallo Welt";
    }
    else if((lang === "en" || lang === "")){
        lan = "Hello World";
    }

    return lan;
}

let inputLang = prompt("Please enter your favorite language from the list: (es, de, en)")

inputLang = inputLang.toLowerCase();

alert(helloWorld(inputLang));
 */


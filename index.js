console.log("hi");

let chars = [];
let buttonId = document.getElementById("button-id");
console.log(buttonId);
generateAllChars();
console.log(chars);

function generateAllChars() {
    for (let i = 32; i < 127; i++) {
        chars.push(String.fromCharCode(i));
    }
}


function generatePassword(array) {
    let result = [];
    let resultString = '';
    for (let i = 0; i < 15; i++) {
        result.push(array[Math.floor(Math.random() * array.length)])
    }
    //convert to string
    for (let y = 0; y < result.length; y++) {
        resultString += result[y];
    }
    console.log(resultString);
    return resultString;
}

function generatePasswords() {
    let arrayPasswords = [];
    for (let index = 0; index < 4; index++) {
        arrayPasswords.push(generatePassword(chars))
    }
    return arrayPasswords;
}


function addPasswords() {
    let passwords = generatePasswords();
    let buttonsArray = document.querySelectorAll('.output');
    console.log(buttonsArray);
    for (let index = 0; index < buttonsArray.length; index++) {
        buttonsArray[index].textContent = passwords[index];
    }
}
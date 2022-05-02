console.log("hi");

let chars = [];
let lengthPassword = 8;
let buttonId = document.getElementById("button-id");
let popup = document.getElementById("myPopup");
generateAllChars();

function generateAllChars() {
    for (let i = 32; i < 127; i++) {
        chars.push(String.fromCharCode(i));
    }
}

function submitInformation() {
    let information = document.getElementById('inputNumber');
    let data = parseInt(information.value);
    lengthPassword = data;
}

function generatePassword(array) {
    let result = [];
    let resultString = '';
    for (let i = 0; i < lengthPassword; i++) {
        result.push(array[Math.floor(Math.random() * array.length)])
    }
    //convert to string
    for (let y = 0; y < result.length; y++) {
        resultString += result[y];
    }
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
    console.log(buttonsArray[0].value);
    for (let index = 0; index < buttonsArray.length; index++) {

        buttonsArray[index].value = passwords[index];
        buttonsArray[index].disabled = false;
        buttonsArray[index].classList.add('hidden');
    }
    console.log(buttonsArray[0].value);

    let buttonsSave = document.querySelectorAll('.button-save');
    buttonsSave.forEach(button => button.disabled = false)

}
save();
function save() {

    let wrapper = document.querySelector(".wrapper-output");

    wrapper.addEventListener('click', (event) => {
        let input = event.target.parentElement.firstElementChild;
        console.log(input.value);
        input.focus();
        input.select();
        let buttonID = event.target.id;
        // navigator.clipboard.writeText(input.value);

        // /* Alert the copied text */
        // alert("Copied the text: " + input.value);
        try {
            let successful = document.execCommand('copy');
            let msg = successful ? 'successful' : 'unsuccessful';
            console.log('Coping text command was' + msg);

            popup.classList.add("show");
            popup.textContent = 'Coping text command was ' + msg;

        }
        catch (err) {
            popup.textContent = 'Unable to copy';
        }

    })

}

function reset() {
    // popup.classList.remove("show");
    location.reload();

}
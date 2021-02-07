const input = document.querySelector('input');
const Message = document.querySelector('#warning');
const patternMessage = "Color Pattern not ok !";
const colorChecker = /#([0-9a-z]{1,2})([0-9a-z]{1,2})([0-9a-z]{1,2})/i; //reguler expression (check color code in hex)

input.addEventListener('keyup', () => {
    let inputValue = input.value; // get user input value
    Message.innerHTML = "";
    document.body.style.backgroundColor = "gray";
    input.style.color = "red";
    let len = input.value.length; // get user input value length

    if (len === 0) {
        Message.innerHTML = ""; // if no input then reset it
    }
    else if (len === 4 || len === 7) {
        const output = colorChecker.exec(inputValue); // check color code
        input.style.color = "green"; // if color code is in range then set green color

        if (output === null) { // if reguler expression not match
            Message.innerHTML = patternMessage;
        }
        else {
            const r = convertHexToDecimal(output[1]);
            const g = convertHexToDecimal(output[2]);
            const b = convertHexToDecimal(output[3]);

            if (isNaN(r) || isNaN(g) || isNaN(b)) { // check inputed range is ok or not
                Message.innerHTML = patternMessage;
            }

            else {
                // set all value to display
                document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                Message.innerHTML = `RGB: ${r} ${g} ${b}`;
            }
        }
    }
    else {
        Message.style.color = "red";
        Message.innerHTML = "Wrong Color Code !";
    }
})

// hexa decimal to desimal color converter
function convertHexToDecimal(hex) {
    if (hex.length === 1) {
        hex = hex + hex;
    }
    return parseInt(hex, 16)
}

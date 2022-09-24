function getInput() {
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById('userString').value;
    let cleanedString = cleanString(userString);
    let reversedString = reverseString(cleanedString);
    compareAndPrint(userString,cleanedString,reversedString);

}

function cleanString(userString) {
    let cleanedString = '';

    cleanedString = userString.replace(/[^a-zA-Z]/g, '');
    cleanedString = cleanedString.toLowerCase();
    return cleanedString;
}

function reverseString(cleanedString) {
    let reversedString = '';

    for (let i = ((cleanedString.length) - 1); i >= 0; i--) {
        reversedString += cleanedString[i];
    }

    return reversedString;
}

function compareAndPrint(original,cleaned,reversed){

    let alertHeader = document.getElementById('alertHead').innerHTML;
    let alertBox = document.getElementById('msg').innerHTML;
    alertBox = '';
    alertHeader = '';

    if (cleaned == reversed) {
        document.getElementById('alertHead').innerHTML = 'Congratulations! \"' + original + '\" is a palindrome!';
        document.getElementById('msg').innerHTML = 'You\'ve mastered time and space! Time to kick back and enjoy life!'
    } else {
        document.getElementById('alertHead').innerHTML = 'Sorry! \"' + original + '\" is not a palindrome.';
        document.getElementById('msg').innerHTML = 'Remember that a palindrom must mirror itself front to back and back to front.'
    }

    document.getElementById("alert").classList.remove("invisible");

}
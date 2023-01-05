function getInput() {
    document.getElementById("alert").classList.add("invisible");
    
    let returnObj = {};

    returnObj.original = document.getElementById('userString').value;
    returnObj = cleanString(returnObj);
    returnObj = reverseString(returnObj);
    compareAndPrint(returnObj);

}

function cleanString(returnObj) {

    returnObj.cleaned = returnObj.original.replace(/[^a-zA-Z]/g, '');
    returnObj.cleaned = returnObj.cleaned.toLowerCase();

    return returnObj;
}

function reverseString(returnObj) {

    returnObj.reversed = [];

    for (let i = (returnObj.cleaned.length - 1); i >= 0; i--) {
        returnObj.reversed += returnObj.cleaned[i];
    }

    return returnObj;
}

function compareAndPrint(returnObj){


    // let alertHeader = document.getElementById('alertHead').innerHTML;
    // let alertBox = document.getElementById('msg').innerHTML;
    // alertBox = '';
    // alertHeader = '';

    if (returnObj.cleaned == returnObj.reversed) {
        returnObj.head = `Congratulations! \"${returnObj.original}\" is a palindrome!`
        returnObj.msg = 'You\'ve mastered time and space! Time to kick back and enjoy life!'        
    } else {
        returnObj.head = `Sorry! \"${returnObj.original}\" is not a palindrome.`
        returnObj.msg = 'Remember that a palindrom must mirror itself front to back and back to front.'
    }

    document.getElementById('alertHead').innerHTML = returnObj.head;
    document.getElementById('msg').innerHTML = returnObj.msg;

    //     document.getElementById('alertHead').innerHTML = 'Congratulations! \"' + original + '\" is a palindrome!';
    //     document.getElementById('msg').innerHTML = 'You\'ve mastered time and space! Time to kick back and enjoy life!'
    // } else {
    //     document.getElementById('alertHead').innerHTML = 'Sorry! \"' + original + '\" is not a palindrome.';
    //     document.getElementById('msg').innerHTML = 'Remember that a palindrom must mirror itself front to back and back to front.'
    // }

    document.getElementById("alert").classList.remove("invisible");

}
let darkMode = localStorage.getItem('darkModeTacocat');

const darkModeToggle = document.getElementById('dark-mode-toggle');

const enableDarkMode = () => {
    //Remove lightMode class from the body
    document.body.classList.remove('lightMode');
    //Add darkMode class to the body
    document.body.classList.add('darkMode');
    //Update the localstorage variable
    localStorage.setItem('darkModeTacocat', 'enabled');
}

const disableDarkMode = () => {
    //Remove darkMode class from the body
    document.body.classList.remove('darkMode');
    //Add lightMode class to the body
    document.body.classList.add('lightMode');
    //Update the local storage variable
    localStorage.setItem('darkModeTacocat', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkModeTacocat');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
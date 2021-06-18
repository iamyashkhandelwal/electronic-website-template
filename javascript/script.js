console.log("script.js");

var navButton = document.getElementById("open");

navButton.addEventListener('click', () => {

    if (document.getElementById("resp").style.display === 'none') {
        document.getElementById("resp").style.display = 'block';
    }
    else {
        document.getElementById("resp").style.display = 'none';
    }
});
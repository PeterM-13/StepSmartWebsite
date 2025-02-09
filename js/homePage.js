
// Code for 'Smart Stick' <-> 'App' view button toggle.
document.addEventListener('DOMContentLoaded', () => {
    const stickViewButton = document.getElementById('stickView');
    const appViewButton = document.getElementById('appView');

    function toggleButtons(selectedButton, otherButton) {
        selectedButton.classList.add('selectedToggle');
        selectedButton.classList.remove('defaultToggle');
        otherButton.classList.add('defaultToggle');
        otherButton.classList.remove('selectedToggle');
        if (selectedButton.id === 'appView') {
            document.getElementById('render2').classList.add('hidden');
            document.getElementById('appRender').classList.remove('hidden');
        } else if (selectedButton.id === 'stickView') {
            document.getElementById('appRender').classList.add('hidden');
            document.getElementById('render2').classList.remove('hidden');
        }  }

    stickViewButton.addEventListener('click', () => {
        toggleButtons(stickViewButton, appViewButton);
    });

    appViewButton.addEventListener('click', () => {
        toggleButtons(appViewButton, stickViewButton);
    });
});


// When stick render clicked, the expand icon expands - encouraging user to click on it.
const expandIcon = document.getElementById('expandIcon');
const stick1 = document.getElementById('V1render');
const stick2 = document.getElementById('V2render');
const stick3 = document.getElementById('V3render');
stick1.addEventListener('click', () => {
    expandIcon.classList.add('highlight');
    setTimeout(() => {
        expandIcon.classList.remove('highlight');
    }, 500);
});
stick2.addEventListener('click', () => {
    expandIcon.classList.add('highlight');
    setTimeout(() => {
        expandIcon.classList.remove('highlight');
    }, 500);
});
stick3.addEventListener('click', () => {
    expandIcon.classList.add('highlight');
    setTimeout(() => {
        expandIcon.classList.remove('highlight');
    }, 500);
});


// Handles and verifies email input.
const emailButton = document.getElementById('emailButton');
const emailInput = document.getElementById('emailInput');

emailButton.addEventListener('click', async() => {
    const emailText = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(emailText)) {
        let save = await saveEmail(emailText);
        if(save){
            emailButton.disabled = true;
            emailInput.disabled = true;
            document.getElementById('emailSuccess').style.display = 'block';
            return
        }
        console.log('Invalid save');
    }
    console.log('Invalid email');
});


async function saveEmail(emailInput){
    // TODO
    return true;
}
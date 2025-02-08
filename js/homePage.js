
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
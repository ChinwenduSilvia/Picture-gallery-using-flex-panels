const panelContainer = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
panelContainer.forEach(panel => panel.addEventListener('click', toggleOpen));
panelContainer.forEach(panel => panel.addEventListener('transitionend', toggleActive));

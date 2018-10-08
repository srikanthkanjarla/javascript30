const panels = document.querySelectorAll('.panel');
let activePanel = '';
panels.forEach(function (panel) {
    panel.classList.remove('active');
    panel.addEventListener('click', function () {
        this.classList.toggle('active');
        this.querySelector('p:first-child').classList.toggle('close');
        this.querySelector('p:last-child').classList.toggle('close');
    })
});
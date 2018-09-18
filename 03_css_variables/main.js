const controls = document.querySelectorAll('input');
function updateControl() {
    const unit = this.dataset.unit || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}

controls.forEach(control => control.addEventListener('change', updateControl));
controls.forEach(control => control.addEventListener('mousemove', updateControl));


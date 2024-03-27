import '../scss/style.scss'


document.addEventListener('DOMContentLoaded', function () {
    var services = document.querySelectorAll('.service');
    var windowHeight = window.innerHeight;

    function checkScroll() {
        services.forEach(function (service) {
            var servicePosition = service.getBoundingClientRect().top;
            if (servicePosition - windowHeight <= 0) {
                service.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

var input = document.querySelector('#burger');

input.addEventListener('change', function () {
    if (input.checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});


export function showForm() {
    var modal = document.getElementById("modal");
    var overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
};

export function closeModal() {
    var modal = document.getElementById("modal");
    var overlay = document.getElementById("overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    var phoneField = document.getElementById('phoneField');

    phoneField.addEventListener('input', function () {
        if (!phoneField.validity.patternMismatch) {
            phoneField.setCustomValidity('');
        } else {
            phoneField.setCustomValidity('Будь ласка, введіть номер телефону в форматі: +380 (XX) XXX-XX-XX');
        }
    });
});


window.showForm = showForm;
window.closeModal = closeModal;
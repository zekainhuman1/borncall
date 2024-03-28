import '../scss/style.scss'
// document.addEventListener("DOMContentLoaded", function () {
//     var preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', function () {
    var services = document.querySelectorAll('.service');
    var windowHeight = window.innerHeight;
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.getElementById("header").classList.remove('hidden');
    document.getElementById("main").classList.remove('hidden');
    document.getElementById("footer").classList.remove('hidden');


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
            phoneField.setCustomValidity('Будь ласка, введіть номер телефону в форматі: +380XXXXXXXXX, де Х це цифра');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.modal__form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        closeModal();
        showConfirmation();
    });
});

// function showConfirmation() {
//     var confirmationModal = document.getElementById('confirmationModal');
//     var overlay = document.getElementById('overlay');

//     confirmationModal.style.display = 'block';
//     overlay.style.display = 'block';

//     setTimeout(function () {
//         confirmationModal.style.display = 'none';
//         overlay.style.display = 'none';
//     }, 3000);
// }


window.showForm = showForm;
window.closeModal = closeModal;
// window.showConfirmation = showConfirmation;
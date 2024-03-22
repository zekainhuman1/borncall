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
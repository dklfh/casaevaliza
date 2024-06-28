document.getElementById('hamburgerMenu').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var bars = document.querySelectorAll('#hamburgerMenu .bar');
    var backdrop = document.getElementById('backdrop');

    if (sidebar && bars) {
        if (sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            backdrop.classList.remove('hidden');
            backdrop.classList.add('backdrop-visible');

            bars[0].classList.add('rotate-45', 'translate-y-1.5');
            bars[1].classList.add('opacity-0');
            bars[2].classList.add('-rotate-45', '-translate-y-1.5');

        } else {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
            backdrop.classList.add('hidden');
            backdrop.classList.remove('backdrop-visible');

            bars[0].classList.remove('rotate-45', 'translate-y-1.5');
            bars[1].classList.remove('opacity-0');
            bars[2].classList.remove('-rotate-45', '-translate-y-1.5');
        }
    }
});

backdrop.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var bars = document.querySelectorAll('#hamburgerMenu .bar');
    var backdrop = document.getElementById('backdrop');

    if (sidebar && bars) {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
        backdrop.classList.remove('backdrop-visible');

        bars[0].classList.remove('rotate-45', 'translate-y-1.5');
        bars[1].classList.remove('opacity-0');
        bars[2].classList.remove('-rotate-45', '-translate-y-1.5');
    }
});
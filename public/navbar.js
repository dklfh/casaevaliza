document.getElementById('hamburgerMenu').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var bars = document.querySelectorAll('#hamburgerMenu .bar');
    var moreVert = document.getElementById('moreVert');
    var hiddenImage = document.getElementById('hiddenImage');

    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        
        bars[0].classList.add('rotate-45', 'translate-y-1.5');
        bars[1].classList.add('opacity-0');
        bars[2].classList.add('-rotate-45', '-translate-y-1.5');

        // Disable moreVert button
        moreVert.classList.add('pointer-events-none');

        // Close hiddenImage if it is open
        if (!hiddenImage.classList.contains('translate-x-full')) {
            hiddenImage.classList.add('translate-x-full');
            hiddenImage.classList.remove('translate-x-0');
        }
    } else {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        
        bars[0].classList.remove('rotate-45', 'translate-y-1.5');
        bars[1].classList.remove('opacity-0');
        bars[2].classList.remove('-rotate-45', '-translate-y-1.5');

        // Enable moreVert button
        moreVert.classList.remove('pointer-events-none');
    }
});

document.getElementById('moreVert').addEventListener('click', function() {
    var hiddenImage = document.getElementById('hiddenImage');
    var sidebar = document.getElementById('sidebar');
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var bars = document.querySelectorAll('#hamburgerMenu .bar');

    if (hiddenImage.classList.contains('translate-x-full')) {
        hiddenImage.classList.remove('translate-x-full');
        hiddenImage.classList.add('translate-x-0');

        // Disable hamburger button
        hamburgerMenu.classList.add('pointer-events-none');

        // Close sidebar if it is open
        if (!sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.add('-translate-x-full');
            sidebar.classList.remove('translate-x-0');

            bars[0].classList.remove('rotate-45', 'translate-y-1.5');
            bars[1].classList.remove('opacity-0');
            bars[2].classList.remove('-rotate-45', '-translate-y-1.5');
        }
    } else {
        hiddenImage.classList.remove('translate-x-0');
        hiddenImage.classList.add('translate-x-full');

        // Enable hamburger button
        hamburgerMenu.classList.remove('pointer-events-none');
    }
});

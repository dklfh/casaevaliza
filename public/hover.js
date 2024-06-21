document.querySelectorAll('li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.querySelector('span').classList.add('opacity-100');
        link.querySelector('span').classList.remove('opacity-0');
    });
    link.addEventListener('mouseleave', () => {
        link.querySelector('span').classList.add('opacity-0');
        link.querySelector('span').classList.remove('opacity-100');
    });
});
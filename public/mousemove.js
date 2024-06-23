const container = document.getElementById('draggable-container');
const image = document.getElementById('draggable-image');

let isDragging = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'move';
});

const stopDragging = () => {
    if (isDragging) {
        isDragging = false;
        container.style.cursor = 'default';
    }
};

container.addEventListener('mouseleave', stopDragging);
container.addEventListener('mouseup', stopDragging);

container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;

    // Check if the image has reached the end and loop back
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
    } else if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth - container.clientWidth;
    }
});

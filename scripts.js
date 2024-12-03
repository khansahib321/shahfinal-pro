
window.onload = function() {
  console.log('Page loaded successfully!');
  document.body.style.opacity = 1;  // Example of fade-in effect (optional)
}

document.addEventListener('mousemove', function(event) {
  const x = event.clientX;
  const y = event.clientY;
  const gallery = document.getElementById('gallery');

  gallery.style.transform = `rotate(${x / 20}deg) translateY(${y / 100}px)`;
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    // Navigate to the next focusable figure element
    const nextFocus = document.querySelector('figure:focus + figure');
    if (nextFocus) {
      nextFocus.focus();
    }
  } else if (event.key === 'ArrowLeft') {
    // Navigate to the previous focusable figure element
    const prevFocus = document.querySelector('figure:focus').previousElementSibling;
    if (prevFocus) {
      prevFocus.focus();
    }
  }
});

const figures = document.querySelectorAll('figure');
figures.forEach(function(figure) {
  if (!figure.hasAttribute('tabindex')) {
    figure.setAttribute('tabindex', '0');
  }
});

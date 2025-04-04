// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const content = document.querySelector('.content');
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    content.style.transform = `translate(${x}px, ${y}px)`;
  });
  
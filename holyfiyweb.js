const logo = document.querySelector('.logo img');
if (logo) {
  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});


document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});


const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const menuBtn = document.querySelector('.slide img');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});


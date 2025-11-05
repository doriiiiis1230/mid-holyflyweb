// ========== 點選 LOGO 回首頁 ==========
const logo = document.querySelector('.logo img');
if (logo) {
  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// ========== 滾動出現動畫效果 ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

// ✅ 只觀察有動畫 class 的元素（不會影響一般圖片）
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});

// 側拉選單控制
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

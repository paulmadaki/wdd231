 const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const closeBtn = document.getElementById('close');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
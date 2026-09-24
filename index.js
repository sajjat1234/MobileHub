const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));

function closeMenu(){
  navLinks.classList.remove('open');
}

function buyNow(name, price){
  const toast = document.getElementById('toast');
  toast.textContent = `${name} added — ${price}. We'll message you on WhatsApp to confirm!`;
  toast.classList.add('show');
  clearTimeout(window._t);
  window._t = setTimeout(() => toast.classList.remove('show'), 3200);
}

///////////////////////////////////////////////
// Fonction pour changer le theme de la page //
///////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  // Chargement du theme sauvegardé
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    const icon = themeSwitch.querySelector('.material-icons');
    if (savedTheme === 'dark-mode') {
      icon.textContent = 'dark_mode';
    } else {
      icon.textContent = 'light_mode';
    }
  }

  // Mise à jour du thème
  themeSwitch.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Sauvegarde du theme
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
    } else {
      localStorage.setItem('theme', 'light-mode');
    }

    // Changement icône
    const icon = themeSwitch.querySelector('.material-icons');
    if (body.classList.contains('dark-mode')) {
      icon.textContent = 'dark_mode';
    } else {
      icon.textContent = 'light_mode';
    }
  });
});





/////////////////////////////////////////////
// Fonction pour ouvrir le menu sur mobile //
/////////////////////////////////////////////
const OpenMenu = () => {
  const menu = document.querySelector('.header-menu');
  const icon = document.querySelector('header .material-icons');
  const EtatMenu = window.getComputedStyle(menu).display;

  if (EtatMenu === 'none') {
    menu.style.display = 'flex';
    icon.innerHTML = 'close';

    // Fermer le menu si on clique sur un lien
    const MenuButtons = document.querySelectorAll('.header-menu li a');
    MenuButtons.forEach(link => {
      link.addEventListener('click', () => {
        menu.style.display = 'none';
        icon.innerHTML = 'menu';
      });
    });

  } else {
    menu.style.display = 'none';
    icon.innerHTML = 'menu';
  }
}
const app = {};

app.menuButton = document.querySelector('.menu-button');

app.nav = document.querySelector('nav');

app.mobileNavLinks = document.querySelectorAll('.mobile-nav a');

app.toggleAriaLabel = () => {
  if (document.querySelector('.expanded')) {
    app.menuButton.setAttribute('aria-label', 'Close the menu');
  } else {
    app.menuButton.setAttribute('aria-label', 'Open the menu');
  }
}

app.menuButtonEventHandler = e => {
  app.menuButton.classList.toggle('expanded');
  app.nav.classList.toggle('expanded');
  app.toggleAriaLabel();
};

app.init = () => {
  app.menuButton.addEventListener('click', app.menuButtonEventHandler);
  app.mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', app.menuButtonEventHandler);
  });
}

if (document.readyState === "complete") {
	app.init();
} else {
	document.addEventListener("DOMContentLoaded", app.init);
};

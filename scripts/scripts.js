const app = {};

app.menuButton = document.querySelector('.menu-button');

app.nav = document.querySelector('nav');

app.toggleAriaLabel = () => {
  if (document.querySelector('.expanded')) {
    app.menuButton.setAttribute('aria-label', 'Close the menu');
  } else {
    app.menuButton.setAttribute('aria-label', 'Open the menu');
  }
}

app.menuButtonEventHandler = e => {
    e.preventDefault();

    app.menuButton.classList.toggle('expanded');
    app.nav.classList.toggle('expanded');
    app.toggleAriaLabel();
};

app.init = () => {
  app.menuButton.addEventListener('click', app.menuButtonEventHandler);
}

if (document.readyState === "complete") {
	app.init();
} else {
	document.addEventListener("DOMContentLoaded", app.init);
};

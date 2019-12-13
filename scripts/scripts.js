const app = {};

app.menuButtonEventHandler = () => {
  const hamburger = {
    menuButton: document.querySelector('.menu-button'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.menuButton.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.menuButton.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
}


app.init = () => {
  app.menuButtonEventHandler();
}

if (document.readyState === "complete") {
	app.init();
} else {
	document.addEventListener("DOMContentLoaded", app.init);
};
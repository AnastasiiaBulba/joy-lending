function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');
loadHTML('onas', 'partials/onas.html');
loadHTML('nasze', 'partials/nasze.html');
loadHTML('treningi', 'partials/treningi.html');
loadHTML('historie', 'partials/historie.html');
loadHTML('cennik', 'partials/cennik.html');
loadHTML('kontakt', 'partials/kontakt.html');
loadHTML('footer', 'partials/footer.html');

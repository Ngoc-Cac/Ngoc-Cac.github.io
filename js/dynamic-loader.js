async function load(id, html_comp) {
  return fetch(html_comp)
    .then(res => res.text())
    .then(html => { document.getElementById(id).innerHTML = html; })
}

function load_tab_bar(current_page) {
  load("navbar", "/navbar.html")
    .then(() => {
      document.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") === current_page) {
          if (link.getAttribute("class") === "nav-button") {
            link.classList.add("active");
          } else {
            link.style.pointerEvents = "none";
          }
        }
      });
    });
}

function load_footer() { load("footer-placeholder", "/footer.html") } 

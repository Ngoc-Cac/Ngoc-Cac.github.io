function load_tab_bar(current_page) {
  fetch("/navbar.html")
    .then(res => res.text())
    .then(html => { document.getElementById("navbar").innerHTML = html; })
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

function load_footer() {
  fetch("/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
    })
} 

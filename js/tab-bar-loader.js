const nav_bar_template = "https://raw.githubusercontent.com/Ngoc-Cac/Ngoc-Cac.github.io/refs/heads/main/navbar.html";

function load_tab_bar(current_page) {
  fetch(nav_bar_template)
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

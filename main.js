// الوضع الليلي
const toggleButton = document.getElementById("themeToggle");

function setThemeIcon() {
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  setThemeIcon();
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  setThemeIcon();
};

// تحميل الفيديو
function downloadFile(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

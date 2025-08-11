function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  const button = document.getElementById("moveButton");
  button.addEventListener("click", () => {
    button.classList.toggle("moved");
  });
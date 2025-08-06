// Mostrar/Ocultar menú lateral
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-sidebar");
  
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  });
  
  // Cambiar secciones
  function mostrarSeccion(id, event) {
    if (event) event.preventDefault();
  
    document.querySelectorAll(".seccion").forEach((sec) => {
      sec.classList.remove("visible");
      sec.classList.add("hidden");
    });
  
    const target = document.getElementById(id);
    if (target) {
      target.classList.remove("hidden");
      target.classList.add("visible");
    }
  
    // Ocultar sidebar al cambiar sección
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
  }
  
document.addEventListener("DOMContentLoaded", () => {
    // Загрузка Header
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      fetch("./header.html")
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load header: ${response.status} ${response.statusText}`);
          }
          return response.text();
        })
        .then(data => {
          headerElement.innerHTML = data;
        })
        .catch(error => {
          console.error("Error loading header:", error);
        });
    }
  
    // Загрузка Sidebar
    const sidebarElement = document.querySelector(".sidebar");
    if (sidebarElement) {
      fetch("./sidebar.html")
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load sidebar: ${response.status} ${response.statusText}`);
          }
          return response.text();
        })
        .then(data => {
          sidebarElement.innerHTML = data;
        })
        .catch(error => {
          console.error("Error loading sidebar:", error);
        });
    }
  });
  
document.addEventListener("DOMContentLoaded", function() {
    // Simulación de datos (esto puede provenir de una API o base de datos)
    const investors = [
        "Inversor A (Industria Tech, Ubicación: Bogotá)",
        "Inversor B (Industria FinTech, Ubicación: Medellín)",
        "Inversor C (Industria GreenTech, Ubicación: Cali)"
    ];
    const projects = [
        "Proyecto A (Fase de Idea)",
        "Proyecto B (Fase de Prototipo)",
        "Proyecto C (Fase de Implementación)"
    ];
    const mentors = [
        "Mentor A (Especializado en Marketing)",
        "Mentor B (Especializado en Desarrollo de Producto)",
        "Mentor C (Especializado en Finanzas)"
    ];

    // Función para actualizar las listas con datos
    function updateList(id, items) {
        const list = document.getElementById(id);
        list.innerHTML = items.map(item => `<li class="list-group-item">${item}</li>`).join('');
    }

    // Filtrado en las listas
    function filterList(searchInput, listId, data) {
        const query = searchInput.value.toLowerCase();
        const filteredData = data.filter(item => item.toLowerCase().includes(query));
        updateList(listId, filteredData);
    }

    // Inicializar listas con los datos
    updateList("investors-list", investors);
    updateList("projects-list", projects);
    updateList("mentors-list", mentors);

    // Añadir event listeners a los inputs de búsqueda
    document.getElementById("investors-search").addEventListener("input", function() {
        filterList(this, "investors-list", investors);
    });
    document.getElementById("projects-search").addEventListener("input", function() {
        filterList(this, "projects-list", projects);
    });
    document.getElementById("mentors-search").addEventListener("input", function() {
        filterList(this, "mentors-list", mentors);
    });
});
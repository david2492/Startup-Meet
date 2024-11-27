document.addEventListener('DOMContentLoaded', function () {
    // Function to hide all dynamic forms and content
    function hideAllForms() {
        const formsToHide = [
            'ideaForm', 
            'investorForm', 
            'politicsForm', 
            'mentorForm', 
            'profileForm'
        ];
        formsToHide.forEach(formId => {
            const form = document.getElementById(formId);
            if (form) form.style.display = 'none';
        });
        document.getElementById('dynamicContent').style.display = 'block';
    }

    // Recover user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // Show greeting with name
        document.getElementById('userGreeting').innerHTML = `Bienvenido, ${user.name}!`;

        // Show/hide elements based on user type
        const ideaLink = document.getElementById('ideaLink');
        const investorLink = document.getElementById('investorLink');
        const politicsLink = document.getElementById('politicsLink');
        const mentorLink = document.getElementById('mentorLink');
        const profileLink = document.getElementById('profileLink');

        if (user.userType === 'emprendedor') {
            // Show Entrepreneur options
            ideaLink.style.display = 'block';
            investorLink.style.display = 'block';
            politicsLink.style.display = 'block';
            mentorLink.style.display = 'block';

            // Add event listeners for each menu option
            profileLink.addEventListener('click', function() {
                hideAllForms();
                
                // Create profile form if it doesn't exist
                let profileForm = document.getElementById('profileForm');
                if (!profileForm) {
                    profileForm = document.createElement('div');
                    profileForm.id = 'profileForm';
                    profileForm.innerHTML = `
                        <h3>Perfil de Usuario</h3>
                        <div class="card">
                            <div class="card-body">
                                <p><strong>Nombre:</strong> ${user.name}</p>
                                <p><strong>Email:</strong> ${user.email}</p>
                                <p><strong>Tipo de Usuario:</strong> ${user.userType}</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-secondary mt-3" id="cancelProfileButton">Cancelar</button>
                    `;
                    document.getElementById('content').appendChild(profileForm);
                }
                
                // Show profile form and hide dynamic content
                profileForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';

                // Add cancel button listener
                document.getElementById('cancelProfileButton')?.addEventListener('click', function() {
                    profileForm.style.display = 'none';
                    document.getElementById('dynamicContent').style.display = 'block';
                });
            });

            // Existing menu option event listeners (now using hideAllForms())
            ideaLink.addEventListener('click', function () {
                hideAllForms();
                document.getElementById('ideaForm').style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            });

            investorLink.addEventListener('click', function () {
                hideAllForms();
                const investorForm = document.getElementById('investorForm');
                investorForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';

                // List of investors (static example)
                const investors = [
                    { name: 'Inversor 1', description: 'Inversor en proyectos de tecnología' },
                    { name: 'Inversor 2', description: 'Inversor en proyectos de sostenibilidad' },
                    { name: 'Inversor 3', description: 'Inversor en proyectos educativos' }
                ];

                const investorList = document.getElementById('investorList');
                investorList.innerHTML = ''; // Clear list
                investors.forEach(investor => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('list-group-item');
                    listItem.innerHTML = `${investor.name} - ${investor.description}`;
                    investorList.appendChild(listItem);
                });
            });

            politicsLink.addEventListener('click', function () {
                hideAllForms();
                document.getElementById('politicsForm').style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            });

            mentorLink.addEventListener('click', function () {
                hideAllForms();
                document.getElementById('mentorForm').style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            });

            // Existing form submission and cancel button logics remain the same...
            // (Rest of the previous code remains unchanged)
            // ... [previous form submission and cancel button event listeners]
        }
    } else {
        // If no user in localStorage, redirect to login
        window.location.href = 'registro.html';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Función para ocultar todos los formularios dinámicos
    function hideAllForms() {
        const formsToHide = [
            'profileForm', 
            'projectSearchForm', 
            'virtualMeetingsForm', 
            'favoritesForm'
        ];
        formsToHide.forEach(formId => {
            const form = document.getElementById(formId);
            if (form) form.style.display = 'none';
        });
        document.getElementById('dynamicContent').style.display = 'block';
    }

    // Recuperar datos del usuario desde localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // Mostrar saludo con el nombre
        document.getElementById('userGreeting').innerHTML = `Bienvenido, ${user.name}!`;

        // Obtener referencias a elementos del menú
        const profileLink = document.getElementById('profileLink');
        const projectSearchLink = document.getElementById('projectSearchLink');
        const virtualMeetingsLink = document.getElementById('virtualMeetingsLink');
        const favoritesLink = document.getElementById('favoritesLink');

        // Modificar menú para inversores
        if (user.userType === 'inversor') {
            // Ocultar enlaces no relevantes
            document.getElementById('ideaLink').style.display = 'none';
            document.getElementById('investorLink').style.display = 'none';
            document.getElementById('politicsLink').style.display = 'none';
            document.getElementById('mentorLink').style.display = 'none';

            // Mostrar nuevos enlaces específicos para inversores
            const menuGroup = document.querySelector('.list-group');
            
            // Agregar nuevos enlaces después del perfil
            const projectSearchLinkEl = document.createElement('a');
            projectSearchLinkEl.href = '#';
            projectSearchLinkEl.id = 'projectSearchLink';
            projectSearchLinkEl.className = 'list-group-item list-group-item-action';
            projectSearchLinkEl.textContent = 'Buscar Proyectos';
            menuGroup.insertBefore(projectSearchLinkEl, profileLink.nextSibling);

            const virtualMeetingsLinkEl = document.createElement('a');
            virtualMeetingsLinkEl.href = '#';
            virtualMeetingsLinkEl.id = 'virtualMeetingsLink';
            virtualMeetingsLinkEl.className = 'list-group-item list-group-item-action';
            virtualMeetingsLinkEl.textContent = 'Reuniones Virtuales';
            menuGroup.insertBefore(virtualMeetingsLinkEl, projectSearchLinkEl.nextSibling);

            const favoritesLinkEl = document.createElement('a');
            favoritesLinkEl.href = '#';
            favoritesLinkEl.id = 'favoritesLink';
            favoritesLinkEl.className = 'list-group-item list-group-item-action';
            favoritesLinkEl.textContent = 'Proyectos Favoritos';
            menuGroup.insertBefore(favoritesLinkEl, virtualMeetingsLinkEl.nextSibling);

            // Perfil de Inversor
            profileLink.addEventListener('click', function() {
                hideAllForms();
                
                let profileForm = document.getElementById('profileForm');
                if (!profileForm) {
                    profileForm = document.createElement('div');
                    profileForm.id = 'profileForm';
                    profileForm.innerHTML = `
                        <h3>Perfil de Inversor</h3>
                        <div class="card">
                            <div class="card-body">
                                <p><strong>Nombre:</strong> ${user.name}</p>
                                <p><strong>Email:</strong> ${user.email}</p>
                                <p><strong>Tipo de Usuario:</strong> Inversor</p>
                                <p><strong>Áreas de Interés:</strong> Tecnología, Sostenibilidad</p>
                                <p><strong>Capital Disponible:</strong> $500,000,000</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-secondary mt-3" id="cancelProfileButton">Cancelar</button>
                    `;
                    document.getElementById('content').appendChild(profileForm);
                }
                
                profileForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';

                document.getElementById('cancelProfileButton')?.addEventListener('click', function() {
                    profileForm.style.display = 'none';
                    document.getElementById('dynamicContent').style.display = 'block';
                });
            });

            // Buscar Proyectos
            projectSearchLinkEl.addEventListener('click', function() {
                hideAllForms();
                
                let projectSearchForm = document.getElementById('projectSearchForm');
                if (!projectSearchForm) {
                    projectSearchForm = document.createElement('div');
                    projectSearchForm.id = 'projectSearchForm';
                    projectSearchForm.innerHTML = `
                        <h3>Buscar Proyectos</h3>
                        <form id="searchProjectsForm">
                            <div class="mb-3">
                                <label for="projectCategory" class="form-label">Categoría</label>
                                <select class="form-select" id="projectCategory">
                                    <option value="">Todas las Categorías</option>
                                    <option value="tecnologia">Tecnología</option>
                                    <option value="sostenibilidad">Sostenibilidad</option>
                                    <option value="educacion">Educación</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="projectInvestment" class="form-label">Rango de Inversión</label>
                                <select class="form-select" id="projectInvestment">
                                    <option value="">Todos los Rangos</option>
                                    <option value="10.000.000-50.000.000">$10,000,000 - $50,000,000</option>
                                    <option value="50.000.000-100.000.000">$50,000,000 - $100,000,000</option>
                                    <option value="100.000.000+">Más de $100,000,000</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Buscar Proyectos</button>
                        </form>
                        <div id="projectResults" class="mt-4">
                            <!-- Resultados de búsqueda se mostrarán aquí -->
                        </div>
                    `;
                    document.getElementById('content').appendChild(projectSearchForm);

                    // Manejar búsqueda de proyectos
                    document.getElementById('searchProjectsForm').addEventListener('submit', function(e) {
                        e.preventDefault();
                        const category = document.getElementById('projectCategory').value;
                        const investment = document.getElementById('projectInvestment').value;
                        const projectResults = document.getElementById('projectResults');

                        // Ejemplo de proyectos (normalmente vendría de un backend)
                        const projects = [
                            { 
                                name: 'Proyecto de Energía Solar', 
                                category: 'sostenibilidad', 
                                investment: '50.000.000-100.000.000',
                                description: 'Desarrollo de paneles solares de alta eficiencia'
                            },
                            { 
                                name: 'Plataforma de Educación Online', 
                                category: 'educacion', 
                                investment: '10.000.000-50.000.000',
                                description: 'Aplicación de aprendizaje interactivo'
                            }
                        ];

                        // Filtrar proyectos
                        const filteredProjects = projects.filter(project => 
                            (category === '' || project.category === category) &&
                            (investment === '' || project.investment === investment)
                        );

                        // Mostrar resultados
                        projectResults.innerHTML = filteredProjects.length > 0 
                            ? filteredProjects.map(project => `
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <h5 class="card-title">${project.name}</h5>
                                        <p class="card-text">${project.description}</p>
                                        <button class="btn btn-sm btn-outline-primary me-2">Ver Detalles</button>
                                        <button class="btn btn-sm btn-outline-success">Agregar a Favoritos</button>
                                    </div>
                                </div>
                            `).join('') 
                            : '<p>No se encontraron proyectos que coincidan con los criterios.</p>';
                    });
                }
                
                projectSearchForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            });

            // Reuniones Virtuales
            virtualMeetingsLinkEl.addEventListener('click', function() {
                hideAllForms();
                
                let virtualMeetingsForm = document.getElementById('virtualMeetingsForm');
                if (!virtualMeetingsForm) {
                    virtualMeetingsForm = document.createElement('div');
                    virtualMeetingsForm.id = 'virtualMeetingsForm';
                    virtualMeetingsForm.innerHTML = `
                        <h3>Gestionar Reuniones Virtuales</h3>
                        <form id="scheduleMeetingForm">
                            <div class="mb-3">
                                <label for="meetingProject" class="form-label">Proyecto</label>
                                <select class="form-select" id="meetingProject">
                                    <option value="">Seleccionar Proyecto</option>
                                    <option value="proyecto1">Proyecto de Energía Solar</option>
                                    <option value="proyecto2">Plataforma de Educación Online</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="meetingDate" class="form-label">Fecha</label>
                                <input type="date" class="form-control" id="meetingDate" required>
                            </div>
                            <div class="mb-3">
                                <label for="meetingTime" class="form-label">Hora</label>
                                <input type="time" class="form-control" id="meetingTime" required>
                            </div>
                            <div class="mb-3">
                                <label for="meetingLink" class="form-label">Enlace de Reunión</label>
                                <input type="url" class="form-control" id="meetingLink" placeholder="https://ejemplo.com/reunion">
                            </div>
                            <button type="submit" class="btn btn-primary">Programar Reunión</button>
                        </form>
                        <div id="scheduledMeetings" class="mt-4">
                            <h4>Reuniones Programadas</h4>
                            <!-- Reuniones programadas se mostrarán aquí -->
                        </div>
                    `;
                    document.getElementById('content').appendChild(virtualMeetingsForm);

                    // Manejar programación de reuniones
                    document.getElementById('scheduleMeetingForm').addEventListener('submit', function(e) {
                        e.preventDefault();
                        const project = document.getElementById('meetingProject').value;
                        const date = document.getElementById('meetingDate').value;
                        const time = document.getElementById('meetingTime').value;
                        const link = document.getElementById('meetingLink').value;

                        const scheduledMeetings = document.getElementById('scheduledMeetings');
                        scheduledMeetings.innerHTML += `
                            <div class="card mb-2">
                                <div class="card-body">
                                    <h5 class="card-title">Reunión con ${project}</h5>
                                    <p class="card-text">
                                        <strong>Fecha:</strong> ${date}<br>
                                        <strong>Hora:</strong> ${time}<br>
                                        <strong>Enlace:</strong> <a href="${link}" target="_blank">${link}</a>
                                    </p>
                                    <button class="btn btn-sm btn-danger">Cancelar Reunión</button>
                                </div>
                            </div>
                        `;
                    });
                }
                
                virtualMeetingsForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            });

            // Proyectos Favoritos
            favoritesLinkEl.addEventListener('click', function() {
                hideAllForms();
                
                let favoritesForm = document.getElementById('favoritesForm');
                if (!favoritesForm) {
                    favoritesForm = document.createElement('div');
                    favoritesForm.id = 'favoritesForm';
                    favoritesForm.innerHTML = `
                        <h3>Proyectos Favoritos</h3>
                        <div id="favoriteProjects">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">Proyecto de Energía Solar</h5>
                                    <p class="card-text">Desarrollo de paneles solares de alta eficiencia</p>
                                    <button class="btn btn-sm btn-outline-danger">Eliminar de Favoritos</button>
                                    <button class="btn btn-sm btn-outline-primary ms-2">Detalles del Proyecto</button>
                                </div>
                            </div>
                        </div>
                    `;
                    document.getElementById('content').appendChild(favoritesForm);
                }
                
                favoritesForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            });
        }
    } else {
        // Si no hay usuario en localStorage, redirigir al login
        window.location.href = 'registro.html';
    }
});





document.addEventListener('DOMContentLoaded', function () {
    // Función para ocultar todos los formularios dinámicos
    function hideAllForms() {
        // Lista de formularios a ocultar
        const formsToHide = [
            'profileForm', 
            'mentorshipForm', 
            'virtualMeetingsForm'
        ];
        formsToHide.forEach(formId => {
            const form = document.getElementById(formId);
            if (form) {
                form.style.display = 'none';
            }
        });
        // Ocultar el contenido dinámico principal
        document.getElementById('dynamicContent').style.display = 'none';  
    }

    // Recuperar datos del usuario desde localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // Mostrar saludo con el nombre del usuario
        document.getElementById('userGreeting').textContent = `Bienvenido, ${user.name}!`;

        // Verificar si el usuario es un mentor
        if (user.userType === 'mentor') {
            // Ocultar todos los elementos del menú existentes
            const existingMenuItems = document.querySelectorAll('.list-group-item');
            existingMenuItems.forEach(item => {
                item.style.display = 'none';
            });

            // Obtener el grupo de menú
            const menuGroup = document.querySelector('.list-group');

            // Definir los nuevos elementos del menú para mentores
            const menuItems = [
                { id: 'profileLink', text: 'Perfil', handler: showMentorProfile },
                { id: 'projectMentorshipLink', text: 'Proyectos para Mentoría', handler: showMentorshipProjects },
                { id: 'virtualMeetingsLink', text: 'Reuniones Virtuales', handler: showVirtualMeetings }
            ];

            // Crear dinámicamente los elementos del menú para mentores
            menuItems.forEach(item => {
                const link = document.createElement('a');
                link.href = '#';
                link.id = item.id;
                link.className = 'list-group-item list-group-item-action';
                link.textContent = item.text;
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    hideAllForms();
                    item.handler();
                });
                menuGroup.appendChild(link);
            });

            // Funciones específicas para mentores

            // Mostrar el perfil del mentor
            function showMentorProfile() {
                let profileForm = document.getElementById('profileForm');
                if (!profileForm) {
                    profileForm = document.createElement('div');
                    profileForm.id = 'profileForm';
                    profileForm.className = 'dynamic-form';
                    profileForm.innerHTML = `
                        <h3>Perfil del Mentor</h3>
                        <div class="card">
                            <div class="card-body">
                                <p><strong>Nombre:</strong> ${user.name}</p>
                                <p><strong>Email:</strong> ${user.email}</p>
                                <p><strong>Tipo de Usuario:</strong> Mentor</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-secondary mt-3" id="cancelProfileButton">Cancelar</button>
                    `;
                    document.getElementById('content').appendChild(profileForm);
                }
                profileForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';

                document.getElementById('cancelProfileButton')?.addEventListener('click', function () {
                    profileForm.style.display = 'none';
                    document.getElementById('dynamicContent').style.display = 'block';
                });
            }

            // Mostrar proyectos para mentoría
            function showMentorshipProjects() {
                let mentorshipForm = document.getElementById('mentorshipForm');
                if (!mentorshipForm) {
                    mentorshipForm = document.createElement('div');
                    mentorshipForm.id = 'mentorshipForm';
                    mentorshipForm.className = 'dynamic-form';
                    mentorshipForm.innerHTML = `
                        <h3>Proyectos para Mentoría</h3>
                        <div id="mentorshipProjects">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">Startup de Tecnología</h5>
                                    <p class="card-text">Un proyecto enfocado en desarrollar una aplicación móvil para mejorar la logística de pequeñas empresas.</p>
                                    <button class="btn btn-sm btn-outline-primary">Detalles del Proyecto</button>
                                    <button class="btn btn-sm btn-outline-success">Ofrecer Mentoría</button>
                                </div>
                            </div>
                        </div>
                    `;
                    document.getElementById('content').appendChild(mentorshipForm);
                }
                mentorshipForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            }

            // Mostrar reuniones virtuales
            function showVirtualMeetings() {
                let virtualMeetingsForm = document.getElementById('virtualMeetingsForm');
                if (!virtualMeetingsForm) {
                    virtualMeetingsForm = document.createElement('div');
                    virtualMeetingsForm.id = 'virtualMeetingsForm';
                    virtualMeetingsForm.className = 'dynamic-form';
                    virtualMeetingsForm.innerHTML = `
                        <h3>Gestionar Reuniones Virtuales</h3>
                        <form id="scheduleMeetingForm">
                            <div class="mb-3">
                                <label for="meetingProject" class="form-label">Proyecto</label>
                                <select class="form-select" id="meetingProject">
                                    <option value="">Seleccionar Proyecto</option>
                                    <option value="startup1">Startup de Tecnología</option>
                                    <option value="startup2">Plataforma Educativa</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="meetingDate" class="form-label">Fecha</label>
                                <input type="date" class="form-control" id="meetingDate" required>
                            </div>
                            <div class="mb-3">
                                <label for="meetingTime" class="form-label">Hora</label>
                                <input type="time" class="form-control" id="meetingTime" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Programar Reunión</button>
                        </form>
                        <div id="scheduledMeetings" class="mt-4">
                            <h4>Reuniones Programadas</h4>
                            <!-- Reuniones programadas se mostrarán aquí -->
                        </div>
                    `;
                    document.getElementById('content').appendChild(virtualMeetingsForm);

                    document.getElementById('scheduleMeetingForm').addEventListener('submit', function (e) {
                        e.preventDefault();
                        const project = document.getElementById('meetingProject').value;
                        const date = document.getElementById('meetingDate').value;
                        const time = document.getElementById('meetingTime').value;

                        const scheduledMeetings = document.getElementById('scheduledMeetings');
                        scheduledMeetings.innerHTML += `
                            <div class="card mb-2">
                                <div class="card-body">
                                    <h5 class="card-title">Reunión para ${project}</h5>
                                    <p class="card-text">
                                        <strong>Fecha:</strong> ${date}<br>
                                        <strong>Hora:</strong> ${time}
                                    </p>
                                    <button class="btn btn-sm btn-danger">Cancelar Reunión</button>
                                </div>
                            </div>
                        `;
                    });
                }
                virtualMeetingsForm.style.display = 'block';
                document.getElementById('dynamicContent').style.display = 'none';
            }
        }
    } else {
        // Si no hay usuario en localStorage, redirigir al login
        window.location.href = 'registro.html';
    }
});


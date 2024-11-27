document.addEventListener('DOMContentLoaded', function () {
    const scheduleMeetingButton = document.getElementById('scheduleMeetingButton');
    const meetingTitleInput = document.getElementById('meetingTitle');
    const meetingDateInput = document.getElementById('meetingDate');
    const meetingTimeInput = document.getElementById('meetingTime');
    const meetingDetails = document.getElementById('meetingDetails');
    const meetingTitleDisplay = document.getElementById('meetingTitleDisplay');
    const meetingDateDisplay = document.getElementById('meetingDateDisplay');
    const meetingTimeDisplay = document.getElementById('meetingTimeDisplay');
    const meetingLink = document.getElementById('meetingLink');

    // Función para generar un enlace a una sala de videoconferencia (Zoom o Google Meet)
    function generateMeetingLink(title, date, time) {
        // Aquí puedes integrar con una API de videoconferencia o crear un enlace de Google Meet
        // Ejemplo con Google Meet
        const meetLink = `https://meet.google.com/new?title=${title}&date=${date}&time=${time}`;
        return meetLink;
    }

    // Evento para agendar una reunión
    scheduleMeetingButton.addEventListener('click', function () {
        const title = meetingTitleInput.value;
        const date = meetingDateInput.value;
        const time = meetingTimeInput.value;

        // Validación
        if (!title || !date || !time) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Mostrar los detalles de la reunión
        meetingDetails.style.display = 'block';
        meetingTitleDisplay.textContent = title;
        meetingDateDisplay.textContent = date;
        meetingTimeDisplay.textContent = time;

        // Generar enlace a la reunión
        const link = generateMeetingLink(title, date, time);
        meetingLink.href = link;

        // Mostrar el enlace para unirse a la reunión
        meetingLink.textContent = "Unirse a la reunión";
    });
});

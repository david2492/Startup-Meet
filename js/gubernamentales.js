document.addEventListener('DOMContentLoaded', function () {
    const stateSelect = document.getElementById('stateSelect');
    const policyDetails = document.getElementById('policyDetails');
    const policyTitle = document.getElementById('policyTitle');
    const policyDescription = document.getElementById('policyDescription');
    const loanList = document.getElementById('loanList');
    const applyPolicyButton = document.getElementById('applyPolicyButton');

    const policies = {
        nariño: {
            title: "Política de Apoyo al Desarrollo Empresarial en Nariño",
            description: "Esta política tiene como objetivo el fomento de emprendimientos y pequeñas empresas en el departamento de Nariño.",
            loans: [
                { name: "Préstamo para Emprendedores", amount: "Hasta $20,000,000", interestRate: "5%" },
                { name: "Crédito para Innovación Tecnológica", amount: "Hasta $50,000,000", interestRate: "4%" }
            ]
        },
        cauca: {
            title: "Incentivos para la Agricultura Sostenible en Cauca",
            description: "Se brindan apoyos económicos y asesoría técnica para agricultores que implementen prácticas sostenibles en el Cauca.",
            loans: [
                { name: "Préstamo Agrícola Sostenible", amount: "Hasta $10,000,000", interestRate: "6%" },
                { name: "Subsidio para Equipos de Riego", amount: "Hasta $5,000,000", interestRate: "N/A" }
            ]
        },
        valle: {
            title: "Fomento a la Innovación Empresarial en el Valle del Cauca",
            description: "Apoyo financiero para pequeñas y medianas empresas en el Valle del Cauca que deseen innovar y expandirse.",
            loans: [
                { name: "Préstamo para Innovación Empresarial", amount: "Hasta $30,000,000", interestRate: "4%" },
                { name: "Crédito para Expansión Comercial", amount: "Hasta $40,000,000", interestRate: "6%" }
            ]
        }
    };

    // Función para mostrar los detalles de la política y préstamos
    function showPolicyDetails(state) {
        const policy = policies[state];
        if (policy) {
            policyTitle.textContent = policy.title;
            policyDescription.textContent = policy.description;
            loanList.innerHTML = ''; // Limpiar la lista de préstamos

            policy.loans.forEach(loan => {
                const loanItem = document.createElement('li');
                loanItem.textContent = `${loan.name}: ${loan.amount} - Tasa de interés: ${loan.interestRate}`;
                loanList.appendChild(loanItem);
            });

            policyDetails.style.display = 'block'; // Mostrar los detalles
            applyPolicyButton.addEventListener('click', function () {
                alert(`¡Has aplicado a la política: ${policy.title}!`);
            });
        }
    }

    // Evento para seleccionar un estado y mostrar la política
    stateSelect.addEventListener('change', function () {
        const selectedState = stateSelect.value;
        if (selectedState) {
            showPolicyDetails(selectedState);
        } else {
            policyDetails.style.display = 'none'; // Ocultar los detalles si no se selecciona un estado
        }
    });
});

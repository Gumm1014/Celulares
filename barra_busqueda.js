document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('busquedaInput');
    const sugerencias = document.getElementById('sugerencias');
    const overlay = document.getElementById('overlay');

    const opciones = [
        "Galaxy S25 Ultra",
        "Galaxy Z Fold5",
        "Galaxy A56 5G",
        "Moto G85 5G",
        "Motorola Edge 50 Ultra",
        "Xiaomi 14T",
        "Redmi Note 13 Pro 5G"
    ];

    input.addEventListener('input', function () {
        const valor = input.value.toLowerCase();
        sugerencias.innerHTML = '';
        if (valor) {
            const filtradas = opciones.filter(op => op.toLowerCase().includes(valor));
            filtradas.forEach(opcion => {
                const li = document.createElement('li');
                li.textContent = opcion;
                li.addEventListener('click', () => {
                    input.value = opcion;
                    sugerencias.innerHTML = '';
                    overlay.style.display = 'none';
                });
                sugerencias.appendChild(li);
            });
            overlay.style.display = 'block';
        } else {
            sugerencias.innerHTML = '';
            overlay.style.display = 'none';
        }
    });

    overlay.addEventListener('click', () => {
        sugerencias.innerHTML = '';
        overlay.style.display = 'none';
    });
});

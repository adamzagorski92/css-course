 // Pobieramy wszystkie przyciski
const buttons = document.querySelectorAll('button');

// Funkcja, która dodaje ramkę podczas najechania
function addFrame(event) {
    const button = event.target;

    // Tworzymy i dodajemy pseudoelementy ::before i ::after jako elementy div
    let before = button.querySelector('.frame-before');
    let after = button.querySelector('.frame-after');

    if (!before && !after) {
        before = document.createElement('div');
        after = document.createElement('div');
        before.classList.add('frame-before');
        after.classList.add('frame-after');

        // Pozycjonujemy ramki względem przycisku
        Object.assign(before.style, {
            position: 'absolute',
            top: '-5px',
            left: '-5px',
            width: '0',
            height: '0',
            borderTop: '2px solid pink',
            borderLeft: '2px solid pink',
            transition: 'all 0.25s ease-in-out',
        });

        Object.assign(after.style, {
            position: 'absolute',
            bottom: '-5px',
            right: '-5px',
            width: '0',
            height: '0',
            borderBottom: '2px solid pink',
            borderRight: '2px solid pink',
            transition: 'all 0.25s ease-in-out',
        });

        button.appendChild(before);
        button.appendChild(after);
    }

    // Rozszerzamy ramki
    before.style.width = `${button.offsetWidth + 10}px`;
    before.style.height = `${button.offsetHeight + 10}px`;

    after.style.width = `${button.offsetWidth + 10}px`;
    after.style.height = `${button.offsetHeight + 10}px`;
}

// Funkcja, która usuwa ramkę podczas opuszczenia
function removeFrame(event) {
    const button = event.target;

    // Zwężamy ramki
    const before = button.querySelector('.frame-before');
    const after = button.querySelector('.frame-after');

    if (before && after) {
        before.style.width = '0';
        before.style.height = '0';

        after.style.width = '0';
        after.style.height = '0';
    }
}

// Dodajemy eventy do każdego przycisku
buttons.forEach(button => {
    button.style.position = 'relative'; // Ustawienie przycisku jako relative
    button.addEventListener('mouseenter', addFrame);
    button.addEventListener('mouseleave', removeFrame);
});
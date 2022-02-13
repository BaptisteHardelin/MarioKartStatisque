let roues = document.getElementById('roues');
let rouesSelected = document.getElementById('rouesSelected');

// Quand on change de kart
roues.addEventListener('change', function () {
    let textRouesName = roues.value;
    // On affiche l'image du kart en question
    rouesSelected.src = '../img/roues/' + textRouesName + '.png';
});
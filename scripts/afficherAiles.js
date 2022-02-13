let ailes = document.getElementById('ailes');
let ailesSelected = document.getElementById('ailesSelected');

// Quand on change de kart
ailes.addEventListener('change', function () {
    let textAilesName = ailes.value;
    // On affiche l'image du kart en question
    ailesSelected.src = '../img/ailes/' + textAilesName + '.png';
});
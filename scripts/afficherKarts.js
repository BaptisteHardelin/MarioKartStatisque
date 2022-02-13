let karts = document.getElementById('karts');
let kartsSelected = document.getElementById('kartsSelected');

// Quand on change de kart
karts.addEventListener('change', function () {
    let textKartsName = karts.value;
    // On affiche l'image du kart en question
    kartsSelected.src = '../img/karts/' + textKartsName + '.png';
});
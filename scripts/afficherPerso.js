let personnage = document.getElementById('personnage');
let persoSelected = document.getElementById('persoSelected');

// Quand on change de personnage
personnage.addEventListener('change', function () {
    let textPersonnageName = personnage.value;
    // On affiche l'image du personnage en question
    persoSelected.src = '../img/personnages/' + textPersonnageName + '.png';
});
// Cette fonction utilise une expression régulière pour supprimer tout caractère 
// qui n'est pas une lettre (majuscule ou minuscule) ou un chiffre.
function nettoyerChaine(chaine) {
    return chaine.replace(/[^a-zA-Z0-9]/g, '');
}

// Cette fonction met toutes les lettres en miniscule
function enMinuscules(chaine) {
    return chaine.toLowerCase();
}

// Cette fonction supprime accents et autres caracteres speciaux
function supprimerAccents(chaine) {
    return chaine.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Cette fonction convertit la chaine de caractere en tableau, inverse ses elements,
// puis reconvertit le tout en string
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

let zoneSaisie = document.querySelector("#text-input")
let zoneResulat = document.querySelector("#result")

let boutonVerification = document.querySelector("#check-btn")


boutonVerification.addEventListener ("click", () => {
    
    let texteAverifier1 = zoneSaisie.value

    texteAverifier1 = nettoyerChaine(texteAverifier1)
    texteAverifier1 = supprimerAccents(texteAverifier1)
    texteAverifier1 = enMinuscules(texteAverifier1)
    
    let texteAverifier2 = inverserChaine(texteAverifier1)

    if (texteAverifier1.trim() === ''){
        zoneResulat.innerHTML = `<span style="color : red">Veuillez entrer du texte valide s'il vous plait<span>`
    }
    else if (texteAverifier2 === texteAverifier1 && texteAverifier1 !== ''){
        zoneResulat.innerHTML = `<span style="color : green"><b>${zoneSaisie.value}<b> est un palindrome.<span>`
    }
    else{
        zoneResulat.innerHTML = `<span style="color : red"><b>${zoneSaisie.value}<b> n'est pas un palindrome.<span>`
    }
})


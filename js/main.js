const mainBtn = document.getElementById("btn");
let errori = 0

mainBtn.addEventListener("click", function () {
    const userAge = document.getElementById("age").value;
    if (isNaN(userAge)) {
        alert("L'età inserita non è valida");
        errori += 1;
    }

    const userKm = document.getElementById("km").value;
    if (isNaN(userKm)) {
        alert("I KM inseriti non sono validi");
        errori += 1;
    }

    if (errori > 0) {
        alert("Si sono verificati degli errori, ricaricare la pagina");
        return false;
    }

    const prezzoBase = (0.21 * userKm);
    
    if (userAge < 18) {
        const prezzoScontato = (prezzoBase - (prezzoBase * 20 / 100)).toFixed(2);
        console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
    } else if (userAge >= 65) {
        const prezzoScontato = (prezzoBase - (prezzoBase * 40 / 100)).toFixed(2);
        console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
    } else {
        console.log(`Il prezzo totale del biglietto è ${prezzoBase.toFixed(2)}`);
    }
})

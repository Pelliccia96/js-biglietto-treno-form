const buttonGenera = document.getElementById("btnGenera");
const buttonAnnulla = document.getElementById("btnAnnulla");
let errori = 0;

buttonGenera.addEventListener("click", function () {
    const userKm = document.getElementById("km").value;
    if (isNaN(userKm)) {
        alert("I Km inseriti non sono validi.");
        errori += 1;
    }

    const userAge = document.getElementById("age");
    if (userAge.value === "") {
        alert("La fascia d'età inserita non è valida.");
        errori += 1;
    }

    if (errori > 0) {
        alert("Si sono verificati degli errori, ricaricare la pagina.");
        return false;
    }

    const userName = document.getElementById("name").value;
    console.log (userName);
    fullName.innerHTML = `${userName}`;

    const numCar = ((Math.random() * 10) + 1).toFixed(0);
    car.innerHTML = `${numCar}`;

    const codCp = (((Math.random() * 9) + 1) * 10000).toFixed(0);
    cp.innerHTML = `${codCp}`;

    const prezzoBase = (0.21 * userKm);
    
    if (userAge.value === "20") {
        const prezzoScontato = (prezzoBase - (prezzoBase * 20 / 100)).toFixed(2);
        console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
        offert.innerHTML = `20%`
        tot.innerHTML = `${prezzoScontato} &#x20AC;`;
    } else if (userAge.value === "40") {
        const prezzoScontato = (prezzoBase - (prezzoBase * 40 / 100)).toFixed(2);
        console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
        offert.innerHTML = `40%`
        tot.innerHTML = `${prezzoScontato} &#x20AC;`;
    } else {
        console.log(`Il prezzo totale del biglietto è ${(prezzoBase).toFixed(2)}`);
        offert.innerHTML = `Biglietto Standard`
        tot.innerHTML = `${prezzoBase.toFixed(2)} &#x20AC;`;
    }  
})

buttonAnnulla.addEventListener("click", function() {
    fullName.innerHTML = "";
    offert.innerHTML = "";
    car.innerHTML = "";
    cp.innerHTML = "";
    tot.innerHTML = "";
})

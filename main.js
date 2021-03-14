
// tady je místo pro náš program
/*
document.querySelector("#vysledek").innerHTML = secti(3, 5);
*/

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 /*
function secti(a, b) {
  let c = a + b;
  return c;
}
*/


/**
 * Upozorní uživatele při spuštění.
 */
 /*function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}

/* let ctverecekElement = document.querySelector(".ctverecek");
document.querySelector(".ctverecek").style.color = "#006400";
*/



//Ukol 1 - změn barvu po kliknutí
let nadpis = document.querySelector(".ctverecek");
function zmen_barvu() {
  nadpis.style.backgroundColor = "green"
}

//Ukol 2 - zobraz výsledek

function zobraz_vysledek() {
document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
  let c = a + b;
  return c;
}

}

//Ukol 3 - Uprav funkci upozorni() tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu Čtvereček.
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  nadpis.textContent = "Gratulace!"
}

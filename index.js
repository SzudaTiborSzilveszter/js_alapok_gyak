import { adatLista } from "./adat.js";
import { bekeres } from "./fuggvenyek.js";
import { veletlenSzamok } from "./fuggvenyek.js";
import { kiirasKulonbozoDivekbe } from "./fuggvenyek.js";
import { objektumKiirasaTablazatba } from "./fuggvenyek.js";

let gombElem = document.getElementById("gomb");
let szovegElem = document.getElementById("eredmeny");
let ertekElem = document.getElementById("ertekeles");
let szamElem = document.getElementById("szamok");
let tablaElem = document.getElementById("tablazat");

gombElem.addEventListener("click", function () {
    bekeres(Number(ertekElem.value), szovegElem);
    console.log(szovegElem);
});

let szamok = veletlenSzamok();
kiirasKulonbozoDivekbe(szamok, szamElem);

objektumKiirasaTablazatba(adatLista, tablaElem);
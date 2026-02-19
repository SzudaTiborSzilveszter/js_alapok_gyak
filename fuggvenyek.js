export function bekeres(ertekElem,szovegElem){
    console.log("kattintás");
    let szoveg = "";
    if(ertekElem == 1){
        szoveg="Elégtelen";
    }else if(ertekElem == 2){
        szoveg="Elégséges";
    }else if(ertekElem == 3){
        szoveg="Közepes";
    }else if(ertekElem == 4){
        szoveg="Jó";
    }else if(ertekElem == 5){
        szoveg="Jeles";
    }else{
        szoveg="hibás szám";
    }
    szovegElem.innerHTML=szoveg;
}

export function veletlenSzamok(){
    let max = 100
    let also = -10
    let kiiras = [];
    for (let index = 0; index < 12; index++) {
        kiiras.push(Math.floor(Math.random() * (max-also+1) + also));
    }
    return kiiras;
}

export function kiirasKulonbozoDivekbe(kiiras,szamElem){
    let szoveg = "";
    for (let index = 0; index < kiiras.length; index++) {
        szoveg+="<div>"+kiiras[index]+"</div>";
    }
    szamElem.innerHTML=szoveg;
}

export function objektumKiirasaTablazatba(adatLista, tablaElem){
    let szoveg = "<table>";
    for (let i = 0; i < adatLista.length; i++) {
        szoveg+="<tr><td>"+adatLista[i].nev+"</td><td>"+adatLista[i].atlag+"</td></tr>";
    }
    szoveg+="</table>";
    tablaElem.innerHTML=szoveg;
}
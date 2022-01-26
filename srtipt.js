//Prompt unos --->
let ime = prompt("Ime:");
let prezime = prompt("Prezime:");
let godinaRodjenja = prompt("Godina rođenja:");
let trenutnaGodina = "2022";
let mestoRodjenja = prompt("Mesto rođenja:");
let mestoBoravka = prompt("Na kom mestu trenutno boraviš?");

document.write("Moje ime je " + ime + "," + " a prezime mi je " + prezime + "." + "<br>" + "Ja imam " + (trenutnaGodina - godinaRodjenja) + " godina/godine." + "<br>" + 
"Dolazim iz mesta " + mestoRodjenja + ", a trenutno boravim u mestu pod imenom " + mestoBoravka + ".");
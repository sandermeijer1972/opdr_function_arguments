
// single argument
const wallPainting = function(kleur) {
    console.log("De muur is " + kleur + " geschilderd");
}
wallPainting("groen");
wallPainting("rood");
wallPainting();

//multiple arguments
const muurVerf = function(muur, kleur) {
    console.log("De " + muur + "muur is " + kleur + " geschilderd")
}
muurVerf("woonkamer", "zalmroze");
muurVerf("buiten", "grijs");
// maakt volgorde uit?
muurVerf("rood", "slaapkamer");
// andere volgorde in de functie
const wallVerf = function(kleur, muur) {
    console.log("De " + muur + "muur is " + kleur + " geschilderd");
}
wallVerf("rood", "zolder");




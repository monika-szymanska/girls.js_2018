let friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];
console.log("tata");

for(let i=0; i < friends.length; i++) {
    console.log("Cześć " + friends[i] + "! Miło mi Cię powitać na girls.js.");
};

let text = "Nad rzeczką opodal krzaczka, mieszkała kaczka-dziwaczka, lecz zamiast trzymać się rzeczki, robiła piesze wycieczki.";

let sam = ['a', 'e', 'i', 'o', 'u', 'y', 'ę', 'ą'];

for(i=0; i< text.length; i++) {
    let currentCharacter = text[i];
    
    if(sam.indexOf(currentCharacter) > 0) {
      console.log(currentCharacter);
    }
    
};


function powitanie(name) {
    console.log("Hello " + name);
}

powitanie('Monika')

function obliczPow(sciana1, sciana2, wysokosc) {
    let x = sciana1;
    let y = sciana2;
    let z = wysokosc;
    let szerScian = 2*x + 2*y;
    let powScian = szerScian * wysokosc;
    let powSufitu = x * y;
    let powmalowania = powScian + powSufitu;
    
    console.log(powmalowania);
}

obliczPow(3, 3, 4)

function helloGirlsJS(imie) {
    console.log("Cześć, " + imie + "! Witaj na girls.js!" );
}

helloGirlsJS("Monika");

function getRandomColor() {
    console.log("Wylosujmy kolor!");
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i <6; i++) {
        let myColorIndex = Math.floor(Math.random()*16);
        color = color + letters[myColorIndex];
        console.log(color);
    }
    return color;
};


let title = document.getElementById('magic');

function changeColor(){
    title.style.color = getRandomColor();
};

changeColor();

setInterval(function(){ 
    changeColor();
}, 300);






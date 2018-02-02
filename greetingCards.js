"use strict"
//console.log("test");

const CardMaker = {
    makeFrontMessage: function(heading, content) {
      return `<h2>${heading}</h2><br><p>${content}</p>`
    },
    makeInsideMessage: function(inheader, message) {  //second method fo CardMaker
        return `<h2>${inheader}</h2><br><p>${message}</p>`
    }
};
//Refactor this to link this object to cardMaker
const BirthdayCard = Object.create(CardMaker);

function Card(heading, content, inheader, message) {
    this.heading = heading;
    this.content = content;
    this.inheader = inheader;
    this.message = message;
    this.cardmaker = CardMaker;//using CardMaker as a prototype for bdaycard, vdaycard, and xmascard
};



let bdaycard = new Card("Happy Birthday", "Open up to see if you're getting old!", "1..2...3...", "WOAH! You're getting old!");
console.log(bdaycard.cardmaker.makeFrontMessage(bdaycard.heading, bdaycard.content));
console.log(bdaycard.cardmaker.makeInsideMessage(bdaycard.inheader, bdaycard.message));

let vdaycard = new Card("Happy Valentines Day!", "Open up to see if you are loved!", "Checking...", "Well, well, well. You are more loved than you know");
console.log(vdaycard.cardmaker.makeFrontMessage(vdaycard.heading, vdaycard.content));
console.log(vdaycard.cardmaker.makeInsideMessage(vdaycard.inheader, vdaycard.message));

let xmasdaycard = new Card("Merry Xmas!", "Open up to see if you got any presents!", "Hmmm... let me look under the tree", "LOOK!! You got your biggest lump of coal yet");
console.log(xmasdaycard.cardmaker.makeFrontMessage(xmasdaycard.heading, xmasdaycard.console));
console.log(xmasdaycard.cardmaker.makeInsideMessage(xmasdaycard.inheader, xmasdaycard.message));

// let bday = document.getElementsByClassName("bday-div");
// bday.innerHTML = bdaycard.cardmaker.makeFrontMessage(bdaycard.heading, bdaycard.content);

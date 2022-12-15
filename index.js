// Code your solutions in this file
//for (let age = 30; age < 40; age++){
  //  console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
//}
//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++){
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
//    }
//    return gifts;
//}
//wrapGifts(gifts)

const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++){
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
     return messages
    }
console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], "birthday"))

function countDown(){
    for (let countDown = 0; countDown < 11; countDown++) {
        console.log(countDown)
    }
}

// Code your solutions in this file
function writeCards(name) {
    const msg =[];
for (let i=0; i < name.length; i++ ) {
     msg.push (`Thank you, ${name [i]}, for the wonderful surprise gift!`);
}
return msg;
}
let names=["Guadalupe", "Ollie", "Aki"]; 
 console.log(writeCards(names));
  
 function countDown(number) {
    let i = number; 
    while (i >= 0) { 
      console.log(i);
      i--;
    }
  }
  
  countDown(10);
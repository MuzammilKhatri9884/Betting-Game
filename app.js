function playgame(){
var coine = 1000;

for (var i = 1; coine > 0; i++) {

    var entryLuckNumber = +prompt("Enter Lucky Number (1 to 6)");
    var entryAmt = +prompt("Enter Betting Amount");
    var compNumber = Math.floor(Math.random() * 6) + 1;

    console.log("Current Balance : " + coine);
    console.log("Your Lucky Number : " + entryLuckNumber);
    console.log("Betting Amount : " + entryAmt);
    console.log("Computer Number : " + compNumber);

    if (entryAmt > coine) {
        console.log("You don't have sufficient balance. Try smaller bet.");
    }
    else {
        if (entryLuckNumber === compNumber) {
            coine = coine + entryAmt;
            console.log("You WON Rs: " + entryAmt);
        }
        else {
            coine = coine - entryAmt;
            console.log("You LOST Rs: " + entryAmt);
        }

        console.log("Remaining Balance: " + coine);
    }
}

console.log("Game Over! Your balance is 0");
}
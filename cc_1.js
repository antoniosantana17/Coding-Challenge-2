 // U41684674

 // Calculate the Tip
 let bill = 275;
 let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 console.log(tip);
 
 // Output Details
 console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill+tip}`);

 // Create Function for calcTip
 function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 }
// Testing the function with $100
console.log(calcTip(100)); // Expected output:20



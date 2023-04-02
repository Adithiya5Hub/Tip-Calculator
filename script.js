/* 
🌟 APP: Tip Calculator
These are the 3 functions you must use 👇
========================================
calculateBill()
increasePeople()
decreasePeople()
These functions are hard coded in the HTML. So, you can't change their names.
These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later)
// bill input, tip input, number of people div, and per person total div

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)
//Calculate total bill per person
const calculateBill= () => {
    //take user input and convert it into a number
    const bill = Number(billInput.value)
    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercent = Number(tipInput.value)/100
    //get the total tip amount
    const tipAmount = bill*tipPercent
    //calculate total amount(tip + bill)
    const total = tipAmount + bill
    //calculate the perperson total
    const perPersonTotal = total/numberOfPeople
    //toFixed(2) -> limits upto 2 decimal places
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}
//Splits the bill b/w more ppl
const increasePeople = () => {
    //increase the amount
    numberOfPeople +=1
    //Update the DOM
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}
//Splits the bill b/w fewer ppl
const decreasePeople = () => {
    // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople<=1) {
    return  
  }
  numberOfPeople -= 1
  //Update the DOM
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}

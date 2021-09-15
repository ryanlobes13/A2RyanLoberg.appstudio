let name = prompt('Enter your first name here:')

let state = prompt('Enter your state you live (two capitalized letters):')

let temp = prompt('Enter the current outside temperature (Fahrenheit):')

let messages = ['Wear a warm coat, hat, scarf and gloves.', 'Wear a warm coat but you won't need a hat, scarf or gloves.', 'Wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'Wear a warm coat, hat and gloves. Maybe a scarf too.']

if (temp <= 32) {
  console.log(`${name} you should ${messages[0]}`)}:

else if (temp < 50 && temp > 32 && state == NE){
  console.log(`${name} you should ${messages[1]}`)}:
  
else if (temp < 50 && temp > 32 && state == FL){
  console.log(`${name} you should ${messages[2]}`)}:

else if (temp < 70 && temp > 50 && state == FL){
  console.log(`${name} you should ${messages[3]}`)}:
  
else { 
  console.log(`Undefined Weather`)};
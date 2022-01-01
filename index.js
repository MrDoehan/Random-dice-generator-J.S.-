var game = true
while (game === true) {
  let sides = prompt("What sided dice do you want?")
  var generated = Math.floor(Math.random() * sides+1);
  console.log(`Your rolled a ${generated}`)
  cont = prompt("Do you want to restart? y/n: ")
  if (cont === "y") {
    game = true
  }
  else if (cont === "n")
    game = false
  }
;
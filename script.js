let play = prompt("Do you want to play? Y/N");

let name = prompt("Name your character.");

let competitor = "Almighty Grant";

function game(playerHP, grantHP) {
  while (playerHP >= 0 && grantHP >= 0) {
    playerHP -= Math.floor(Math.random() * 2) + 1;
    console.log(`${name} has ${playerHP} health left.`);
    grantHP -= Math.floor(Math.random() * 2) + 1;
    console.log(`${competitor} has ${grantHP} health left.`);
  }
}

game(40, 10);
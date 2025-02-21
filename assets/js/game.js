// creating a user side player

var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

// you can also  log multiple values at once like this

console.log(playerName, playerHealth , playerAttack);


// creating an enemy from the developer side

var enemyName = "Senait";
var enemyHealth = 50;
var enemyAttack = 12;

console.log ( enemyName, enemyHealth , enemyAttack);

var fight = function () {
    window.alert("Welcome to the Robot Gladiators");
}

fight();

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  window.alert(playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remainng." )

// check the enemey health with if conditionals

if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
}
else {
  window.alert(enemyName + " still have " +  enemyHealth + " health left.");
}

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.

  window.alert(enemyName + " has attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaing." )

  // check player's healthwith if- else conditons

  if (playerHealth <= 0) {
    window.alert (playerName + " has died!")
  }
  else {
    window.alert(playerName + " still has" + playerHealth + " health left.")
  }







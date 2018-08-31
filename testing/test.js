// var gokuHealth;
// var krillinHealth;
// var piccoloHealth;
// var vegetaHealth;

// var gokuAttack;
// var krillinAttack;
// var piccoloAttack;
// var vegetaAttack;

// var gokuConstAttack;
// var krillinConstAttack;
// var piccoloConstAttack;
// var vegetaConstAttack;

// var gokuResetHP;
// var krillinResetHP;
// var piccoloResetHP;
// var vegetaResetHP;

var playerHTML;
var defenderCharacter1HTML;
var defenderCharacter2HTML;
var defenderCharacter3HTML;


var characters = [{
    name: 'Goku',
    healthPoints: 145,
    resetHP: 145,
    attackPower: 12,
    constAttackPower: 12,
    counterAttack: 14,
},
{
    name: 'Krillin',
    healthPoints: 180,
    resetHP: 180,
    attackPower: 10,
    constAttackPower: 10,
    counterAttack: 12,
},
{
    name: 'Piccolo',
    healthPoints: 130,
    resetHP: 130,
    attackPower: 14,
    constAttackPower: 14,
    counterAttack: 16,
},
{
    name: 'Vegeta',
    healthPoints: 120,
    resetHP: 120,
    attackPower: 16,
    constAttackPower: 16,
    counterAttack: 18,
},


];

goku = characters[0];
krillin = characters[1];
piccolo = characters[2];
vegeta = characters[3];


var hasAttacked = false;
var hasDefeated = false;
var enemy1Down = false;
var enemy2Down = false;
var enemy3Down = false;
var isDefeated = false;
var hasWon = false;
var hasLost = false;
var hasWonText = "Player won.";
var hasLostText = "Player lost.";


$(function () {

    $("#setVariables").on("click", function () {

        //health points
        goku.healthPoints = $("#gokuHealth").val();
        krillin.healthPoints = $("#krillinHealth").val();
        piccolo.healthPoints = $("#piccoloHealth").val();
        vegeta.healthPoints = $("#vegetaHealth").val();
        goku.healthPoints = parseInt(goku.healthPoints);
        krillin.healthPoints = parseInt(krillin.healthPoints);
        piccolo.healthPoints = parseInt(piccolo.healthPoints);
        vegeta.healthPoints = parseInt(vegeta.healthPoints);

        //attack power
        goku.attackPower = $("#gokuAttack").val();
        goku.attackPower = parseInt(goku.attackPower);

        krillin.attackPower = $("#krillinAttack").val();
        krillin.attackPower = parseInt(krillin.attackPower);

        piccolo.attackPower = $("#piccoloAttack").val();
        piccolo.attackPower = parseInt(piccolo.attackPower);

        vegeta.attackPower = $("#vegetaAttack").val();
        vegeta.attackPower = parseInt(vegeta.attackPower);

        //counter attack
        goku.counterAttack = $("#gokuCounter").val();
        goku.counterAttack = parseInt(goku.counterAttack);

        krillin.counterAttack = $("#krillinCounter").val();
        krillin.counterAttack = parseInt(krillin.counterAttack);

        piccolo.counterAttack = $("#piccoloCounter").val();
        piccolo.counterAttack = parseInt(piccolo.counterAttack);

        vegeta.counterAttack = $("#vegetaCounter").val();
        vegeta.counterAttack = parseInt(vegeta.counterAttack);



    });


    var theBattleFunction = function (playerCharacter, defenderCharacter1, defenderCharacter2, defenderCharacter3) {
        var newRow = $("<div class='row text-center'>");
        newRow.attr("id", playerCharacter.name+defenderCharacter1.name+defenderCharacter2.name+defenderCharacter3.name);
        $("#main-container").append(newRow);

        playerHTML = playerCharacter.name;
        defenderCharacter1HTML = defenderCharacter1.name;
        defenderCharacter2HTML = defenderCharacter2.name;
        defenderCharacter3HTML = defenderCharacter3.name;
        do {
            playerCharacter.healthPoints = playerCharacter.healthPoints - defenderCharacter1.counterAttack;
            if (hasAttacked === true) {
                playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                defenderCharacter1.healthPoints = defenderCharacter1.healthPoints - playerCharacter.attackPower;
            } else if (hasAttacked === false) {
                defenderCharacter1.healthPoints = defenderCharacter1.healthPoints - playerCharacter.attackPower;
                hasAttacked = true;
            } else if (hasAttacked === false && hasDefeated === true) {
                playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                defenderCharacter1.healthPoints = defenderCharacter1.healthPoints - playerCharacter.attackPower;
            }
            console.log(defenderCharacter1.name + ": " + defenderCharacter1.healthPoints);
            console.log(playerCharacter.healthPoints);
            if (playerCharacter.healthPoints <= 0) {
                console.log("player died");
                hasLost = true;
                htmlInput();
                reset();
                break;
            }
        } while (defenderCharacter1.healthPoints > 0 && playerCharacter.healthPoints > 0);
        if (defenderCharacter1.healthPoints <= 0) {

            do {
                playerCharacter.healthPoints = playerCharacter.healthPoints - defenderCharacter2.counterAttack;
                if (hasAttacked === true) {
                    playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                    defenderCharacter2.healthPoints = defenderCharacter2.healthPoints - playerCharacter.attackPower;
                } else if (hasAttacked === false) {
                    defenderCharacter2.healthPoints = defenderCharacter2.healthPoints - playerCharacter.attackPower;
                    hasAttacked = true;
                } else if (hasAttacked === false && hasDefeated === true) {
                    playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                    defenderCharacter2.healthPoints = defenderCharacter2.healthPoints - playerCharacter.attackPower;
                }
                console.log(defenderCharacter2.name + ": " + defenderCharacter2.healthPoints)
                console.log(playerCharacter.attackPower);
                if (playerCharacter.healthPoints <= 0) {
                    console.log("player died");
                    hasLost = true;
                    htmlInput();
                    reset();
                    break;
                }
            } while (defenderCharacter2.healthPoints > 0 && playerCharacter.healthPoints > 0);
        }
        if (defenderCharacter2.healthPoints <= 0) {
            do {
                playerCharacter.healthPoints = playerCharacter.healthPoints - defenderCharacter3.counterAttack;
                if (hasAttacked === true) {
                    playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                    defenderCharacter3.healthPoints = defenderCharacter3.healthPoints - playerCharacter.attackPower;
                } else if (hasAttacked === false) {
                    defenderCharacter3.healthPoints = defenderCharacter3.healthPoints - playerCharacter.attackPower;
                    hasAttacked = true;
                } else if (hasAttacked === false && hasDefeated === true) {
                    playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                    defenderCharacter3.healthPoints = defenderCharacter3.healthPoints - playerCharacter.attackPower;
                }
                console.log(defenderCharacter3.name + ": " + defenderCharacter3.healthPoints)
                console.log(playerCharacter.attackPower + " ");
                if (playerCharacter.healthPoints <= 0) {
                    console.log("player died");
                    hasLost = true;
                    htmlInput();
                    reset();
                    break;
                }
            } while (defenderCharacter3.healthPoints > 0 && playerCharacter.healthPoints > 0);
            if (defenderCharacter1.healthPoints <= 0 && defenderCharacter2.healthPoints <= 0 && defenderCharacter3.healthPoints <= 0 && playerCharacter.healthPoints > 0) {

                console.log(playerCharacter.attackPower);
                console.log("Player has won!");
                
        playerHealthHTML = playerCharacter.healthPoints;
                hasWon = true;
                htmlInput();
                reset();
            }
        }
        console.log("Player: " + playerCharacter.name + "\nD1: " + defenderCharacter1.name + "\nD2: " + defenderCharacter2.name + "\nD3: " + defenderCharacter3.name);
    };

    var htmlInput = function () {
        var attachTo = $("#"+playerHTML+defenderCharacter1HTML+defenderCharacter2HTML+defenderCharacter3HTML);
        newCol = $("<div class='col'>");
        if (hasWon) {
            newCol.html(
                "<p>Player: " + playerHTML + " | Player HP:"+playerHealthHTML+"</p>" +
                "<p>D1: " + defenderCharacter1HTML + "</p>" +
                "<p>D2: " + defenderCharacter2HTML + "</p>" +
                "<p>D3: " + defenderCharacter3HTML + "</p>" +
                "<p>" + hasWonText + "</p>");
            $(attachTo).append(newCol);
        } else if (hasLost) {
            newCol.html(
                "<p>Player: " + playerHTML + " | Player HP:"+playerHealthHTML+"</p>" +
                "<p>D1: " + defenderCharacter1HTML + "</p>" +
                "<p>D2: " + defenderCharacter2HTML + "</p>" +
                "<p>D3: " + defenderCharacter3HTML + "</p>" +
                "<p>" + hasLostText + "</p>");
            $(attachTo).append(newCol);
        }
    }
    var reset = function () {
        goku.healthPoints = goku.resetHP;
        krillin.healthPoints = krillin.resetHP;
        piccolo.healthPoints = piccolo.resetHP;
        vegeta.healthPoints = vegeta.resetHP;

        goku.attackPower = goku.constAttackPower;
        krillin.attackPower = krillin.constAttackPower;
        piccolo.attackPower = piccolo.constAttackPower;
        vegeta.attackPower = vegeta.counterAttack;
        hasLost = false;
        hasWon = false;
        hasAttacked = false;
    };

    
    $("#runFunction").on("click", function () {
        theBattleFunction(goku, krillin, piccolo, vegeta);
        theBattleFunction(goku, krillin, vegeta, piccolo);
        theBattleFunction(goku, piccolo, krillin, vegeta);
        theBattleFunction(goku, piccolo, vegeta, krillin);
        theBattleFunction(goku, vegeta, krillin, piccolo);
        theBattleFunction(goku, vegeta, piccolo, krillin);
    });

});
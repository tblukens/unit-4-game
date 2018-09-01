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
    healthPoints: 14475,
    resetHP: 14475,
    attackPower: 1310,
    constAttackPower: 1310,
    counterAttack: 1800,
},
{
    name: 'Krillin',
    healthPoints: 16000,
    resetHP: 16000,
    attackPower: 1150,
    constAttackPower: 1150,
    counterAttack: 1310,
},
{
    name: 'Piccolo',
    healthPoints: 15200,
    resetHP: 15200,
    attackPower: 1300,
    constAttackPower: 1300,
    counterAttack: 1660,
},
{
    name: 'Vegeta',
    healthPoints: 12950,
    resetHP: 12950,
    attackPower: 1750,
    constAttackPower: 1750,
    counterAttack: 1805,
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

var hasClicked = false;


$(function () {
    $("#reset").hide();
    $("#setVariables").on("click", function () {

        //health points
        goku.resetHP = goku.healthPoints = parseInt($("#gokuHealth").val());
        krillin.resetHP = krillin.healthPoints = parseInt($("#krillinHealth").val());
        piccolo.resetHP = piccolo.healthPoints = parseInt($("#piccoloHealth").val());
        vegeta.resetHP = vegeta.healthPoints = parseInt($("#vegetaHealth").val());

        //attack power
        goku.constAttackPower = goku.attackPower = parseInt($("#gokuAttack").val());

        krillin.constAttackPower = krillin.attackPower = parseInt($("#krillinAttack").val());

        piccolo.constAttackPower = piccolo.attackPower = parseInt($("#piccoloAttack").val());

        vegeta.constAttackPower = vegeta.attackPower = parseInt($("#vegetaAttack").val());

        //counter attack
        goku.counterAttack = parseInt($("#gokuCounter").val());

        krillin.counterAttack = parseInt($("#krillinCounter").val());

        piccolo.counterAttack = parseInt($("#piccoloCounter").val());

        vegeta.counterAttack = parseInt($("#vegetaCounter").val());

        $("#gokuHealth").attr("placeholder", goku.healthPoints);
        $("#gokuAttack").attr("placeholder", goku.attackPower);
        $("#gokuCounter").attr("placeholder", goku.counterAttack);

        $("#krillinHealth").attr("placeholder", krillin.healthPoints);
        $("#krillinAttack").attr("placeholder", krillin.attackPower);
        $("#krillinCounter").attr("placeholder", krillin.counterAttack);

        $("#piccoloHealth").attr("placeholder", piccolo.healthPoints);
        $("#piccoloAttack").attr("placeholder", piccolo.attackPower);
        $("#piccoloCounter").attr("placeholder", piccolo.counterAttack);

        $("#vegetaHealth").attr("placeholder", vegeta.healthPoints);
        $("#vegetaAttack").attr("placeholder", vegeta.attackPower);
        $("#vegetaCounter").attr("placeholder", vegeta.counterAttack);

    });


    var theBattleFunction = function (playerCharacter, defenderCharacter1, defenderCharacter2, defenderCharacter3) {
        // var newRow = $("<div class='row text-center'>");
        // newRow.attr("id", playerCharacter.name+defenderCharacter1.name+defenderCharacter2.name+defenderCharacter3.name);
        // $("#main-container").append(newRow);

        playerHTML = playerCharacter.name;
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
            console.log(playerCharacter.attackPower + ": AP");
            if (playerCharacter.healthPoints <= 0) {
                playerHealthHTML = playerCharacter.healthPoints;
                console.log("player died");
                hasLost = true;
                htmlInput();
                reset();
                break;
            }
            defenderCharacter1HTML = defenderCharacter1.name + " | HP: " + defenderCharacter1.healthPoints;
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
                console.log(playerCharacter.attackPower + ": AP");
                if (playerCharacter.healthPoints <= 0) {
                    playerHealthHTML = playerCharacter.healthPoints;
                    console.log("player died");
                    hasLost = true;
                    htmlInput();
                    reset();
                    break;
                }
                defenderCharacter2HTML = defenderCharacter2.name + " | HP: " + defenderCharacter2.healthPoints;
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
                console.log(playerCharacter.attackPower + ": AP");
                if (playerCharacter.healthPoints <= 0) {
                    playerHealthHTML = playerCharacter.healthPoints;
                    console.log("player died");
                    hasLost = true;
                    htmlInput();
                    reset();
                    break;
                }
                defenderCharacter3HTML = defenderCharacter3.name + " | HP: " + defenderCharacter3.healthPoints;
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
        var attachTo = $("#" + playerHTML);
        newCol = $("<div class='col border border-dark mr-1'>");
        if (hasWon) {
            newCol.html(
                "<p class='player'>" + playerHTML + " | Player HP:" + playerHealthHTML + "</p>" +
                "<p>D1: " + defenderCharacter1HTML + "</p>" +
                "<p>D2: " + defenderCharacter2HTML + "</p>" +
                "<p>D3: " + defenderCharacter3HTML + "</p>" +
                "<p class='won'>" + hasWonText + "</p>");
            newCol.addClass("won");
            $(attachTo).append(newCol);
        } else if (hasLost) {
            newCol.html(
                "<p>" + playerHTML + " | Player HP:" + playerHealthHTML + "</p>" +
                "<p>D1: " + defenderCharacter1HTML + "</p>" +
                "<p>D2: " + defenderCharacter2HTML + "</p>" +
                "<p>D3: " + defenderCharacter3HTML + "</p>" +
                "<p class='lost'>" + hasLostText + "</p>");
            newCol.addClass("lost");
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
        theBattleFunction(krillin, goku, piccolo, vegeta);
        theBattleFunction(krillin, goku, vegeta, piccolo);
        theBattleFunction(krillin, piccolo, goku, vegeta);
        theBattleFunction(krillin, piccolo, vegeta, goku);
        theBattleFunction(krillin, vegeta, goku, piccolo);
        theBattleFunction(krillin, vegeta, piccolo, goku);
        theBattleFunction(piccolo, goku, krillin, vegeta);
        theBattleFunction(piccolo, goku, vegeta, krillin);
        theBattleFunction(piccolo, krillin, goku, vegeta);
        theBattleFunction(piccolo, krillin, vegeta, goku);
        theBattleFunction(piccolo, vegeta, goku, krillin);
        theBattleFunction(piccolo, vegeta, krillin, goku);
        theBattleFunction(vegeta, goku, krillin, piccolo);
        theBattleFunction(vegeta, goku, piccolo, krillin);
        theBattleFunction(vegeta, krillin, goku, piccolo);
        theBattleFunction(vegeta, krillin, piccolo, goku);
        theBattleFunction(vegeta, piccolo, goku, krillin);
        theBattleFunction(vegeta, piccolo, krillin, goku);
        hasClicked = true;
        $("#runDiv").hide();
        $("#reset").show();
    });
    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#runDiv").show();
        $("#Goku, #Krillin, #Piccolo, #Vegeta").empty();
    });

});
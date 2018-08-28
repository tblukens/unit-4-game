// Create object to hold game
var dbzObject = {

    // setup variables for characters and health, attack etc...
    characterSelected: false,
    characterSelectedValue: "",
    enemySelected: false,
    enemySelectedValue: "",
    hasAttacked: false,
    hasDefeated: false,
    hasLost: false,
    damaged: false,
    gameOver: false,
    freshGame: true,
    characterListArray: [{
            name: 'Goku',
            healthPoints: 160,
            resetHP: 160,
            attackPower: 12,
            constAttackPower: 12,
            counterAttack: 15,
        },
        {
            name: 'Krillin',
            healthPoints: 180,
            resetHP: 180,
            attackPower: 7,
            constAttackPower: 7,
            counterAttack: 10,
        },
        {
            name: 'Piccolo',
            healthPoints: 130,
            resetHP: 130,
            attackPower: 15,
            constAttackPower: 15,
            counterAttack: 18,
        },
        {
            name: 'Vegeta',
            healthPoints: 190,
            resetHP: 190,
            attackPower: 17,
            constAttackPower: 17,
            counterAttack: 20,
        },


    ],
    // gokuSelect: this.characterListArray[0],
    // krillinSelect: this.characterListArray[1],
    // piccoloSelect: this.characterListArray[2],
    // vegetaSelect: this.characterListArray[3],

    // list characters in #character-select
    displayCharacterSelect: function () {

        for (let i = 0; i < this.characterListArray.length; i++) {
            const element = this.characterListArray[i].name;
            console.log(element);
            var newCharacterDiv = $("<div>");
            newCharacterDiv.addClass("thumbnail d-inline text-center");
            newCharacterDiv.attr({
                id: this.characterListArray[i].name + "-div",
                value: this.characterListArray[i].name
            });
            $("#character-select").append(newCharacterDiv)
            var newCharacterDivImg = $("<img>");
            newCharacterDivImg.attr("src", "./assets/images/" + this.characterListArray[i].name.toLowerCase() + ".png");
            newCharacterDivImg.addClass("col-3 character-image border border-danger ");
            newCharacterDivImg.attr({
                id: this.characterListArray[i].name,
                value: this.characterListArray[i].name,
                alt: this.characterListArray[i].name
            });
            $("#" + this.characterListArray[i].name + "-div").append(newCharacterDivImg);
            var newCharacterDivInfo = $("<div>");
            newCharacterDivInfo.addClass("caption border-top border-bottom border-info");
            newCharacterDivInfo.attr("id", this.characterListArray[i].name + "-info");
            newCharacterDivInfo.text(this.characterListArray[i].healthPoints);
            $("#" + this.characterListArray[i].name + "-div").append(newCharacterDivInfo);

        }

    },

    // when a character is selected move selected character to "#your-character"
    playerSelectedCharacter: function () {
        if (this.characterSelected === false) {
            var moveGokuEnemy = function () {
                $("#Goku-div").detach().appendTo("#available-enemies");
                $("#Goku").detach().appendTo("#Goku-div");
                $("#Goku").addClass("enemies-available");
                $("#Goku-info").detach().appendTo("#Goku-div");
            }
            var moveKrillinEnemy = function () {
                $("#Krillin-div").detach().appendTo("#available-enemies");
                $("#Krillin").detach().appendTo("#Krillin-div");
                $("#Krillin").addClass("enemies-available");
                $("#Krillin-info").detach().appendTo("#Krillin-div");
            }

            var movePiccoloEnemy = function () {
                $("#Piccolo-div").detach().appendTo("#available-enemies");
                $("#Piccolo").detach().appendTo("#Piccolo-div");
                $("#Piccolo").addClass("enemies-available");
                $("#Piccolo-info").detach().appendTo("#Piccolo-div");
            }

            var moveVegetaEnemy = function () {
                $("#Vegeta-div").detach().appendTo("#available-enemies");
                $("#Vegeta").detach().appendTo("#Vegeta-div");
                $("#Vegeta").addClass("enemies-available");
                $("#Vegeta-info").detach().appendTo("#Vegeta-div");
            }


            $("#reset").off();
            $(".character-image").on("click", function () {
                if ($(this).attr("value") === "Goku") {
                    $("#Goku-div").detach().appendTo("#your-character");
                    $(this).detach().appendTo("#Goku-div");
                    $("#Goku-info").detach().appendTo("#Goku-div");
                    $(this).removeClass("character-image col-3");
                    $(this).addClass("player-character-image");
                    dbzObject.characterSelectedValue = "Goku";
                    if (dbzObject.characterSelected === false) {
                        moveKrillinEnemy();
                        movePiccoloEnemy();
                        moveVegetaEnemy();
                    }
                } else if ($(this).attr("value") === "Krillin") {
                    $("#Krillin-div").detach().appendTo("#your-character");
                    $(this).detach().appendTo("#Krillin-div");
                    $("#Krillin-info").detach().appendTo("#Krillin-div");
                    $(this).removeClass("character-image col-3");
                    $(this).addClass("player-character-image");
                    dbzObject.characterSelectedValue = "Krillin";
                    $(".character-image").detach().appendTo("#available-enemies");
                    if (dbzObject.characterSelected === false) {
                        moveGokuEnemy();
                        movePiccoloEnemy();
                        moveVegetaEnemy();
                    }
                } else if ($(this).attr("value") === "Piccolo") {
                    $("#Piccolo-div").detach().appendTo("#your-character");
                    $(this).detach().appendTo("#Piccolo-div");
                    $("#Piccolo-info").detach().appendTo("#Piccolo-div");
                    $(this).removeClass("character-image col-3");
                    $(this).addClass("player-character-image");
                    dbzObject.characterSelectedValue = "Piccolo";
                    $(".character-image").detach().appendTo("#available-enemies");
                    if (dbzObject.characterSelected === false) {
                        moveGokuEnemy();
                        moveKrillinEnemy();
                        moveVegetaEnemy();
                    }
                } else if ($(this).attr("value") === "Vegeta") {
                    $("#Vegeta-div").detach().appendTo("#your-character");
                    $(this).detach().appendTo("#Vegeta-div");
                    $("#Vegeta-info").detach().appendTo("#Vegeta-div");
                    $(this).removeClass("character-image col-3");
                    $(this).addClass("player-character-image");
                    dbzObject.characterSelectedValue = "Vegeta";
                    $(".character-image").detach().appendTo("#available-enemies");
                    if (dbzObject.characterSelected === false) {
                        moveGokuEnemy();
                        movePiccoloEnemy();
                        moveKrillinEnemy();
                    }
                }

                dbzObject.characterSelected = true;
                dbzObject.freshGame = false;
                if (dbzObject.enemySelected === false) {
                    dbzObject.enemySelect();
                } else if (dbzObject.enemySelected === true) {
                    return false;
                }



                console.log(dbzObject.characterSelected)
            });
        } // else if (this.characterSelected === true) {
        //  return false;
        //}
    },

    // when an enemy is selected move selection to "#defender"
    // also move enemies available to "#available-enemies"
    enemySelect: function () {
        if (this.enemySelected === false) {
            $(".character-image").off();
            $(".character-image").on("click", function () {
                if ($(this).attr("value") === "Goku") {
                    $("#Goku-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Goku-div");
                    $("#Goku-info").detach().appendTo("#Goku-div");
                    dbzObject.enemySelectedValue = "Goku";
                    $(this).removeClass("character-image enemies-available col-3");
                    $(this).addClass("defender-character-image");
                } else if ($(this).attr("value") === "Krillin") {
                    $("#Krillin-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Krillin-div");
                    $("#Krillin-info").detach().appendTo("#Krillin-div");
                    dbzObject.enemySelectedValue = "Krillin";
                    $(this).removeClass("character-image enemies-available col-3");
                    $(this).addClass("defender-character-image");
                } else if ($(this).attr("value") === "Piccolo") {
                    $("#Piccolo-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Piccolo-div");
                    $("#Piccolo-info").detach().appendTo("#Piccolo-div");
                    dbzObject.enemySelectedValue = "Piccolo";
                    $(this).removeClass("character-image enemies-available col-3");
                    $(this).addClass("defender-character-image");
                } else if ($(this).attr("value") === "Vegeta") {
                    $("#Vegeta-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Vegeta-div");
                    $("#Vegeta-info").detach().appendTo("#Vegeta-div");
                    dbzObject.enemySelectedValue = "Vegeta";
                    $(this).removeClass("character-image enemies-available col-3");
                    $(this).addClass("defender-character-image");
                }

                dbzObject.enemySelected = true;
                dbzObject.battleFunction();

            });
        }
    },

    // when #attack button is clicked factor damage and change variables accordingly
    // NOTE: chosen characters damage goes up by base amount each attack
    // NOTE: enemies damage is constant
    // show damage in #flavor-text
    battleFunction: function () {

        var testBattleFunction = function (playerCharacter, defenderCharacter) {
            playerCharacter.healthPoints = playerCharacter.healthPoints - defenderCharacter.counterAttack;
            if (dbzObject.hasAttacked === true) {
                playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                defenderCharacter.healthPoints = defenderCharacter.healthPoints - playerCharacter.attackPower;
            } else if (dbzObject.hasAttacked === false) {
                defenderCharacter.healthPoints = defenderCharacter.healthPoints - playerCharacter.attackPower;
                dbzObject.hasAttacked = true;
            } else if (dbzObject.hasAttacked === false && dbzObject.hasDefeated === true) {
                playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                defenderCharacter.healthPoints = defenderCharacter.healthPoints - playerCharacter.attackPower;
            }
            console.log(playerCharacter.name + " " + playerCharacter.attackPower + " " + playerCharacter.healthPoints);
            console.log(defenderCharacter.name + " " + defenderCharacter.attackPower + " " + defenderCharacter.healthPoints);
            console.log(dbzObject.hasAttacked);
            console.log(dbzObject.hasDefeated)

            $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + playerCharacter.attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                "<p>" + dbzObject.enemySelectedValue + " dealt " + defenderCharacter.counterAttack + " back to " + dbzObject.characterSelectedValue + "!");
            $("#" + dbzObject.characterSelectedValue + "-info").text(playerCharacter.healthPoints);
            $("#" + dbzObject.enemySelectedValue + "-info").text(defenderCharacter.healthPoints);
            if (defenderCharacter.healthPoints <= 0) {
                dbzObject.enemyDefeated();
            }
        };
        var gokuSelect = dbzObject.characterListArray[0];
        var krillinSelect = dbzObject.characterListArray[1];
        var piccoloSelect = dbzObject.characterListArray[2];
        var vegetaSelect = dbzObject.characterListArray[3];


        $(".character-image").off();
        $("#attack").off();
        $("#attack").on("click", function () {
            if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Krillin") {

                testBattleFunction(gokuSelect, krillinSelect);
                // dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[1].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[0].attackPower = dbzObject.characterListArray[0].attackPower + dbzObject.characterListArray[0].constAttackPower;
                //     dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[0].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[0].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>Goku dealt " + dbzObject.characterListArray[0].attackPower + " damage to Krillin!</p>" +
                //     "<p>Krillin dealt " + dbzObject.characterListArray[1].attackPower + " back to Goku!");
                // $("#Goku-info").text(dbzObject.characterListArray[0].healthPoints);
                // $("#Krillin-info").text(dbzObject.characterListArray[1].healthPoints);

                // if (dbzObject.characterListArray[1].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Piccolo") {

                testBattleFunction(gokuSelect, piccoloSelect);
                // dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[2].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[0].attackPower = dbzObject.characterListArray[0].attackPower + dbzObject.characterListArray[2].constAttackPower;
                //     dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[0].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[0].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>Goku dealt " + dbzObject.characterListArray[0].attackPower + " damage to Piccolo!</p>" +
                //     "<p>Piccolo dealt " + dbzObject.characterListArray[2].attackPower + " back to Goku!");
                // $("#Goku-info").text(dbzObject.characterListArray[0].healthPoints);
                // $("#Piccolo-info").text(dbzObject.characterListArray[2].healthPoints);
                // if (dbzObject.characterListArray[2].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Vegeta") {

                testBattleFunction(gokuSelect, vegetaSelect);
                // dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[3].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[0].attackPower = dbzObject.characterListArray[0].attackPower + dbzObject.characterListArray[3].constAttackPower;
                //     dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[0].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[0].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[0].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[0].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[3].healthPoints);
                // if (dbzObject.characterListArray[3].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Goku") {
                testBattleFunction(krillinSelect, gokuSelect);
                // dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[0].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[1].attackPower = dbzObject.characterListArray[1].attackPower + dbzObject.characterListArray[1].constAttackPower;
                //     dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[1].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[1].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>Krillin dealt " + dbzObject.characterListArray[1].attackPower + " damage to Goku!</p>" +
                //     "<p>Goku dealt " + dbzObject.characterListArray[0].attackPower + " back to Krillin!");
                // $("#Krillin-info").text(dbzObject.characterListArray[1].healthPoints);
                // $("#Goku-info").text(dbzObject.characterListArray[0].healthPoints);
                // if (dbzObject.characterListArray[0].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Piccolo") {
                testBattleFunction(krillinSelect, piccoloSelect);
                // dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[2].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[1].attackPower = dbzObject.characterListArray[1].attackPower + dbzObject.characterListArray[1].constAttackPower;
                //     dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[1].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[1].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[1].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[2].healthPoints);
                // if (dbzObject.characterListArray[2].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Vegeta") {
                testBattleFunction(krillinSelect, vegetaSelect);
                // dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[3].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[1].attackPower = dbzObject.characterListArray[1].attackPower + dbzObject.characterListArray[1].constAttackPower;
                //     dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[1].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[1].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[1].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[3].healthPoints);
                // if (dbzObject.characterListArray[3].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Goku") {
                testBattleFunction(piccoloSelect, gokuSelect);
                // dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[0].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[2].attackPower = dbzObject.characterListArray[2].attackPower + dbzObject.characterListArray[2].constAttackPower;
                //     dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[2].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[2].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[0].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[2].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[0].healthPoints);
                // if (dbzObject.characterListArray[0].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Krillin") {
                testBattleFunction(piccoloSelect, krillinSelect);
                // dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[1].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[2].attackPower = dbzObject.characterListArray[2].attackPower + dbzObject.characterListArray[2].constAttackPower;
                //     dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[2].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[2].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[2].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[1].healthPoints);
                // if (dbzObject.characterListArray[1].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Vegeta") {
                testBattleFunction(piccoloSelect, vegetaSelect);
                // dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[3].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[2].attackPower = dbzObject.characterListArray[2].attackPower + dbzObject.characterListArray[2].constAttackPower;
                //     dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[2].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[2].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[2].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[3].healthPoints);
                // if (dbzObject.characterListArray[3].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Goku") {
                testBattleFunction(vegetaSelect, gokuSelect);
                // dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[0].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[3].attackPower = dbzObject.characterListArray[3].attackPower + dbzObject.characterListArray[3].constAttackPower;
                //     dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[3].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[3].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[0].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[3].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[0].healthPoints);
                // if (dbzObject.characterListArray[0].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Krillin") {
                testBattleFunction(vegetaSelect, krillinSelect);
                // dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[1].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[3].attackPower = dbzObject.characterListArray[3].attackPower + dbzObject.characterListArray[3].constAttackPower;
                //     dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[3].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[3].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[3].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[1].healthPoints);
                // if (dbzObject.characterListArray[1].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Piccolo") {
                testBattleFunction(vegetaSelect, piccoloSelect);
                // dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[2].attackPower;
                // if (dbzObject.hasAttacked === true) {
                //     dbzObject.characterListArray[3].attackPower = dbzObject.characterListArray[3].attackPower + dbzObject.characterListArray[3].constAttackPower;
                //     dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[3].attackPower;
                // } else if (dbzObject.hasAttacked === false) {
                //     dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[3].attackPower;
                //     dbzObject.hasAttacked = true;
                // }
                // $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                //     "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                // $("#" + dbzObject.characterSelectedValue + "-info").text(dbzObject.characterListArray[3].healthPoints);
                // $("#" + dbzObject.enemySelectedValue + "-info").text(dbzObject.characterListArray[2].healthPoints);
                // if (dbzObject.characterListArray[2].healthPoints <= 0) {
                //     dbzObject.enemyDefeated();
                // }
            }
        }); //0 1 2 3
    },
    // if defender wins - game over
    // else continue with next enemy
    enemyDefeated: function () {

        var gokuSelect = dbzObject.characterListArray[0];
        var krillinSelect = dbzObject.characterListArray[1];
        var piccoloSelect = dbzObject.characterListArray[2];
        var vegetaSelect = dbzObject.characterListArray[3];
        // when defender loses remove them
        $("#" + this.enemySelectedValue + "-div").remove();
        dbzObject.hasAttacked = false;
        dbzObject.hasDefeated = true;
        // show that the enemy is defeated in #flavor-text and to choose another enemy

        var enemyDefeatedFunction = function (playerCharacter, defenderCharacter) {


            $("#flavor-text").html("<p>You have defeated " + dbzObject.enemySelectedValue + "! Choose another enemy to continue!</p> <p>" +
                dbzObject.characterSelectedValue + " dealt " + playerCharacter.attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                "<p>" + dbzObject.enemySelectedValue + " dealt " + defenderCharacter.counterAttack + " back to " + dbzObject.characterSelectedValue + "!");
            $("#" + dbzObject.characterSelectedValue + "-info").text(playerCharacter.healthPoints);
            $("#" + dbzObject.enemySelectedValue + "-info").text(defenderCharacter.healthPoints);
            dbzObject.enemySelectedValue = "";
            dbzObject.enemySelected = false;
            dbzObject.enemySelect();
        };
        if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Krillin") {
            console.log(dbzObject.characterSelectedValue, dbzObject.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, krillinSelect);
        } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Piccolo") {
            console.log(dbzObject.characterSelectedValue, dbzObject.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, piccoloSelect);
        } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Vegeta") {
            console.log(dbzObject.characterSelectedValue, dbzObject.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, vegetaSelect);
        }
        if (gokuSelect.healthPoints > 0 && krillinSelect.healthPoints <= 0 && piccoloSelect.healthPoints <= 0 && vegetaSelect.healthPoints <= 0) {
            dbzObject.youWin();
        }
        // if (dbzObject.characterListArray[0].healthPoints > 0 && dbzObject.characterListArray[1].healthPoints <= 0 && dbzObject.characterListArray[2].healthPoints <= 0 && dbzObject.characterListArray[3].healthPoints <= 0) {
        //     dbzObject.youWin();
        // } else if (dbzObject.characterListArray[1].healthPoints > 0 && dbzObject.characterListArray[0].healthPoints <= 0 && dbzObject.characterListArray[2].healthPoints <= 0 && dbzObject.characterListArray[3].healthPoints <= 0) {
        //     dbzObject.youWin();
        // } else if (dbzObject.characterListArray[2].healthPoints > 0 && dbzObject.characterListArray[0].healthPoints <= 0 && dbzObject.characterListArray[1].healthPoints <= 0 && dbzObject.characterListArray[3].healthPoints <= 0) {
        //     dbzObject.youWin();
        // } else if (dbzObject.characterListArray[3].healthPoints > 0 && dbzObject.characterListArray[0].healthPoints <= 0 && dbzObject.characterListArray[2].healthPoints <= 0 && dbzObject.characterListArray[1].healthPoints <= 0) {
        //     dbzObject.youWin();
        // }
    },
    youWin: function () {
        dbzObject.gameOver = true;
        $("#available-enemies, #defender, #attack").hide();
        // $("#defender").hide();
        // $("#attack").hide();
        $("#resetDiv").html("<button type='button' class='btn btn-danger' id='reset'>Reset</button>")
        $("#flavor-text").html("<h1>YOU WIN! <span class='winner-font'>" + dbzObject.characterSelectedValue.toUpperCase() + "</span> IS THE GREATEST FIGHTER IN THE UNIVERSE");
        $("#" + dbzObject.characterSelectedValue).removeClass("col-3").addClass("huge-img");
        this.resetFunction();

    },
    resetFunction: function () {

        var gokuSelect = dbzObject.characterListArray[0];
        var krillinSelect = dbzObject.characterListArray[1];
        var piccoloSelect = dbzObject.characterListArray[2];
        var vegetaSelect = dbzObject.characterListArray[3];

        $("#reset").off().on("click", function () {
            $("#" + dbzObject.characterSelectedValue + "-div").empty();
            $("#your-character").html("<p>Your Character</p>")
            $("#resetDiv, #flavor-text").empty();
            $("#available-enemies, #defender, #attack").show();
            dbzObject.characterSelected = false;
            dbzObject.characterSelectedValue = "";
            dbzObject.enemySelected = false;
            dbzObject.enemySelectedValue = "";
            dbzObject.hasAttacked = false;
            dbzObject.hasDefeated = false;
            dbzObject.gameOver = false;
            // dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].resetHP;
            gokuSelect.healthPoints = gokuSelect.resetHP;
            // dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].resetHP;
            krillinSelect.healthPoints = krillinSelect.resetHP;
            // dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].resetHP;
            piccoloSelect.healthPoints = piccoloSelect.resetHP;
            // dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].resetHP;
            vegetaSelect.healthPoints = vegetaSelect.resetHP;

            // dbzObject.characterListArray[0].attackPower = dbzObject.characterListArray[0].constAttackPower;
            gokuSelect.attackPower = gokuSelect.constAttackPower;
            // dbzObject.characterListArray[1].attackPower = dbzObject.characterListArray[1].constAttackPower;
            krillinSelect.attackPower = krillinSelect.constAttackPower;
            // dbzObject.characterListArray[2].attackPower = dbzObject.characterListArray[2].constAttackPower;
            piccoloSelect.attackPower = piccoloSelect.constAttackPower;
            // dbzObject.characterListArray[3].attackPower = dbzObject.characterListArray[3].constAttackPower;
            vegetaSelect.attackPower = vegetaSelect.constAttackPower;

            console.log(dbzObject.characterListArray[0].attackPower, dbzObject.characterListArray[1].attackPower, dbzObject.characterListArray[2].attackPower, dbzObject.characterListArray[3].attackPower)
            dbzObject.displayCharacterSelect();
            if (dbzObject.characterSelected === false) {
                dbzObject.playerSelectedCharacter();
            }
        })
    }






    // when all enemies are defeated show that the player has won and game is over
    // then show restart button in #flavor-text

};


$(document).ready(function () {

    dbzObject.displayCharacterSelect();
    if (dbzObject.characterSelected === false) {
        dbzObject.playerSelectedCharacter();
    }

});
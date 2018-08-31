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
        healthPoints: 14,
        resetHP: 14,
        attackPower: 12,
        constAttackPower: 12,
        counterAttack: 14,
    },
    {
        name: 'Krillin',
        healthPoints: 115,
        resetHP: 115,
        attackPower: 444,
        constAttackPower: 444,
        counterAttack: 444,
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


    ],
    attackAudio: [{

    }],
    // gokuSelect: this.characterListArray[0],
    // krillinSelect: this.characterListArray[1],
    // piccoloSelect: this.characterListArray[2],
    // vegetaSelect: this.characterListArray[3],

    // list characters in #character-select
    displayCharacterSelect: function () {

        $("#attack, #yourCharacterP, #defenderP, #available-enemies").hide();
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
            newCharacterDivImg.addClass("character-image border border-danger ");
            newCharacterDivImg.attr({
                id: this.characterListArray[i].name,
                value: this.characterListArray[i].name,
                alt: this.characterListArray[i].name
            });
            $("#" + this.characterListArray[i].name + "-div").append(newCharacterDivImg);
            var newCharacterDivInfo = $("<div>");
            newCharacterDivInfo.addClass("caption border-top border-bottom border-warning");
            newCharacterDivInfo.attr("id", this.characterListArray[i].name + "-info");
            newCharacterDivInfo.html("ATK: " + this.characterListArray[i].attackPower + " | <span class='charName'>" + this.characterListArray[i].name + "</span> | " + " " + "HP: " + this.characterListArray[i].healthPoints);
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
                    $(this).removeClass("character-image");
                    if (dbzObject.freshGame === true) {
                        $(this).addClass("player-character-image");
                    }
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
                    $(this).removeClass("character-image");
                    if (dbzObject.freshGame === true) {
                        $(this).addClass("player-character-image");
                    }
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
                    $(this).removeClass("character-image");
                    if (dbzObject.freshGame === true) {
                        $(this).addClass("player-character-image");
                    }
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
                    $(this).removeClass("character-image");
                    if (dbzObject.freshGame === true) {
                        $(this).addClass("player-character-image");
                    }
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



                console.log(dbzObject.characterSelected);
                return;
            });
        } // else if (this.characterSelected === true) {
        //  return false;
        //}
    },

    // when an enemy is selected move selection to "#defender"
    // also move enemies available to "#available-enemies"
    enemySelect: function () {
        if (this.characterSelected === true && this.enemySelected === false && this.hasDefeated === false) {
            $("#yourCharacterP, #available-enemies, #attack").show();
            $("#flavor-text").text("Great choice! Now choose who to fight from the available enemies!")
        }

        if (this.enemySelected === false) {
            $(".character-image").off();
            $(".character-image").on("click", function () {
                if ($(this).attr("value") === "Goku") {
                    $("#Goku-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Goku-div");
                    $("#Goku-info").detach().appendTo("#Goku-div");
                    dbzObject.enemySelectedValue = "Goku";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image");
                    }
                } else if ($(this).attr("value") === "Krillin") {
                    $("#Krillin-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Krillin-div");
                    $("#Krillin-info").detach().appendTo("#Krillin-div");
                    dbzObject.enemySelectedValue = "Krillin";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image");
                    }
                } else if ($(this).attr("value") === "Piccolo") {
                    $("#Piccolo-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Piccolo-div");
                    $("#Piccolo-info").detach().appendTo("#Piccolo-div");
                    dbzObject.enemySelectedValue = "Piccolo";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image");
                    }
                } else if ($(this).attr("value") === "Vegeta") {
                    $("#Vegeta-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Vegeta-div");
                    $("#Vegeta-info").detach().appendTo("#Vegeta-div");
                    dbzObject.enemySelectedValue = "Vegeta";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image");
                    }

                }

                dbzObject.enemySelected = true;
                dbzObject.battleFunction();

            });
        }
        return;
    },

    // when #attack button is clicked factor damage and change variables accordingly
    // NOTE: chosen characters damage goes up by base amount each attack
    // NOTE: enemies damage is constant
    // show damage in #flavor-text
    battleFunction: function () {
        if (this.characterSelected === true && this.enemySelected === true && this.hasAttacked === false) {
            $("#defenderP, #attackDiv").show();
            $("#flavor-text").text("Oh, he's a tough one. Click ATTACK button to fight until someone loses!")
        }

        var theRealBattleFunction = function (playerCharacter, defenderCharacter) {
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
            console.log(dbzObject.hasDefeated);





            $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + playerCharacter.attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                "<p>" + dbzObject.enemySelectedValue + " dealt " + defenderCharacter.counterAttack + " back to " + dbzObject.characterSelectedValue + "!");
            // $("#" + dbzObject.characterSelectedValue + "-info").text(playerCharacter.name + " " + playerCharacter.healthPoints);
            $("#" + dbzObject.characterSelectedValue + "-info").html("ATK: " + playerCharacter.attackPower + " | <span class='charName'>" + playerCharacter.name + "</span> | " + " " + "HP: " + playerCharacter.healthPoints);
            // $("#" + dbzObject.enemySelectedValue + "-info").text(defenderCharacter.name + " " + defenderCharacter.healthPoints);
            $("#" + dbzObject.enemySelectedValue + "-info").html("ATK: " + defenderCharacter.attackPower + " | <span class='charName'>" + defenderCharacter.name + "</span> | " + " " + "HP: " + defenderCharacter.healthPoints);


            if (defenderCharacter.healthPoints <= 0 && playerCharacter.healthPoints > 0) {
                dbzObject.enemyDefeated();
            }
            if (playerCharacter.healthPoints <= 0) {
                dbzObject.youLose();
            }
        };
        var gokuSelect = this.characterListArray[0];
        var krillinSelect = this.characterListArray[1];
        var piccoloSelect = this.characterListArray[2];
        var vegetaSelect = this.characterListArray[3];


        $(".character-image").off();
        $("#attack").off();
        $("#attack").on("click", function () {
            $("#attackDiv").hide();
            $("#defender, #your-character").stop();
            if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Krillin") {
                theRealBattleFunction(gokuSelect, krillinSelect);
                dbzObject.battleAnimations(gokuSelect, krillinSelect);
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Piccolo") {
                theRealBattleFunction(gokuSelect, piccoloSelect);
                dbzObject.battleAnimations(gokuSelect, piccoloSelect);
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Vegeta") {
                theRealBattleFunction(gokuSelect, vegetaSelect);
                dbzObject.battleAnimations(gokuSelect, vegetaSelect);
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Goku") {
                theRealBattleFunction(krillinSelect, gokuSelect);
                dbzObject.battleAnimations(krillinSelect, gokuSelect);
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Piccolo") {
                theRealBattleFunction(krillinSelect, piccoloSelect);
                dbzObject.battleAnimations(krillinSelect, piccoloSelect);
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Vegeta") {
                theRealBattleFunction(krillinSelect, vegetaSelect);
                dbzObject.battleAnimations(krillinSelect, vegetaSelect);
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Goku") {
                theRealBattleFunction(piccoloSelect, gokuSelect);
                dbzObject.battleAnimations(piccoloSelect, gokuSelect);
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Krillin") {
                theRealBattleFunction(piccoloSelect, krillinSelect);
                dbzObject.battleAnimations(piccoloSelect, krillinSelect);
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Vegeta") {
                theRealBattleFunction(piccoloSelect, vegetaSelect);
                dbzObject.battleAnimations(piccoloSelect, vegetaSelect);
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Goku") {
                theRealBattleFunction(vegetaSelect, gokuSelect);
                dbzObject.battleAnimations(vegetaSelect, gokuSelect);
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Krillin") {
                theRealBattleFunction(vegetaSelect, krillinSelect);
                dbzObject.battleAnimations(vegetaSelect, krillinSelect);
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Piccolo") {
                theRealBattleFunction(vegetaSelect, piccoloSelect);
                dbzObject.battleAnimations(vegetaSelect, piccoloSelect);
            }
        });
        return;
    },

    battleAnimations: function (playerCharacter, defenderCharacter) {

        var enemyAnimate = $("#defender");
        var playerAnimate = $("#your-character");

        if (playerCharacter.healthPoints > 0 && defenderCharacter.healthPoints > 0) {
            playerAnimate.animate({
                left: '50px'
            }, 100, 'linear').animate({
                left: '-=50px'
            }, 10, 'linear');

            enemyAnimate.delay(250).animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear').animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear').animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear');

            enemyAnimate.delay(550).animate({
                left: '-50px'
            }, 100, 'linear').animate({
                left: '+=50px'
            }, 10, 'linear');

            playerAnimate.delay(1200).animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear').animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear').animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear');

            $("#attackDiv").delay(1700).show(0);
        } else if (defenderCharacter.healthPoints <= 0 && playerCharacter.healthPoints > 0) {
            playerAnimate.animate({
                left: '100px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear');
            $("#" + defenderCharacter.name + "-div," + " #" + defenderCharacter.name + ", #" + defenderCharacter.name + "-info").delay(100).animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear').animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear').animate({
                left: '12px'
            }, 50, 'linear').animate({
                left: '0px'
            }, 50, 'linear').fadeOut(600);

            console.log(defenderCharacter.name);
            console.log("#" + defenderCharacter.name + "-info");
        }

        return;

    },
    // if defender wins - game over
    // else continue with next enemy
    enemyDefeated: function () {

        var gokuSelect = this.characterListArray[0];
        var krillinSelect = this.characterListArray[1];
        var piccoloSelect = this.characterListArray[2];
        var vegetaSelect = this.characterListArray[3];
        // when defender loses remove them
        // $("#" + this.enemySelectedValue + "-div").remove();
        this.hasAttacked = false;
        this.hasDefeated = true;
        // show that the enemy is defeated in #flavor-text and to choose another enemy

        var enemyDefeatedFunction = function (playerCharacter, defenderCharacter) {


            $("#flavor-text").html("<p>You have defeated " + dbzObject.enemySelectedValue + "! Choose another enemy to continue!</p> <p>" +
                dbzObject.characterSelectedValue + " dealt " + playerCharacter.attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                "<p>" + dbzObject.enemySelectedValue + " dealt " + defenderCharacter.counterAttack + " back to " + dbzObject.characterSelectedValue + "!");
            $("#" + dbzObject.characterSelectedValue + "-info").html("ATK: " + playerCharacter.attackPower + " | <span class='charName'>" + playerCharacter.name + "</span> | " + " " + "HP: " + playerCharacter.healthPoints);
            $("#" + dbzObject.enemySelectedValue + "-info").html("ATK: " + defenderCharacter.attackPower + " | <span class='charName'>" + defenderCharacter.name + "</span> | " + " " + "HP: " + defenderCharacter.healthPoints);

            dbzObject.enemySelectedValue = "";
            dbzObject.enemySelected = false;
            dbzObject.enemySelect();
        };
        if (this.characterSelectedValue === "Goku" && this.enemySelectedValue === "Krillin") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, krillinSelect);
        } else if (this.characterSelectedValue === "Goku" && this.enemySelectedValue === "Piccolo") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, piccoloSelect);
        } else if (this.characterSelectedValue === "Goku" && this.enemySelectedValue === "Vegeta") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, vegetaSelect);
        } else if (this.characterSelectedValue === "Krillin" && this.enemySelectedValue === "Goku") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(krillinSelect, gokuSelect);
        } else if (this.characterSelectedValue === "Krillin" && this.enemySelectedValue === "Piccolo") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(krillinSelect, piccoloSelect);
        } else if (this.characterSelectedValue === "Krillin" && this.enemySelectedValue === "Vegeta") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(krillinSelect, vegetaSelect);
        } else if (this.characterSelectedValue === "Piccolo" && this.enemySelectedValue === "Goku") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(piccoloSelect, gokuSelect);
        } else if (this.characterSelectedValue === "Piccolo" && this.enemySelectedValue === "Krillin") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(piccoloSelect, krillinSelect);
        } else if (this.characterSelectedValue === "Piccolo" && this.enemySelectedValue === "Vegeta") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(piccoloSelect, vegetaSelect);
        } else if (this.characterSelectedValue === "Vegeta" && this.enemySelectedValue === "Goku") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(vegetaSelect, gokuSelect);
        } else if (this.characterSelectedValue === "Vegeta" && this.enemySelectedValue === "Krillin") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(vegetaSelect, krillinSelect);
        } else if (this.characterSelectedValue === "Vegeta" && this.enemySelectedValue === "Piccolo") {
            console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(vegetaSelect, piccoloSelect);
        }
        if (gokuSelect.healthPoints > 0 && krillinSelect.healthPoints <= 0 && piccoloSelect.healthPoints <= 0 && vegetaSelect.healthPoints <= 0) {
            this.youWin();
        } else if (krillinSelect.healthPoints > 0 && gokuSelect.healthPoints <= 0 && piccoloSelect.healthPoints <= 0 && vegetaSelect.healthPoints <= 0) {
            this.youWin();
        } else if (piccoloSelect.healthPoints > 0 && gokuSelect.healthPoints <= 0 && krillinSelect.healthPoints <= 0 && vegetaSelect.healthPoints <= 0) {
            this.youWin();
        } else if (vegetaSelect.healthPoints > 0 && gokuSelect.healthPoints <= 0 && krillinSelect.healthPoints <= 0 && piccoloSelect.healthPoints <= 0) {
            this.youWin();
        }
        return;
    },
    youLose: function () {

        $(".character-image").off();
        this.gameOver = true;
        this.enemySelected = true;
        $("#available-enemies, #attack, #your-character").hide();
        $("#flavor-text").removeClass("col-3").addClass("order-last");
        // $("#defender").html("<p></p>");
        // $("#attack").hide();
        $("#resetDiv").html("<button type='button' class='btn btn-danger' id='reset'>Reset</button>")
        $("#flavor-text").html("<h1>Sorry... you LOSE. <p>You were defeated by: <span class='winner-font'>" + this.enemySelectedValue.toUpperCase() + "</span>.</p></h1>");
        $("#" + this.enemySelectedValue).removeClass().addClass("huge-img order-first");
        this.resetFunction();
        return;
    },
    youWin: function () {
        this.gameOver = true;
        $("#available-enemies, #attack, #defender").hide();
        $("#flavor-text").removeClass("col-3");
        // $("#defender").html("<p></p>");
        // $("#attack").hide();
        $("#resetDiv").html("<button type='button' class='btn btn-danger' id='reset'>Reset</button>")
        $("#flavor-text").html("<h1>YOU WIN! <span class='winner-font'>" + this.characterSelectedValue.toUpperCase() + "</span> IS THE GREATEST FIGHTER IN THE UNIVERSE</h1>");
        $("#" + this.characterSelectedValue).removeClass("player-character-image").addClass("huge-img");
        this.resetFunction();
        return;

    },
    resetFunction: function () {

        var gokuSelect = this.characterListArray[0];
        var krillinSelect = this.characterListArray[1];
        var piccoloSelect = this.characterListArray[2];
        var vegetaSelect = this.characterListArray[3];

        $("#reset").off().on("click", function () {
            $("#" + dbzObject.characterSelectedValue + "-div").empty();
            $("#resetDiv, #flavor-text, #your-character, #available-enemies, #defender").empty();
            $("#flavor-text").removeClass().html("<p>Click a character to choose your fighter!</p>").addClass("col-3");

            $("#available-enemies").html("<p>Enemies Available To Attack</p>");
            $("#available-enemies, #defender, #attack, #your-character").show();
            dbzObject.characterSelected = false;
            dbzObject.characterSelectedValue = "";
            dbzObject.enemySelected = false;
            dbzObject.enemySelectedValue = "";
            dbzObject.hasAttacked = false;
            dbzObject.hasDefeated = false;
            dbzObject.gameOver = false;
            dbzObject.freshGame = true;
            gokuSelect.healthPoints = gokuSelect.resetHP;
            krillinSelect.healthPoints = krillinSelect.resetHP;
            piccoloSelect.healthPoints = piccoloSelect.resetHP;
            vegetaSelect.healthPoints = vegetaSelect.resetHP;

            gokuSelect.attackPower = gokuSelect.constAttackPower;
            krillinSelect.attackPower = krillinSelect.constAttackPower;
            piccoloSelect.attackPower = piccoloSelect.constAttackPower;
            vegetaSelect.attackPower = vegetaSelect.constAttackPower;

            console.log(dbzObject.characterListArray[0].attackPower, dbzObject.characterListArray[1].attackPower, dbzObject.characterListArray[2].attackPower, dbzObject.characterListArray[3].attackPower)
            dbzObject.displayCharacterSelect();
            if (dbzObject.characterSelected === false) {
                dbzObject.playerSelectedCharacter();
            }
        });
        return;
    }






    // when all enemies are defeated show that the player has won and game is over
    // then show restart button in #flavor-text

};


$(document).ready(function () {



    dbzObject.displayCharacterSelect();
    if (dbzObject.characterSelected === false) {
        dbzObject.playerSelectedCharacter();
    };

});
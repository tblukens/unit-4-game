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
    lastEnemyDefeated: "",
    characterListArray: [{
        name: 'Goku',
        healthPoints: 14475,
        resetHP: 14475,
        attackPower: 91310,
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


    ],
    attackAudio: [
        "assets/audio/burning_fire.mp3",
        "assets/audio/groundhit2.mp3",
        "assets/audio/groundhit3.mp3",
        "assets/audio/hard_punch.mp3",
        "assets/audio/mediumkick.mp3",
        "assets/audio/mediumpunch.mp3",
        // "assets/audio/meleemisses.mp3",
        "assets/audio/prepunch1.mp3",
        "assets/audio/punch.mp3"
    ],

    defeatSound: new Audio('assets/audio/deathfall.mp3'),
    // gokuSelect: this.characterListArray[0],
    // krillinSelect: this.characterListArray[1],
    // piccoloSelect: this.characterListArray[2],
    // vegetaSelect: this.characterListArray[3],

    // list characters in #character-select
    displayCharacterSelect: function () {

        $("#attack, #yourCharacterP, #defenderP, #available-enemies").hide();
        for (let i = 0; i < this.characterListArray.length; i++) {
            const element = this.characterListArray[i].name;
            // console.log(element);
            var newCharacterDiv = $("<div>");
            newCharacterDiv.addClass("thumbnail d-inline text-center mx-1");
            newCharacterDiv.attr({
                id: this.characterListArray[i].name + "-div",
                value: this.characterListArray[i].name
            });
            $("#character-select").append(newCharacterDiv)
            var newCharacterDivImg = $("<img>");
            newCharacterDivImg.attr("src", "./assets/images/" + this.characterListArray[i].name.toLowerCase() + ".png");
            newCharacterDivImg.addClass("img-fluid character-image border border-danger ");
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
                    $("#Goku-div").detach().prependTo("#your-character");
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
                    $("#Krillin-div").detach().prependTo("#your-character");
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
                    $("#Piccolo-div").detach().prependTo("#your-character");
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
                    $("#Vegeta-div").detach().prependTo("#your-character");
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



                // console.log(dbzObject.characterSelected);
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
                    $("#Goku-div").detach().prependTo("#defender");
                    $(this).detach().appendTo("#Goku-div");
                    $("#Goku-info").detach().appendTo("#Goku-div");
                    dbzObject.enemySelectedValue = "Goku";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image flipped");
                    }
                } else if ($(this).attr("value") === "Krillin") {
                    $("#Krillin-div").detach().prependTo("#defender");
                    $(this).detach().appendTo("#Krillin-div");
                    $("#Krillin-info").detach().appendTo("#Krillin-div");
                    dbzObject.enemySelectedValue = "Krillin";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image flipped");
                    }
                } else if ($(this).attr("value") === "Piccolo") {
                    $("#Piccolo-div").detach().prependTo("#defender");
                    $(this).detach().appendTo("#Piccolo-div");
                    $("#Piccolo-info").detach().appendTo("#Piccolo-div");
                    dbzObject.enemySelectedValue = "Piccolo";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image flipped");
                    }
                } else if ($(this).attr("value") === "Vegeta") {
                    $("#Vegeta-div").detach().prependTo("#defender");
                    $(this).detach().appendTo("#Vegeta-div");
                    $("#Vegeta-info").detach().appendTo("#Vegeta-div");
                    dbzObject.enemySelectedValue = "Vegeta";
                    $(this).removeClass("character-image enemies-available");
                    if (dbzObject.gameOver === false) {
                        $(this).addClass("defender-character-image flipped");
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
            $("#defenderP, #attack").show();
            $("#available-enemies").hide();
            $("#flavor-text").text("Oh, he's a tough one. Click ATTACK button to fight until someone loses!")
        }

        var theRealBattleFunction = function (playerCharacter, defenderCharacter) {
            playerCharacter.healthPoints = playerCharacter.healthPoints - defenderCharacter.counterAttack;
            if (dbzObject.hasAttacked === true) {
                playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                defenderCharacter.healthPoints = defenderCharacter.healthPoints - playerCharacter.attackPower;
            } else if (dbzObject.hasAttacked === false && dbzObject.hasDefeated === false) {
                defenderCharacter.healthPoints = defenderCharacter.healthPoints - playerCharacter.attackPower;
                dbzObject.hasAttacked = true;
            } else if (dbzObject.hasAttacked === false && dbzObject.hasDefeated === true) {
                playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                defenderCharacter.healthPoints = defenderCharacter.healthPoints - playerCharacter.attackPower;
            } else if (dbzObject.hasAttacked === true && dbzObject.hasDefeated === true) {
                playerCharacter.attackPower = playerCharacter.attackPower + playerCharacter.constAttackPower;
                defenderCharacter.healthPoints = defenderCharacter.healthPoints - playerCharacter.attackPower;
            }
            // console.log(playerCharacter.name + " " + playerCharacter.attackPower + " " + playerCharacter.healthPoints);
            // console.log(defenderCharacter.name + " " + defenderCharacter.attackPower + " " + defenderCharacter.healthPoints);
            // console.log(dbzObject.hasAttacked);
            // console.log(dbzObject.hasDefeated);





            $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + playerCharacter.attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                "<p>" + dbzObject.enemySelectedValue + " dealt " + defenderCharacter.counterAttack + " back to " + dbzObject.characterSelectedValue + "!");
            // $("#" + dbzObject.characterSelectedValue + "-info").text(playerCharacter.name + " " + playerCharacter.healthPoints);
            $("#" + dbzObject.characterSelectedValue + "-info").html("ATK: " + playerCharacter.attackPower + " | <span class='charName'>" + playerCharacter.name + "</span> | " + " " + "HP: " + playerCharacter.healthPoints);
            // $("#" + dbzObject.enemySelectedValue + "-info").text(defenderCharacter.name + " " + defenderCharacter.healthPoints);
            $("#" + dbzObject.enemySelectedValue + "-info").html("ATK: " + defenderCharacter.attackPower + " | <span class='charName'>" + defenderCharacter.name + "</span> | " + " " + "HP: " + defenderCharacter.healthPoints);


            if (defenderCharacter.healthPoints <= 0 && playerCharacter.healthPoints > 0) {
                dbzObject.lastEnemyDefeated = defenderCharacter.name;
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
            $("#attack").hide();
            $("#defender, #your-character").stop();
            if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Krillin") {
                theRealBattleFunction(gokuSelect, krillinSelect);
                dbzObject.animationsAndSound(gokuSelect, krillinSelect);
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Piccolo") {
                theRealBattleFunction(gokuSelect, piccoloSelect);
                dbzObject.animationsAndSound(gokuSelect, piccoloSelect);
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Vegeta") {
                theRealBattleFunction(gokuSelect, vegetaSelect);
                dbzObject.animationsAndSound(gokuSelect, vegetaSelect);
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Goku") {
                theRealBattleFunction(krillinSelect, gokuSelect);
                dbzObject.animationsAndSound(krillinSelect, gokuSelect);
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Piccolo") {
                theRealBattleFunction(krillinSelect, piccoloSelect);
                dbzObject.animationsAndSound(krillinSelect, piccoloSelect);
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Vegeta") {
                theRealBattleFunction(krillinSelect, vegetaSelect);
                dbzObject.animationsAndSound(krillinSelect, vegetaSelect);
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Goku") {
                theRealBattleFunction(piccoloSelect, gokuSelect);
                dbzObject.animationsAndSound(piccoloSelect, gokuSelect);
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Krillin") {
                theRealBattleFunction(piccoloSelect, krillinSelect);
                dbzObject.animationsAndSound(piccoloSelect, krillinSelect);
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Vegeta") {
                theRealBattleFunction(piccoloSelect, vegetaSelect);
                dbzObject.animationsAndSound(piccoloSelect, vegetaSelect);
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Goku") {
                theRealBattleFunction(vegetaSelect, gokuSelect);
                dbzObject.animationsAndSound(vegetaSelect, gokuSelect);
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Krillin") {
                theRealBattleFunction(vegetaSelect, krillinSelect);
                dbzObject.animationsAndSound(vegetaSelect, krillinSelect);
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Piccolo") {
                theRealBattleFunction(vegetaSelect, piccoloSelect);
                dbzObject.animationsAndSound(vegetaSelect, piccoloSelect);
            }
        });
        return;
    },

    animationsAndSound: function (playerCharacter, defenderCharacter) {

        var enemyAnimate = $("#defender");
        var playerAnimate = $("#your-character");
        var selectedAudio = Math.floor((Math.random() * 8));
        var counterAudio = Math.floor((Math.random() * 8));
        // console.log(selectedAudio);
        // console.log("#audio" + selectedAudio)
        var audioSrc = $("#audio" + selectedAudio)[0];
        var audioSrc2 = $("#audio" + counterAudio)[0];
        // audioSrc.setSrc = dbzObject.attackAudio[selectedAudio];
        // console.log(audioSrc);
        // audioSrc.load();




        if (playerCharacter.healthPoints > 0 && defenderCharacter.healthPoints > 0) {

            $(".player-character-image").attr("src", "./assets/images/" + this.characterSelectedValue.toLowerCase() + "Attack.png");
            $(".defender-character-image").attr("src", "./assets/images/" + this.enemySelectedValue.toLowerCase() + "Attack.png");
            playerAnimate.animate({
                left: '+=150px'
            }, 100, 'linear').animate({
                left: '-=150px'
            }, 100, 'linear');

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

            audioSrc.play();

            setTimeout(function () {
                audioSrc2.play();
            }, 1100);
            // audioSrc2.delay(550).play();

            enemyAnimate.delay(550).animate({
                left: '-=150px'
            }, 100, 'linear').animate({
                left: '+=150px'
            }, 100, 'linear');

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

            $("#attack").delay(1700).show(0);

            function changePlayerImage() {
                $(".player-character-image").attr("src", "./assets/images/" + dbzObject.characterSelectedValue.toLowerCase() + ".png");
                if (defenderCharacter.healthPoints > 0) {
                    $(".defender-character-image").attr("src", "./assets/images/" + dbzObject.enemySelectedValue.toLowerCase() + ".png");
                }
                if (dbzObject.gameOver === false) {
                    $("#yourCharacterP").show();
                    $("#defenderP").show();
                }
            }
            setTimeout(changePlayerImage, 1500);

        } else if (defenderCharacter.healthPoints <= 0 && playerCharacter.healthPoints > 0) {
            $(".player-character-image").attr("src", "./assets/images/" + this.characterSelectedValue.toLowerCase() + "Attack.png");
            $(".defender-character-image").attr("src", "./assets/images/" + this.lastEnemyDefeated.toLowerCase() + "Attack.png");

            playerAnimate.animate({
                left: '+=100px'
            }, 50, 'linear').animate({
                left: '-=100px'
            }, 50, 'linear');
            $("#" + defenderCharacter.name + "-div," + " #" + defenderCharacter.name + ", #" + defenderCharacter.name + "-info").delay(100).animate({
                left: '+=50px'
            }, 50, 'linear').animate({
                left: '-=50px'
            }, 50, 'linear').animate({
                left: '+=50px'
            }, 50, 'linear').animate({
                left: '-=50px'
            }, 50, 'linear').animate({
                left: '+=50px'
            }, 50, 'linear').animate({
                left: '-=50px'
            }, 50, 'linear').animate({
                left: '+=50px'
            }, 50, 'linear').animate({
                left: '-=50px'
            }, 50, 'linear').animate({
                left: '+=50px'
            }, 50, 'linear').animate({
                left: '-=50px'
            }, 50, 'linear').fadeOut(600);

            this.defeatSound.play();

            function changePlayerImage() {
                $(".player-character-image").attr("src", "./assets/images/" + dbzObject.characterSelectedValue.toLowerCase() + ".png");
            }
            setTimeout(changePlayerImage, 1500);

            // console.log(defenderCharacter.name);
            // console.log("#" + defenderCharacter.name + "-info");
        }

        return;

    },

    // if defender wins - game over
    // else continue with next enemy
    availableShow: function () {

    },

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
            $("#available-enemies").delay(1200).fadeIn(500);



            dbzObject.enemySelect();
        };
        if (this.characterSelectedValue === "Goku" && this.enemySelectedValue === "Krillin") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, krillinSelect);
        } else if (this.characterSelectedValue === "Goku" && this.enemySelectedValue === "Piccolo") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, piccoloSelect);
        } else if (this.characterSelectedValue === "Goku" && this.enemySelectedValue === "Vegeta") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(gokuSelect, vegetaSelect);
        } else if (this.characterSelectedValue === "Krillin" && this.enemySelectedValue === "Goku") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(krillinSelect, gokuSelect);
        } else if (this.characterSelectedValue === "Krillin" && this.enemySelectedValue === "Piccolo") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(krillinSelect, piccoloSelect);
        } else if (this.characterSelectedValue === "Krillin" && this.enemySelectedValue === "Vegeta") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(krillinSelect, vegetaSelect);
        } else if (this.characterSelectedValue === "Piccolo" && this.enemySelectedValue === "Goku") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(piccoloSelect, gokuSelect);
        } else if (this.characterSelectedValue === "Piccolo" && this.enemySelectedValue === "Krillin") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(piccoloSelect, krillinSelect);
        } else if (this.characterSelectedValue === "Piccolo" && this.enemySelectedValue === "Vegeta") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(piccoloSelect, vegetaSelect);
        } else if (this.characterSelectedValue === "Vegeta" && this.enemySelectedValue === "Goku") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(vegetaSelect, gokuSelect);
        } else if (this.characterSelectedValue === "Vegeta" && this.enemySelectedValue === "Krillin") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
            enemyDefeatedFunction(vegetaSelect, krillinSelect);
        } else if (this.characterSelectedValue === "Vegeta" && this.enemySelectedValue === "Piccolo") {
            // console.log(this.characterSelectedValue, this.enemySelectedValue);
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

        $("#available-enemies, #attack, #your-character, #defenderP, #yourCharacterP").hide();
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
        $("#available-enemies").empty();
        $("#available-enemies, #attack, #defender, #defenderP, #yourCharacterP").hide();
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

            // console.log(dbzObject.characterListArray[0].attackPower, dbzObject.characterListArray[1].attackPower, dbzObject.characterListArray[2].attackPower, dbzObject.characterListArray[3].attackPower)
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

// START
$(document).ready(function () {


    function loadAudioToPage() {
        for (let i = 0; i < dbzObject.attackAudio.length; i++) {
            const element = dbzObject.attackAudio[i];
            // console.log(element);
            var newAudio = $("<audio>");
            newAudio.attr({ src: element, id: "audio" + [i] });
            $("#audioContainer").append(newAudio);

        }
    }
    loadAudioToPage();

    dbzObject.displayCharacterSelect();
    if (dbzObject.characterSelected === false) {
        dbzObject.playerSelectedCharacter();
    };

});
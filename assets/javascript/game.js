
// Create object to hold game
var dbzObject = {

    // setup variables for characters and health, attack etc...
    characterSelected: false,
    characterSelectedValue: "",
    enemySelectedValue: "",
    enemySelected: false,
    hasAttacked: false,
    hasDefeated: false,
    hasLost: false,
    damaged: false,
    gameOver: false,
    characterListArray: [
        {
            name: 'Goku',
            healthPoints: 160,
            currentHP: "",
            attackPower: 12,
            constAttackPower: 12,
        },
        {
            name: 'Krillin',
            healthPoints: 180,
            currentHP: "",
            attackPower: 7,
            constAttackPower: 7,
        },
        {
            name: 'Piccolo',
            healthPoints: 130,
            currentHP: "",
            attackPower: 15,
            constAttackPower: 15,
        },
        {
            name: 'Vegeta',
            healthPoints: 190,
            currentHP: "",
            attackPower: 17,
            constAttackPower: 17,
        },

    ],

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
                $("#Goku-info").detach().appendTo("#Goku-div");
            }
            var moveKrillinEnemy = function () {
                $("#Krillin-div").detach().appendTo("#available-enemies");
                $("#Krillin").detach().appendTo("#Krillin-div");
                $("#Krillin-info").detach().appendTo("#Krillin-div");
            }

            var movePiccoloEnemy = function () {
                $("#Piccolo-div").detach().appendTo("#available-enemies");
                $("#Piccolo").detach().appendTo("#Piccolo-div");
                $("#Piccolo-info").detach().appendTo("#Piccolo-div");
            }

            var moveVegetaEnemy = function () {
                $("#Vegeta-div").detach().appendTo("#available-enemies");
                $("#Vegeta").detach().appendTo("#Vegeta-div");
                $("#Vegeta-info").detach().appendTo("#Vegeta-div");
            }


            $(".character-image").on("click", function () {
                if ($(this).attr("value") === "Goku") {
                    $("#Goku-div").detach().appendTo("#your-character");
                    $(this).detach().appendTo("#Goku-div");
                    $("#Goku-info").detach().appendTo("#Goku-div");
                    $(this).removeClass("character-image");
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
                    dbzObject.characterSelectedValue = "Vegeta";
                    $(".character-image").detach().appendTo("#available-enemies");
                    if (dbzObject.characterSelected === false) {
                        moveGokuEnemy();
                        movePiccoloEnemy();
                        moveKrillinEnemy();
                    }
                }

                dbzObject.characterSelected = true;
                if (dbzObject.enemySelected === false) {
                    dbzObject.enemySelect();
                } else if (dbzObject.enemySelected === true) {
                    return false;
                }



                console.log(dbzObject.characterSelected)
            });
        } else if (this.characterSelected === true) {
            return false;
        }
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
                    // $(".character-image").removeClass("character-image");
                    dbzObject.enemySelectedValue = "Goku";
                } else if ($(this).attr("value") === "Krillin") {
                    $("#Krillin-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Krillin-div");
                    $("#Krillin-info").detach().appendTo("#Krillin-div");
                    // $(".character-image").removeClass("character-image");
                    dbzObject.enemySelectedValue = "Krillin";
                } else if ($(this).attr("value") === "Piccolo") {
                    $("#Piccolo-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Piccolo-div");
                    $("#Piccolo-info").detach().appendTo("#Piccolo-div");
                    // $(".character-image").removeClass("character-image");
                    dbzObject.enemySelectedValue = "Piccolo";
                } else if ($(this).attr("value") === "Vegeta") {
                    $("#Vegeta-div").detach().appendTo("#defender");
                    $(this).detach().appendTo("#Vegeta-div");
                    $("#Vegeta-info").detach().appendTo("#Vegeta-div");
                    // $(".character-image").removeClass("character-image");
                    dbzObject.enemySelectedValue = "Vegeta";
                }

                dbzObject.enemySelected = true;
                dbzObject.battleFunction();

                // console.log("peppers")
            });
        } else if (this.enemySelected === true) {
            dbzObject.TEST();
            return false;
        }
    },

    // when #attack button is clicked factor damage and change variables accordingly
    // NOTE: chosen characters damage goes up by base amount each attack
    // NOTE: enemies damage is constant
    // show damage in #flavor-text
    battleFunction: function () {

        // var testBattleFunction = function (attack1, health1, attack2, health2, constAttack) {
        //         health1 = health1 - attack2;
        //         if (dbzObject.hasAttacked === true) {
        //             attack1 = attack1 + constAttack;
        //             health2 = health2 - attack1;
        //         } else if (dbzObject.hasAttacked === false) {
        //             health2 = health2 - attack1;
        //             dbzObject.hasAttacked = true;
        //         }
        // };


        // gokuAttack = a
        // gokuHealth = b
        // krillinAttack = c
        // krillinHealth = d
        // gokuConstAttack = e

        $(".character-image").off();
        $("#attack").on("click", function () {
            if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Krillin") {
                dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[1].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[0].attackPower = dbzObject.characterListArray[0].attackPower + dbzObject.characterListArray[0].constAttackPower;
                    dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[0].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[0].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>Goku dealt " + dbzObject.characterListArray[0].attackPower + " damage to Krillin!</p>" +
                    "<p>Krillin dealt " + dbzObject.characterListArray[1].attackPower + " back to Goku!");
                $("#Goku-info").text(dbzObject.characterListArray[0].healthPoints);
                $("#Krillin-info").text(dbzObject.characterListArray[1].healthPoints);

                if (dbzObject.characterListArray[1].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Piccolo") {
                dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[2].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[0].attackPower = dbzObject.characterListArray[0].attackPower + dbzObject.characterListArray[2].constAttackPower;
                    dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[0].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[0].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>Goku dealt " + dbzObject.characterListArray[0].attackPower + " damage to Picollo!</p>" +
                    "<p>Picollo dealt " + dbzObject.characterListArray[2].attackPower + " back to Goku!");
                $("#Goku-info").text(dbzObject.characterListArray[0].healthPoints);
                $("#Piccolo-info").text(dbzObject.characterListArray[2].healthPoints);
                if (dbzObject.characterListArray[2].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Vegeta") {
                dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[3].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[0].attackPower = dbzObject.characterListArray[0].attackPower + dbzObject.characterListArray[3].constAttackPower;
                    dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[0].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[0].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[0].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[0].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[3].healthPoints);
                if (dbzObject.characterListArray[3].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Goku") {
                dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[0].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[1].attackPower = dbzObject.characterListArray[1].attackPower + dbzObject.characterListArray[1].constAttackPower;
                    dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[1].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[1].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>Krillin dealt " + dbzObject.characterListArray[1].attackPower + " damage to Goku!</p>" +
                    "<p>Goku dealt " + dbzObject.characterListArray[0].attackPower + " back to Krillin!");
                $("#Krillin-info").text(dbzObject.characterListArray[1].healthPoints);
                $("#Goku-info").text(dbzObject.characterListArray[0].healthPoints);
                if (dbzObject.characterListArray[0].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Piccolo") {
                dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[2].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[1].attackPower = dbzObject.characterListArray[1].attackPower + dbzObject.characterListArray[1].constAttackPower;
                    dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[1].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[1].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[1].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[2].healthPoints);
                if (dbzObject.characterListArray[2].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Krillin" && dbzObject.enemySelectedValue === "Vegeta") {
                dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[3].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[1].attackPower = dbzObject.characterListArray[1].attackPower + dbzObject.characterListArray[1].constAttackPower;
                    dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[1].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[1].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[1].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[3].healthPoints);
                if (dbzObject.characterListArray[3].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Goku") {
                dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[0].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[2].attackPower = dbzObject.characterListArray[2].attackPower + dbzObject.characterListArray[2].constAttackPower;
                    dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[2].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[2].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[0].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[2].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[0].healthPoints);
                if (dbzObject.characterListArray[0].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Krillin") {
                dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[1].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[2].attackPower = dbzObject.characterListArray[2].attackPower + dbzObject.characterListArray[2].constAttackPower;
                    dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[2].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[2].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[2].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[1].healthPoints);
                if (dbzObject.characterListArray[1].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Piccolo" && dbzObject.enemySelectedValue === "Vegeta") {
                dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[3].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[2].attackPower = dbzObject.characterListArray[2].attackPower + dbzObject.characterListArray[2].constAttackPower;
                    dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[2].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[2].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[2].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[3].healthPoints);
                if (dbzObject.characterListArray[3].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Goku") {
                dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[0].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[3].attackPower = dbzObject.characterListArray[3].attackPower + dbzObject.characterListArray[3].constAttackPower;
                    dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[3].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[3].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[0].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[3].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[0].healthPoints);
                if (dbzObject.characterListArray[0].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Krillin") {
                dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[1].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[3].attackPower = dbzObject.characterListArray[3].attackPower + dbzObject.characterListArray[3].constAttackPower;
                    dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[3].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[1].healthPoints = dbzObject.characterListArray[1].healthPoints - dbzObject.characterListArray[3].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[1].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[3].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[1].healthPoints);
                if (dbzObject.characterListArray[1].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            } else if (dbzObject.characterSelectedValue === "Vegeta" && dbzObject.enemySelectedValue === "Piccolo") {
                dbzObject.characterListArray[3].healthPoints = dbzObject.characterListArray[3].healthPoints - dbzObject.characterListArray[2].attackPower;
                if (dbzObject.hasAttacked === true) {
                    dbzObject.characterListArray[3].attackPower = dbzObject.characterListArray[3].attackPower + dbzObject.characterListArray[3].constAttackPower;
                    dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[3].attackPower;
                } else if (dbzObject.hasAttacked === false) {
                    dbzObject.characterListArray[2].healthPoints = dbzObject.characterListArray[2].healthPoints - dbzObject.characterListArray[3].attackPower;
                    dbzObject.hasAttacked = true;
                }
                $("#flavor-text").html("<p>" + dbzObject.characterSelectedValue + " dealt " + dbzObject.characterListArray[3].attackPower + " damage to " + dbzObject.enemySelectedValue + "</p>" +
                    "<p>" + dbzObject.enemySelectedValue + " dealt " + dbzObject.characterListArray[2].attackPower + " back to " + dbzObject.characterSelectedValue + "!");
                $("#"+dbzObject.characterSelectedValue+"-info").text(dbzObject.characterListArray[3].healthPoints);
                $("#"+dbzObject.enemySelectedValue+"-info").text(dbzObject.characterListArray[2].healthPoints);
                if (dbzObject.characterListArray[2].healthPoints <= 0) {
                    dbzObject.enemyDefeated();
                }
            }
        }); //0 1 2 3
    },
    // if defender wins - game over
    // else continue with next enemy
    enemyDefeated: function () {
    // when defender loses remove them
        $("#" + this.enemySelectedValue + "-div").remove();
    // show that the enemy is defeated in #flavor-text and to choose another enemy
        $("#flavor-text").html("<p>You have defeated " + this.enemySelectedValue + "! Choose another enemy to continue!</p>")
        dbzObject.enemySelectedValue = "";
        dbzObject.enemySelected = false;
        dbzObject.enemySelect();
        if (dbzObject.characterListArray[0].healthPoints > 0 && dbzObject.characterListArray[1].healthPoints <= 0 && dbzObject.characterListArray[2].healthPoints <= 0 && dbzObject.characterListArray[3].healthPoints  <= 0){

            dbzObject.youWin();
        // } else if (){
        }
    },
    youWin: function() {
        $("#available-enemies").hide();
        $("#defender").hide();
        $("#attack").hide();
        $("#flavor-text").html("<h1>YOU WIN! " + dbzObject.characterSelectedValue.toUpperCase() + " IS THE GREATEST FIGHTER IN THE UNIVERSE");
        $("#"+dbzObject.characterSelectedValue).removeClass("col-3").addClass("huge-img");
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

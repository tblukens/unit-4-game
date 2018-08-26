
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
            attackPower: 10,
        },
        {
            name: 'Krillin',
            healthPoints: 180,
            attackPower: 7,
        },
        {
            name: 'Piccolo',
            healthPoints: 130,
            attackPower: 15,
        },
        {
            name: 'Vegeta',
            healthPoints: 180,
            attackPower: 15,
        },

    ],

    // list characters in #character-select
    displayCharacterSelect: function () {

        // this.characterListArray.forEach(function(){
        //     var newCharacterDivImg = $("<img>");
        // newCharacterDivImg.attr("src", "./assets/images/" + this.characterListArray.name + ".png");
        // newCharacterDivImg.class("col-2 character-image");
        //     $("#character-select").append(newCharacterDivImg);
        //     console.log(dbzObject.characterListArray[name]);

        // })

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
                    dbzObject.enemySelect1();
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
    enemySelect1: function () {
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
    TEST: function () {
        this.enemySelected = true;
        if (dbzObject.enemySelected === true) {
            $(".character-image").on("click", function(){
                return false;
            });

        }
    },

    // when #attack button is clicked factor damage and change variables accordingly
    // NOTE: chosen characters damage goes up by base amount each attack
    // NOTE: enemies damage is constant
    // show damage in #flavor-text
    battleFunction: function () {
        $(".character-image").off();
        $("#attack").on("click", function(){
            if (dbzObject.characterSelectedValue === "Goku" && dbzObject.enemySelectedValue === "Krillin") {
                dbzObject.characterListArray[0].healthPoints = dbzObject.characterListArray[0].healthPoints - dbzObject.characterListArray[1].attackPower;
                console.log(dbzObject.characterListArray[0].healthPoints);
                
            }
        });
    }



    // if defender wins - game over
    // else continue with next enemy

    // when defender loses remove them

    // show that the enemy is defeated in #flavor-text and to choose another enemy

    // when all enemies are defeated show that the player has won and game is over
    // then show restart button in #flavor-text

};



dbzObject.displayCharacterSelect();
if (dbzObject.characterSelected === false) {
    dbzObject.playerSelectedCharacter();
}

if (dbzObject.characterSelected === true && dbzObject.enemySelected === false) {
    console.log("peppers");
}

$(document).ready(function () {

    // dbzObject.displayCharacterSelect();
    // for (let i = 0; i < dbzObject.characterListArray.length; i++) {
    //     var newCharacterDivImg = $("<div>");
    //     newCharacterDivImg.addClass("character-image");
    //     newCharacterDivImg.setAttribute("src", "./assets/images/" + i + ".png");
    //     $("#character-select").append(newCharacterDivImg);

    // }

});

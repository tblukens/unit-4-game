
// Create object to hold game
var dbzObject = {

    // setup variables for characters and health, attack etc...
    characterSelected: false,
    enemySelected: false,
    hasAttacked: false,
    hasDefeated: false,
    hasLost: false,
    damaged: false,
    gameOver: false,
    characterListArray: [
        {
            name: 'Goku',
            characterImage: './assets/images/goku.png',
            healthPoints: 160,
            attackPower: 10,
        },
        {
            name: 'Krillin',
            characterImage: './assets/images/Krillin.png',
            healthPoints: 180,
            attackPower: 7,
        },
        {
            name: 'Piccolo',
            characterImage: './assets/images/piccolo.png',
            healthPoints: 130,
            attackPower: 15,
        },
        {
            name: 'Vegeta',
            characterImage: './assets/images/vegeta.png',
            healthPoints: 180,
            attackPower: 15,
        },

    ],

    // list characters in #character-select
    displayCharacterSelect: function () {

        // this.characterListArray.forEach(function(){
        //     var newCharacterDiv = $("<img>");
            // newCharacterDiv.attr("src", "./assets/images/" + this.characterListArray.name + ".png");
            // newCharacterDiv.class("col-2 character-image");
        //     $("#character-select").append(newCharacterDiv);
        //     console.log(dbzObject.characterListArray[name]);
            
        // })

        for (let i = 0; i < this.characterListArray.length; i++) {
            const element = this.characterListArray[i].name;
            console.log(element);
            var newCharacterDiv = $("<img>");
            newCharacterDiv.attr("src", "./assets/images/" + this.characterListArray[i].name.toLowerCase() + ".png");
            newCharacterDiv.addClass("col-3 character-image border border-danger ");
            newCharacterDiv.attr("value", this.characterListArray[i].name)
            $("#character-select").append(newCharacterDiv);
            
        }

    },
    
    // when a character is selected move selected character to "#your-character"
    playerSelectedCharacter: function(){
        
    }

    // also move enemies available to "#available-enemies"

    // when an enemy is selected move selection to "#defender"

    // when #attack button is clicked factor damage and change variables accordingly
    // NOTE: chosen characters damage goes up by base amount each attack
    // NOTE: enemies damage is constant
    // show damage in #flavor-text

    // if defender wins - game over
    // else continue with next enemy

    // when defender loses remove them

    // show that the enemy is defeated in #flavor-text and to choose another enemy

    // when all enemies are defeated show that the player has won and game is over
    // then show restart button in #flavor-text

};



dbzObject.displayCharacterSelect();

$(document).ready(function () {

    // dbzObject.displayCharacterSelect();
    // for (let i = 0; i < dbzObject.characterListArray.length; i++) {
    //     var newCharacterDiv = $("<div>");
    //     newCharacterDiv.addClass("character-image");
    //     newCharacterDiv.setAttribute("src", "./assets/images/" + i + ".png");
    //     $("#character-select").append(newCharacterDiv);

    // }

});

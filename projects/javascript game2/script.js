let xp = 0;
let health = 300;
let parts = 150;
let currentWeapon = 0;

let fighting;
let enemyHealth;


let inventory = ["Photon Blaster"];
let hasPrayed = false;


const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const partText = document.querySelector("#partText");
const enemyStats = document.querySelector("#enemyStats");
const enemyName = document.querySelector("#enemyName");
const enemyHealthText = document.querySelector("#enemyHealth");

const weapons = [
    {
        name : "Photon Blaster",
        power : 15
    },
    {
        name : "Ionized Railgun",
        power : 90
    },
    {
        name : "Nebula Cannon",
        power : 125 
    },
    {
        name : "Quantum Disruptor",
        power : 150 
    },
    {
        name : "Stellar Saber",
        power : 300
    },
    {
        name : "Singularity Slicer",
        power : 450
    },
    {
        name : "Galactic Annihilator",
        power : 600
    }

];

const enemies = [
    {
        name : "Lunar Bat Swarms",
        level : 10,
        health : 40,
        "image place": ["img/merchant.jpg"]
    },
    {
        name : "Lunar Lycanthropes",
        level : 20,
        health : 45
    },
    {
        name : "Lunar Sirens",
        level : 24,
        health : 50
    },
    {
        name : "Galactic Serpents",
        level : 60,
        health : 250
    },
    {
        name : "Celestial Drakes",
        level : 70,
        health : 350
    },
    {
        name : "Starfire Wyverns",
        level : 85,
        health : 500
    },

    {
        name : "Infernal Guardian",
        level : 100,
        health : 700
    },

    {
        name : "Demon Overlord",
        level : 150,
        health : 1000
    }
];

const locations = [
    {
        name: "earth",
        "image place": ["img/merchant.jpg", "img/moon.jpg", "img/cosdragon.jpg", "img/castle.jpg"],
        "button text": ["Teleport to store", "Teleport to moon","Teleport to Cosmic Dragon", "Teleport to Demon's castle"],
        "button functions" : [goStore, goMoon, goDragon, goCastle],
        text : "You are on earth. What will be your next destination Space-explorer"
    },

    {
        name: "store",
        "image place": ["img/potion.jpg", "img/gun.jpg", "img/merchant.jpg", "img/earth.jpg"],
        "button text" : ["Buy 50 health (50 parts)", "Buy weapon (100 parts)", "Talk to the store owner", "Go to Earth", ], 
        "button functions" : [buyHealth, buyWeapon, talk, goEarth, ],
        text : "You enter the store, a big, hooded figure is watching you from behind the counter."
      },

    {
        name: "moon",
        "image place": [],
        "button text" : ["Fight Lunar Bat Swarm", "Fight Lunar Lycanthrope", "Fight Lunar Siren", "Go to earth"],
        "button functions": [fightBat, fightLycan, fightSiren, goEarth],
        text: "You teleport to the moon's desolate surface. The lunar landscape is bathed in an eerie, soft glow, with vast plains stretching into the distance, you notice the remnants of an ancient lunar civilization, now reduced to mysterious ruins that echo with the whispers of the cosmos."
    },

    {
        name: "dragons",
        "image place": [],
        "button text" : ["Fight Galactic Serpent", "Fight Celestial Drake", "Fight Starfire Wyvern", "Go to earth"],
        "button functions": [fightSerpent, fightDrake, fightWyvern, goEarth],
        text: "You teleport to the Dragon Planet, a celestial realm where colossal serpentine creatures soar through crimson skies. The air is charged with a mystical energy, and the landscape is adorned with majestic spires that resemble dragon scales. Fire-breathing drakes circle above, and the ground trembles with the might of these ancient beings."
    },

    {
        name: "demon castle",
        "image place": [],
        "button text" : ["Pray to the sun", "Fight the infernal guardian", "Fight the demon overlord", "Go to earth"],
        "button functions": [pray, fightGuardian, fightDemon, goEarth],
        text: "You materialize before the imposing gates of the Demon Castle, a sinister structure suspended in the Abyss of space. Ominous clouds swirl around the towering fortress, casting an eerie shadow against the cosmic void. Grotesque gargoyles, carved with extraterrestrial malevolence, leer from the spires, their stony eyes hinting at the celestial horrors within. As the gate creaks open, revealing a blood-red glow, you enter a foreboding courtyard where fiendish entities patrol under the alien sky"
    },

    {
        name : "fight",
        "image place": [],
        "button text" : ["Attack", "Dodge", "Block", "Run"],
        "button functions" : [attack, dodge, block, goEarth],
        text : "You are fighting in battle"
    },
    {
        name : "kill monster",
        "image place": [],
        "button text" : ["Teleport to earth", "Teleport to earth", "Teleport to earth", "Teleport to earth"],
        "button functions" : [goEarth, goEarth, easterEgg, goEarth],
         text : 'You have defeated the enemy. Prepare for the next cosmic challenge on your journey through the vast reaches of the galaxy.'
    },
    {
        name : "lose",
        "image place": [],
        "button text" : ["REPLAY?", "REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions" : [restart, restart, restart, restart],
        text : "You die. ☠️"
    },
    {
        name: "win",
        "image place": [],
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart, restart],
        text: "With a final, cataclysmic burst of energy, the Demon's Abyss trembles. The galaxies echo your valor, Captain, as you stand victorious"
      },
      {
        name : "easter egg",
        "image place": [],
        "button text" : ["2", "8", "Go to earth?", "Go to town earth?"],
        "button functions" : [pickTwo, pickEight, goEarth, goEarth],
        text : "You find a secret game. Pick a number above.Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
      },
    ];

    button1.onclick = goStore;
    button2.onclick = goMoon;
    button3.onclick = goDragon;
    button4.onclick = goCastle;


    function update(location){
        //here we change the button text to fit the location 
        enemyStats.style.display = "none";
        img1.src = location["image place"][0];
        img2.src = location["image place"][1]
        img3.src = location["image place"][2]
        img4.src = location["image place"][3]
        button1.innerText = location["button text"][0];
        button2.innerText = location["button text"][1]
        button3.innerText = location["button text"][2]
        button4.innerText = location["button text"][3]
        button1.onclick = location["button functions"][0];
        button2.onclick = location["button functions"][1];
        button3.onclick = location["button functions"][2];
        button4.onclick = location["button functions"][3];
        text.innerText = location.text;
    }

    function goEarth(){
        update(locations[0]);
        showAll();
    }

    function goStore() {
        update(locations[1]);
        showAll();
    }
    
    function goMoon() {
        update(locations[2]);
        showAll();
    }

    function goDragon() {
        update(locations[3]);
        showAll();
    }

    function goCastle() {
        update(locations[4]);
        showAll();
    }

    function buyHealth(){
        console.log("buyHealth function called");
        if (!partText || !healthText) {
            console.error("Error: partText or healthText is null or undefined.");
            return;
        }
        if(parts >= 50) {
            parts -= 50;
            health += 30;
            partText.innerText = parts;
            healthText.innerText = health;
        }
        else{
            text.innerText = "You do not have enough parths to buy health."
        }
    
    
    }

    function buyWeapon(){                                             
        if (currentWeapon < weapons.length - 1){
            if(parts >= 80) {
                parts -= 80; 
                //compound way
                // currentWeapon += 1; 
                currentWeapon ++;
                partText.innerText = parts;
                let newWeapon = weapons[currentWeapon].name;
                text.innerText = "You now have a " + newWeapon + ".";
                inventory.push(newWeapon);
                text.innerText += " In your inverntory you have: " + inventory;
            }
            else{
                text.innerText = "You do not have enough parts to purchase this weapon";
            }
        }
        else {
            text.innerText = "You already have the most powerful weapon!"
            button2.innerText = "Sell weapon for 50 gold";
            button2.onclick = sellWeapon;
        }
    
    }

    function sellWeapon(){
        if(inventory.length > 1){
            partText.innerText = parts;
            parts += 50;
            let currentWeapon = inventory.shift();
            text.innerText = "You sold a " + currentWeapon + ".";
            text.innerText += " In your inventory you have: " + inventory;
        }
        else {
            text.innerText = "Don't sell your only weapon";
        }
    }

    function talk(){
        text.innerText = "Curious about the goods, you ask the man. Instead of words, a rattling sound attempts to imitate speech, creating an enigmatic communication.";
    }
    

    function fightBat(){
        fighting = 0;
        goFight();
        hide();
    }
    
    function fightLycan(){
        fighting = 1;
        goFight();
        hide();
    }
    
    function fightSiren(){
        fighting = 2;
        goFight();
        hide();
    }

    function fightSerpent(){
        fighting = 3;
        goFight();
        hide();
    }

    function fightDrake(){
        fighting = 4;
        goFight();
        hide();
    }
    
    function fightWyvern(){
        fighting = 5;
        goFight();
        hide();
    }
    
    function fightGuardian(){
        fighting = 6;
        goFight();
        hide();
    }

    function fightDemon(){
        fighting = 7;
        goFight();
        hide();
    }

    function goFight(){
        update(locations[5]);
        enemyHealth = enemies[fighting].health;
        enemyStats.style.display = "block";
        enemyName.innerText = enemies[fighting].name;
        enemyHealthText.innerText = enemyHealth;
        
    }

    function attack(){
        text.innerText = "The " + enemies[fighting].name + " attacks.";
        text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
        // health -= monsters[fighting].level;
        health -= getEnemyAttackValue(enemies[fighting].level);
        if(isEnemyHit()){
          enemyHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;  
        }
        else{
            text.innerText += " You miss."
        }
        healthText.innerText = health;
        enemyHealthText.innerText = enemyHealth;
        if (health <= 0 ){
            lose();
        }
        else if (enemyHealth <= 0) {
            fighting === 7 ? winGame() : defeatEnemy();
        }
        if(Math.random() <= .1 && inventory.length !== 1) {
            text.innerText += " Your " + inventory.pop() + " breaks.";
            currentWeapon--;    
        }
    }

    function dodge(){
        text.innerText = "You dodge the attack from the " + enemies[fighting].name + ".";
    }

    function block(){
        text.innerText = "You block the attack from the " + enemies[fighting].name + ".";
    }

    function pray(){
      if(!hasPrayed){
        text.innerText = "With unwavering faith, you extend your arms toward the sun. A cosmic resonance fills the void, and a celestial voice, both omnipresent and distant, echoes, 'You have been blessed with enhanced strength and vitality.'";
        health += 60
        healthText.innerText = health;
        hasPrayed = true;
        }   else{
            text.innerText = "You've already prayed to the sun and received its blessing. The divine energy lingers, but further prayers go unanswered."
        }
    }   
    
    function defeatEnemy(){
        parts += Math.floor (enemies[fighting].level * 6.7);
        xp += enemies[fighting].level;
        partText.innerText = parts;
        xpText.innerText = xp;
        update(locations[6]);
    }

    function lose(){
        update(locations[7]);
    }
    
    function restart(){
        xp = 0;
        health = 300;
        parts = 150;
        currentWeapon = 0;
        inventory = ["Photon Blaster"];
        partText.innerText = parts;
        healthText.innerText = health;
        xpText.innerText = xp;
        goEarth();  
    }
    
    function winGame(){
        update(locations[8]);
    }
    
    function getEnemyAttackValue(level){
        const hit = (level * 5) - (Math.floor(Math.random() * xp));
        console.log(hit);
        return hit > 0 ? hit : 0;
    }
    
    function isEnemyHit() {
        return Math.random() > 0.2 || health < 50;
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeapon --;
      }
    
    function easterEgg(){
        update(locations[9]);
    }
    
    function pickTwo(){
        pick(2);
    }
    
    function pickEight(){
        pick(8);
    }
    
    function pick(guess) {
        const numbers = [];
        while (numbers.length < 10) {
          numbers.push(Math.floor(Math.random() * 11));
        }
            text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
        for (let i = 0; i < 10; i++) {
            text.innerText += numbers[i] + "\n"
        }
        if(numbers.includes(guess)){
           text.innerText = "Right! You win 35 parts!"
           parts += 35;
           partText.innerText = parts; 
        }
        else {
            text.innerText += "Wrong! You lose 25 health!";
            health -= 25;
            healthText.innerText = health;
            if(health <= 0){
                lose();
              }
        }
      }

      function hide() {
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';
      }

      function showAll() {
        img2.style.display = 'inline'; 
        img3.style.display = 'inline';
        img4.style.display = 'inline';
    }
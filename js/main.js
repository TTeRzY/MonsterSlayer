let app = new Vue({ // Create New Vue Instance
  el: '#app',
  data() {
    return {
      gameIsRunning: false,
      monsterHealth: 100,
      playerHealth: 100,
      monsterHit: 0,
      playerHit: 0,
      attackHistory: [],
      monsterDamage: 0,
      playerDamage: 0
    }
  },
  methods: {
    attack: function () {
      this.monsterHealth -= this.getDamage(3, 15);
      if (this.checkForWinner()) {
        return;
      }

      this.monsterAttack();

      this.attackHistory.push("MONSTERS HIT PLAYERS FOR " + (this.monsterHit = (startPlayerHealth - this.playerDamage)));
      this.attackHistory.push("PLAYER HIT MONSTER FOR " + (this.playerHit = (startMonsterHealth - this.monsterDamage)));
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      }else {
        this.playerHealth = 100;
      }
      this.monsterAttack();
    },
    giveUp: function () {
      if (confirm('Monster Win')) {
        this.gameIsRunning = false;
        this.attackHistory = [];
        this.monsterHealth = 100;
        this.playerHealth = 100;
      }
    },
    startGame: function () {
      this.attackHistory = [];
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.gameIsRunning = true;
    },
    specialAttack: function () {
      this.monsterHealth -= this.getDamage(10, 20);
      if (this.checkForWinner()) {
        return;
      }

      this.monsterAttack();
      this.attackHistory.push("MONSTERS HIT PLAYERS WITH SPECIAL ATTACK FOR " + (this.monsterHit = (startPlayerHealth - this.playerDamage)));
      this.attackHistory.push("PLAYER HIT MONSTER WITH SPECIAL ATTACK FOR " + (this.playerHit = (startMonsterHealth - this.monsterDamage)));
    },
    getDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkForWinner: function () {
      if (this.monsterHealth <= 0) {
        if(confirm('You won! New Game?')) {
          this.startGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }else if (this.playerHealth <= 0){
        if(confirm('You lost! New Game?')) {
          this.startGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    monsterAttack: function () {
      this.playerHealth -= this.getDamage(5, 17);
      this.checkForWinner();
    }
  }
});
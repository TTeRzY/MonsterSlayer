let app = new Vue({ // Create New Vue Instance
  el: '#app',
  data() {
    return {
      gameIsRunning: false,
      monsterHealth: 100,
      playerHealth: 100,
      attackHistory: [],
    }
  },
  methods: {
    attack: function () {
      let damage = this.getDamage(3, 15);
      this.monsterHealth -= damage;
      this.attackHistory.unshift({
        isPlayer: true,
        message: 'Player hits Monster for ' + damage
      });
      if (this.checkForWinner()) {
        return;
      }

      this.monsterAttack();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      }else {
        this.playerHealth = 100;
      }
      this.attackHistory.unshift({
        isPlayer: true,
        message: 'Player heals for 10 '
      });
      this.monsterAttack();
    },
    giveUp: function () {
      if (confirm('Monster Win')) {
        this.gameIsRunning = false;
      }
    },
    startGame: function () {
      this.attackHistory = [];
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.gameIsRunning = true;
    },
    specialAttack: function () {
      let damage = this.getDamage(10, 20);
      this.monsterHealth -= damage;
      this.attackHistory.unshift({
        isPlayer: true,
        message: 'Player hits Monster with special attack for ' + damage
      });
      if (this.checkForWinner()) {
        return;
      }

      this.monsterAttack();
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
      let damage =  this.getDamage(5, 17);
      this.playerHealth -= damage;
      this.attackHistory.unshift({
        isPlayer: false,
        message: 'Monster hits player for ' + damage
      });
      this.checkForWinner();
    }
  }
});
let app = new Vue({
    el: '#app',
    data() {
        return {
            show: false,
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
            let startMonsterHealth = this.monsterHealth
            let startPlayerHealth = this.playerHealth
            this.monsterDamage = this.monsterHealth -= (Math.floor(Math.random() * 20) + 1)
            this.playerDamage = this.playerHealth -= (Math.floor(Math.random() * 20) + 1)
            this.attackHistory.push("MONSTERS HIT PLAYERS FOR " + (this.monsterHit = (startPlayerHealth - this.playerDamage)))
            this.attackHistory.push("PLAYER HIT MONSTER FOR " + (this.playerHit = (startMonsterHealth - this.monsterDamage)))
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0
                alert("Player Win")
            }
            else if (this.playerHealth <= 0) {
                this.playerHealth = 0
                alert("Monster Win")
            }
        },
        heal: function () {
            let randHealGenerator = Math.floor(Math.random() * 10) + 1
            if (randHealGenerator + this.playerHealth <= 100) {
                this.playerHealth += randHealGenerator
            }
            else{
                alert("Player can't heal up anymore")
            }
        },
        giveUp: function () {
            if (confirm('Monster Win')){
                this.show = false
                this.attackHistory = []
                this.monsterHealth = 100
                this.playerHealth= 100
            }
        },
        startGame: function () {
            this.attackHistory = []
            this.monsterHealth = 100
            this.playerHealth = 100
        },
        specialAttack: function () {
            let startMonsterHealth = this.monsterHealth
            let startPlayerHealth = this.playerHealth
            this.monsterDamage = this.monsterHealth -= (Math.floor(Math.random() * 16)) + 1
            this.playerDamage = this.playerHealth -= (Math.floor(Math.random() * 16)) + 1
            this.attackHistory.push("MONSTERS HIT PLAYERS WITH SPECIAL ATTACK FOR " + (this.monsterHit = (startPlayerHealth - this.playerDamage)))
            this.attackHistory.push("PLAYER HIT MONSTER WITH SPECIAL ATTACK FOR " + (this.playerHit = (startMonsterHealth - this.monsterDamage)))
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0
                alert("Player Win")
            }
            else if (this.playerHealth <= 0) {
                this.playerHealth = 0
                alert("Monster Win")
            }
        }
    }
})
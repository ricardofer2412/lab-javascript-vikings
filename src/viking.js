// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super();
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const outcome = randomSaxon.receiveDamage(
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .strength
    );

    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);

    return outcome;
  }
  saxonAttack() {
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const outcome = randomViking.receiveDamage(
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength
    );

    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);

    return outcome;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length == 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

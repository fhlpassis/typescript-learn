export abstract class Character {
  protected abstract emoji: string;

  constructor(protected name: string, protected attack: number, protected health: number) {}

  makeAttack(character: Character): void {
    this.phrase();
    console.log(`${this.name} is attacking...`);
    character.loseHealth(this.attack);
  }

  loseHealth(attackforce: number): void {
    this.health -= attackforce;
    console.log(`${this.emoji} - ${this.name} now have ${this.health} of health...`);
  }

  abstract phrase(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  phrase(): void {
    console.log(this.emoji + ' Warriooooooors!');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  phrase(): void {
    console.log(this.emoji + ' MOOONNSTEEEERS!');
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 87, 1000);

warrior.makeAttack(monster);
warrior.makeAttack(monster);
warrior.makeAttack(monster);

monster.makeAttack(warrior);

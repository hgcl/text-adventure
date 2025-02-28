/**
 * Game class
 */
export class Game {
  constructor(currScene, props) {
    this.currScene = currScene;
    this.props = props;
  }
  addProp(prop) {
    this.props.push(prop);
  }
}

/**
 * Character class
 */
export class Character {
  constructor(age, score, inventory, wallet) {
    this.age = age;
    this.score = score;
    this.inventory = inventory;
    this.wallet = wallet;
  }
  addPoints(point) {
    this.score += point;
  }
  addItem(item) {
    this.inventory.push(item);
  }
  useMoney(money) {
    this.wallet += money;
  }
}

/**
 * Character class
 */
export class Character {
  constructor(age, points, inventory) {
    this.age = age;
    this.points = points;
    this.inventory = inventory;
  }
  addPoints(point) {
    this.points = this.points + point;
    console.log("Total points: " + this.points);
  }
  addItem(item) {
    this.inventory.push(item);
    console.log("Full inventory: " + JSON.stringify(this.inventory));
  }
}

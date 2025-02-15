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
    this.points += point;
    // alert(`You earned ${point} point(s)!`);
  }
  addItem(item) {
    this.inventory.push(item);
    // alert(`You added ${item.name} to your inventory!`);
  }
}

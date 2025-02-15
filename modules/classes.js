/**
 * Game class
 */
export class Game {
  constructor(scene) {
    this._scene = scene;
  }
  playScene() {
    return this._scene;
  }
}

/**
 * Character class
 */
export class Character {
  constructor(age, points, inventory) {
    this._age = age;
    this._points = points;
    this._inventory = inventory;
  }
  addPoints(point) {
    this._points = this._points + point;
    console.log("Total points: " + this._points);
  }
  addItem(item) {
    this._inventory.push(item);
    console.log("Full inventory :" + JSON.stringify(this._inventory));
  }
}

/**
 * Item class (can be part of the inventory)
 */
export class Item {
  constructor(name, points) {
    this._name = name;
    this._points = points;
  }
}

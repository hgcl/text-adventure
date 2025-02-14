/**
 * Create `Game` class and its methods
 *
 * @param {*} strategy
 */
export class Game {
  constructor(strategy) {
    this.strategy = strategy;
  }
  playScene() {
    return this.strategy();
  }
}

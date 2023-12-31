class Superman {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.directions = [];
  }

  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  chooseCell(char, char1) {
    this.getNewCoordinates();
    let found = [];

    for (let i in this.directions) {
      let x = this.directions[i][0];
      let y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == char) {
          found.push(this.directions[i]);
        }
      }
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == char1) {
          found.push(this.directions[i]);
        }
      }
    }

    return found;
  }

  demine() {
    let emptyCell = this.chooseCell(5);
    let newCell = random(emptyCell);

    if (newCell) {
      this.energy += 7;
      let newX = newCell[0];
      let newY = newCell[1];

      for (let i in supermanArr) {
        if (newX == supermanArr[i].x && newY == supermanArr[i].y) {
          supermanArr.splice(i, 1);
        }
      }

      matrix[newY][newX] = 6;
      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;
    } else {
      this.move();
    }
  }

  move() {
    let emptyCell = this.chooseCell(0, 1);
    let newCell = random(emptyCell);

    if (newCell) {
      let newX = newCell[0];
      let newY = newCell[1];

      matrix[newY][newX] = 6;
      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;

      if (bombArr.length == 0) {
        this.die();
      }
    }
  }

  die() {
    matrix[this.y][this.x] = 0;

    for (let i in supermanArr) {
      if (this.x == supermanArr[i].x && this.y == supermanArr[i].y) {
        supermanArr.splice(i, 4);
      }
    }
  }
}

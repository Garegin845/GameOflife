function matrixGenerator(
  matrixSize,
  grass,
  grassEater,
  superdog,
  predator,
  bomb,
  superman
) {
  var matrix = [];

  for (let i = 0; i < matrixSize; i++) {
    matrix.push([]);
    for (let j = 0; j < matrixSize; j++) {
      matrix[i].push(0);
    }
  }

  for (let i = 0; i < grass; i++) {
    let x = Math.floor(Math.random() * matrixSize);
    let y = Math.floor(Math.random() * matrixSize);
    matrix[y][x] = 1;
  }

  for (let i = 0; i < grassEater; i++) {
    let x = Math.floor(Math.random() * matrixSize);
    let y = Math.floor(Math.random() * matrixSize);
    matrix[y][x] = 2;
  }

  for (let i = 0; i < superdog; i++) {
    let x = Math.floor(Math.random() * matrixSize);
    let y = Math.floor(Math.random() * matrixSize);
    matrix[y][x] = 3;
  }

  for (let i = 0; i < predator; i++) {
    let x = Math.floor(Math.random() * matrixSize);
    let y = Math.floor(Math.random() * matrixSize);
    matrix[y][x] = 4;
  }

  for (let i = 0; i < bomb; i++) {
    let x = Math.floor(Math.random() * matrixSize);
    let y = Math.floor(Math.random() * matrixSize);
    matrix[y][x] = 5;
  }

  for (let i = 0; i < superman; i++) {
    let x = Math.floor(Math.random() * matrixSize);
    let y = Math.floor(Math.random() * matrixSize);
    matrix[y][x] = 6;
  }

  return matrix;
}

let matrix = matrixGenerator(30, 17, 40, 20, 30, 2, 20, 20);
let side = 30;

var grassArr = [];
var grassEaterArr = [];
var superdogArr = [];
var predatorArr = [];
var bombArr = [];
var supermanArr = [];

function setup() {
  frameRate(15);
  createCanvas(matrix[0].length * side, matrix.length * side);
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        let grass = new Grass(x, y);
        grassArr.push(grass);
      } else if (matrix[y][x] == 2) {
        let grEat = new GrassEater(x, y);
        grassEaterArr.push(grEat);
      } else if (matrix[y][x] == 3) {
        let spd = new Superdog(x, y);
        superdogArr.push(spd);
      } else if (matrix[y][x] == 4) {
        let pred = new Predator(x, y);
        predatorArr.push(pred);
      } else if (matrix[y][x] == 5) {
        let bomb = new Bomb(x, y);
        bombArr.push(bomb);
      } else if (matrix[y][x] == 6) {
        let spm = new Superman(x, y);
        supermanArr.push(spm);
      }
    }
  }
}

function draw() {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      var toLot = side - side * 0.2;
      textSize(toLot);
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
        text("☘️", x * side, y * side + toLot);
      } else if (matrix[y][x] == 2) {
        fill("brown");
        rect(x * side, y * side, side, side);
        text("🐄", x * side, y * side + toLot);
      } else if (matrix[y][x] == 3) {
        fill("orange");
        rect(x * side, y * side, side, side);
        text("🐕‍🦺", x * side, y * side + toLot);
      } else if (matrix[y][x] == 4) {
        fill("black");
        rect(x * side, y * side, side, side);
        text("🦕", x * side, y * side + toLot);
      } else if (matrix[y][x] == 5) {
        fill("white");
        rect(x * side, y * side, side, side);
        text("💣", x * side, y * side + toLot);
      } else if (matrix[y][x] == 6) {
        fill("aqua");
        rect(x * side, y * side, side, side);
        text("🦸‍♀️", x * side, y * side + toLot);
      } else {
        fill("#14CD6B");
        rect(x * side, y * side, side, side);
      }
    }
  }

  for (let i in grassArr) {
    grassArr[i].mul();
  }

  for (let i in grassEaterArr) {
    grassEaterArr[i].eat();
  }

  for (let i in superdogArr) {
    superdogArr[i].eat();
  }

  for (let i in predatorArr) {
    predatorArr[i].eat();
  }

  for (let i in supermanArr) {
    supermanArr[i].demine();
  }
}

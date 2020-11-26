/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
class SnakeGame {
       constructor(width, height, food) {
              // this.board = new Array(width).fill(0).map(() => new Array(height).fill(0))
              this.width = width;
              this.height = height;
              this.food = food;

              this.snake = [0, 0]; //row column
              this.tail = [];
              this.score = 0;
       }

       /**
          * Moves the snake.
                 @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
                 @return The game's score after the move. Return -1 if game over. 
                 Game over when snake crosses the screen boundary or bites its body. 
                 * @param {string} direction
                 * @return {number}
                 */

       move(direction) {
              console.log('---start---', this.snake, this.food)
              //diagonal move -- y coordinate
              if (direction === "U" || direction === "u") {
                     this.snake[1] = this.snake[1] + 1;
                     console.log("snake moved U", this.snake)
                     if (this.snake === this.food[0]) {
                            console.log("snake encountered food")
                            this.tail.push(this.snake)
                     }
              }
              if (direction === "D" || direction === "d") {
                     this.snake[1] = this.snake[1] - 1;
                     console.log("snake moved D", this.snake)
              }

              //horizontal move -- x coordinate
              if (direction === "L" || direction === "l") {
                     this.snake[0] = this.snake[0] - 1;
                     console.log("snake moved L", this.snake)
              }
              if (direction === "R" || direction === "r") {
                     this.snake[0] = this.snake[0] + 1;
                     console.log("snake moved R", this.snake)
              }

              //account for tail in move
              // if (this.tail.length) this.tail.pop()
              // for (let i = 0; i < this.tail.length; i++) {
              //        if (this.snake === this.tail[i]) {
              //               this.score === -1;
              //               return this.score
              //        }
              // }


              //check for food
              console.log(this.snake[0] === this.food[0][0])
              if ((this.snake[0] === this.food[0][0]) && (this.snake[1] === this.food[0][1])) {
                     console.log("got food")
                     this.score += 1;
                     this.food.shift()
                     //account for tail
                     this.tail.push(this.snake)
              }

              //check for wall
              if (this.snake[0] === this.height) {
                     console.log('hit wall')
                     this.score = -1
                     return this.score
              }
              if (this.snake[1] === this.width) {
                     console.log('hit wall')
                     this.score = -1
                     return this.score
              }

              console.log("this.snake -->", this.snake)
              console.log("this.food -->", this.food)
              console.log("this.tail -->", this.tail)
              console.log("this.score -->", this.score)

              return this.score
       }
}

let snake = new SnakeGame(2, 2, [[0, 1], [1, 2], [2, 3]])
snake.move('U')
snake.move('D')
snake.move('R')
snake.move('R')
snake.move('R')
// snake.move('N')
// snake.move('S')

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
module.exports = SnakeGame;

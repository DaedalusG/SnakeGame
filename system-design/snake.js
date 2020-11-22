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
              //account for tail
              this.tail.push(this.snake)

              //move
              if (direction === "U") {
                     this.snake[0] -= 1;
              }
              if (direction === "L") {
                     this.snake[1] -= 1;
              }
              if (direction === "R") {
                     this.snake[1] += 1;
              }
              if (direction === "D") {
                     this.snake[0] += 1;
              }

              //account for tail in move
              if (this.tail.length) this.tail.pop()
              for (let i = 0; i < this.tail.length; i++) {
                     if (this.snake === this.tail[i]) {
                            this.score === -1;
                            return this.score
                     }
              }


              //check for food
              if (this.snake === this.food[0]) {
                     this.score += 1;
                     this.food.shift()
              }

              //check for wall
              if (this.snake[0] === this.height) {
                     this.score = -1
                     return this.score
              }
              if (this.snake[1] === this.width) {
                     this.score = -1
                     return this.score
              }

              console.log(this.tail)
              console.log(this.snake)

              return this.score
       }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
module.exports = SnakeGame;

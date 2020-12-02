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
              this.width = width;
              this.height = height;
              this.food = food; //row column

              this.snake = [0, 0]; //row column
              this.tail = [];
              this.past = [];
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
              // console.log('---start---\n', this.snake, 'food ->', this.food)
              switch (direction) {
                     //diagonal move -- this.snake[0] -- row
                     case 'U':
                            this.snake[0] = this.snake[0] - 1;
                            console.log("snake moved U, new position -->", this.snake);
                            break;
                     case 'D':
                            this.snake[0] = this.snake[0] + 1;
                            console.log("snake moved D, new position -->", this.snake);
                            break;
                     //horizontal move -- this.snake[1] -- column
                     case 'L':
                            this.snake[1] = this.snake[1] - 1;
                            console.log("snake moved L, new position -->", this.snake);
                            break;
                     case 'R':
                            this.snake[1] = this.snake[1] + 1;
                            console.log("snake moved R, new position -->", this.snake);
                            break;
              }

              //account for tail moves
              if (this.tail.length === this.past.length) {
                     for (let i = 0; i < this.past.length; i++) {
                            switch (this.past[i]) {
                                   // diagonal past moves -- y
                                   case 'U':
                                          console.log(`tail ${i} moved ${this.past[i]}`)
                                          this.tail[i][0] += 1;
                                          break;
                                   case 'D':
                                          console.log(`tail ${i} moved ${this.past[i]}`)
                                          this.tail[i][0] -= 1;
                                          break;
                                   // horizontail past moves -- x
                                   case 'R':
                                          console.log(`tail ${i} moved ${this.past[i]}`)
                                          this.tail[i][1] += 1;
                                          break;
                                   case 'L':
                                          console.log(`tail ${i} moved ${this.past[i]}`)
                                          this.tail[i][1] -= 1;
                                          break;


                            }
                     }
              }

              //check for tail crash
              if (this.tail.length > 0) {
                     for (let i = 0; i < this.tail.length; i++) {
                            if ((this.tail[i][0] === this.snake[0]) && (this.tail[i][1] === this.snake[1])) {
                                   console.log("Tail Crash!")
                                   this.score = -1
                                   return this.score
                            }
                     }
              }

              //check for food
              if ((this.food.length > 0) && (this.snake[0] === this.food[0][0]) && (this.snake[1] === this.food[0][1])) {
                     console.log("got food")
                     this.score += 1;
                     this.food.shift()
                     //account for tail
                     this.tail.push([this.snake[0], this.snake[1]])
                     this.past.unshift(direction)
              }

              //check for wall
              if ((this.snake[1] > this.width) || (this.snake[1] <= -1)) {
                     console.log('hit wall')
                     this.score = -1
                     return this.score
              }
              if ((this.snake[0] > this.height) || (this.snake[0] <= -1)) {
                     console.log('hit wall')
                     this.score = -1
                     return this.score
              }


              //storing and eliminating past moves
              this.past.unshift(direction)
              this.past.pop()

              console.log("this.food -->", this.food)
              console.log("this.tail -->", this.tail)
              console.log("this.past -->", this.past)
              console.log("this.score -->", this.score)

              return this.score
       }
}

let snake = new SnakeGame(2, 3, [[1, 2], [0, 1]])
snake.move('R')
snake.move('D')
snake.move('R')
snake.move('U')
snake.move('L')
snake.move('U')


/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
module.exports = SnakeGame;

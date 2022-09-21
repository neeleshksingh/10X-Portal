let fs = require("fs");
const { get } = require("http");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------
// Robot Movement -- Classes Practice Problems
// You have recently designed a robot and you are trying to write code to make it move over a 2-D plane. Please initialize your robot to always start at the origin (0,0). Design a class which has 4 methods

// moveUp -- Takes one step along the +ve Y axis.
// moveDown -- Takes one step along the -ve Y axis.
// moveRight -- Takes one step along the +ve X axis.
// moveLeft -- Takes one step along the -ve X axis.

// The directions to move will be provided to you as follows up -- Move up down -- Move down right -- Move right left -- Move left

// Your class should have an instance variable location which contains the present location of your robot. Print the location of your robot after taking m steps.

// Input
// First line contains an integer which specifies how many steps to take which is m followed by m lines each specifying the direction to move. Ex.. up which means take 1 step in up direction.

// Output
// Two lines specifying the final location of the Robot after taking m steps. First line containing an integer which specifies the final X coordinate. Second line containing an integer which specifies the final Y coordinate.

// Example
// Input:

// 5
// up
// down
// right
// right
// left
// Output:

// 1
// 0
// Explanation
// Initial location of the robot is the origin (0,0). First line is 5 which means that we have to take 
// 5 steps in the directions specified soon after. Second line is up so the robot moves one step up going to (0,1). 
// Third line is down so the robot moves one step down going to (0,0). Fourth line is right so the robot moves one step 
// right going to (1,0). Fifth line is right so the robot moves one step right going to (2,0). Sixth line is left so the robot moves one step left going to (1,0).

// The final location of the robot is (1,0) so the output is 1 specifying the X coordinate and the next line is 0 specifying the Y coordinate.


class RobotMovement{
    constructor(){
        this.xCoordinate=0;
        this.yCoordinate=0;
    }
    moveUp(){
        return this.yCoordinate=this.yCoordinate+1;
    }
    moveDown(){
        return this.yCoordinate=this.yCoordinate-1;
    }
    moveRight(){
        return this.xCoordinate=this.xCoordinate+1;
    }
    moveLeft(){
        return this.xCoordinate=this.xCoordinate-1;
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let Num = parseInt(readLine());
let myRobotMove = new RobotMovement();
for (let index = 0; index  < Num; index ++) {
  let currentMovement = readLine();
  if (currentMovement === "up") {
    myRobotMove.moveUp();
  } else if (currentMovement === "down") {
    myRobotMove.moveDown();
  } else if (currentMovement === "left") {
    myRobotMove.moveLeft();
  } else {
    myRobotMove.moveRight();
  }
}
console.log(myRobotMove.xCoordinate);
console.log(myRobotMove.yCoordinate);

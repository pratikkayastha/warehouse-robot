
# warehouse-robot

  

A small implementation for warehouse robot control mechanism, it accepts commands and moves the robot according to the command provided.

  

## Requirements

  

- Node v20.x

- npm or yarn

  

## Installation

  

Please run the following after cloning the git repo.

  

    npm i

  

To run the tests, please run the following

  

    npm run test

  

There is also an example usage of the warehouse-robot in [index.ts](src/index.ts), to run the example, plese run the following

  

    npm run start

  

## Usage

  

An instance of `Warehouse` class can be created by calling the constructor, the constructor accepts width, length of the warehouse and initial location for the robot. The parameter `robot` is optional and defaults to south-west corner of the warehouse (x: 0, y: 0).

  

Example

  

    // Creates a warehouse of size 10x10 and robot at 0,0

    const warehouse = new Warehouse(10, 10)

  

    // Creates a warehouse of size 5x10 and robot at 1,1

    const warehouse = new Warehouse(5, 10, { x: 1, y: 1})

  

`Warehouse` class provides a method `moveRobot` that accepts a string of commands, this paramter is space-seperated string of commands 'N' (North), 'S' (South), 'E' (East), and 'W' (West). The moves are validated after each command and an error is thrown if the move would push robot off the warehouse. This method returns a `RobotCoordinate` which represents the final location of robot.

  

Example

  

    // Create a warehouse of size 10x10 with robot at 0,0

    const warehouse = new Warehouse(10, 10)

  

    // Move the robot to center of warehouse

cont finalLocation: RobotCoordinate = warehouse.moveRobot('N E N E N E N E)

    // finalLocation will be { x: 4, y: 4 }

  

The Warehouse class throws the following error:

  

- Invalid coordinate: thrown when robot tries to move off the warehouse boundaries

- Invalid move command: thrown when move commands is not in valid format, i.e. contains other characters than N,S,W and E.
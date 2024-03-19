import { RobotCoordinate } from './types'

export default class Warehouse {
  private width: number
  private length: number

  private robot: RobotCoordinate

  constructor(
    width: number,
    length: number,
    robot: RobotCoordinate = { x: 0, y: 0 },
  ) {
    this.width = width
    this.length = length

    this.robot = robot
  }

  moveRobot(movesStr: string): RobotCoordinate {
    const moves = movesStr.split(' ')
    const updatedLocation: RobotCoordinate = this.calculateFinalPosition(moves)
    this.validateCoordinate(updatedLocation)

    this.robot = updatedLocation

    return this.robot
  }

  private calculateFinalPosition(moves: string[]): RobotCoordinate {
    const calculatedCoordinate: RobotCoordinate = {
      ...this.robot,
    }
    moves.forEach((move: string) => {
      const moveCommand: RobotCoordinate = this.calculateMoveDirection(move)
      calculatedCoordinate.x = calculatedCoordinate.x + moveCommand.x
      calculatedCoordinate.y = calculatedCoordinate.y + moveCommand.y
    })

    return calculatedCoordinate
  }

  private calculateMoveDirection(move: string): RobotCoordinate {
    switch (move) {
      case 'N':
        return { x: 0, y: 1 }
      case 'W':
        return { x: -1, y: 0 }
      case 'E':
        return { x: 1, y: 0 }
      case 'S':
        return { x: 0, y: -1 }
      default:
        throw new Error(
          'Invalid move command: move commands should ne N, W, E and S.',
        )
    }
  }

  private validateCoordinate(coordinate: RobotCoordinate): void {
    if (
      coordinate.x < 0 ||
      coordinate.x >= this.width ||
      coordinate.y < 0 ||
      coordinate.y >= this.length
    ) {
      throw Error('Invalid coordinate: robot out of bounds!')
    }
  }
}

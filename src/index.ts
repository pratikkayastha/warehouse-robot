import Warehouse from './Warehouse'
import { RobotCoordinate } from './types'

const warehouse: Warehouse = new Warehouse(10, 10)

console.log('Warehouse initilised, robot at { x: 0, y: 0 }')

console.log('Moving robot to center of warehouse...')
const centerCoordinate: RobotCoordinate = warehouse.moveRobot('N E N E N E N E')
console.log('Coordinate of robot: ', centerCoordinate)

console.log('Moving robot to south-west corner of warehouse...')
const southWestCornerCoordinate: RobotCoordinate =
  warehouse.moveRobot('S W S W S W S W')
console.log('Coordinate of robot: ', southWestCornerCoordinate)

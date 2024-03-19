import Warehouse from './Warehouse'

describe('Robot test', () => {
  it('should accept single move command', () => {
    expect(new Warehouse(10, 10).moveRobot('N')).toStrictEqual({ x: 0, y: 1 })
  })

  it('should accept multiple move command', () => {
    expect(new Warehouse(10, 10).moveRobot('N E S W')).toStrictEqual({
      x: 0,
      y: 0,
    })

    expect(new Warehouse(10, 10).moveRobot('N E N E N E N E')).toStrictEqual({
      x: 4,
      y: 4,
    })
  })

  it('should throw error when robot tries to move out of bounds', () => {
    expect(() => new Warehouse(10, 10).moveRobot('S')).toThrow(
      'Invalid coordinate: robot out of bounds!',
    )
    expect(() => new Warehouse(10, 10).moveRobot('W')).toThrow(
      'Invalid coordinate: robot out of bounds!',
    )

    expect(() =>
      new Warehouse(10, 10).moveRobot('N N N N N N N N N N'),
    ).toThrow('Invalid coordinate: robot out of bounds!')
    expect(() =>
      new Warehouse(10, 10).moveRobot('E E E E E E E E E E'),
    ).toThrow('Invalid coordinate: robot out of bounds!')

    expect(() =>
      new Warehouse(10, 10).moveRobot('N E N E N E N E S S S S S'),
    ).toThrow('Invalid coordinate: robot out of bounds!')
    expect(() =>
      new Warehouse(10, 10).moveRobot('N E N E N E N E N N N N N N'),
    ).toThrow('Invalid coordinate: robot out of bounds!')
    expect(() =>
      new Warehouse(10, 10).moveRobot('N E N E N E N E W W W W W'),
    ).toThrow('Invalid coordinate: robot out of bounds!')
    expect(() =>
      new Warehouse(10, 10).moveRobot('N E N E N E N E E E E E E E'),
    ).toThrow('Invalid coordinate: robot out of bounds!')
  })

  it('should throw error when invalid move command is provided', () => {
    expect(() => new Warehouse(10, 10).moveRobot('S ')).toThrow(
      'Invalid move command: move commands should ne N, W, E and S.',
    )
    expect(() => new Warehouse(10, 10).moveRobot('')).toThrow(
      'Invalid move command: move commands should ne N, W, E and S.',
    )
    expect(() => new Warehouse(10, 10).moveRobot('   ')).toThrow(
      'Invalid move command: move commands should ne N, W, E and S.',
    )
    expect(() => new Warehouse(10, 10).moveRobot('UP DOWN')).toThrow(
      'Invalid move command: move commands should ne N, W, E and S.',
    )
  })

  it('should handle multiple subsequent move commands', () => {
    const warehouse = new Warehouse(10, 10)
    expect(warehouse.moveRobot('N E S W')).toStrictEqual({ x: 0, y: 0 })
    expect(warehouse.moveRobot('N E N E N E N E')).toStrictEqual({ x: 4, y: 4 })
  })
})

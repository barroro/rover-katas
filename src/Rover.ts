
export interface Coordinates {
    x: number,
    y: number,
}

export enum Direction {
    Nord
}

export interface Position {
  coordinates: Coordinates,
  direction: Direction
}

export class Rover {
  constructor(private _position: Position) {}

  get position () {
    return this._position
  }

  logs(logs: any) {
    throw new Error("Method not implemented.")
  }
  // TODO: create Command interface and complete the function & test
  execute(commands: Command[]) {
    throw new Error("Method not implemented.")
  }
}

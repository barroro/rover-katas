
export interface Position {
  x: number,
  y: number,
}

export class Rover {
  constructor(private _position: Position) {}

  get position () {
    return this._position
  }
}
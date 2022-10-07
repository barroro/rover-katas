export interface Coordinates {
  x: number;
  y: number;
}

export enum Direction {
  Nord,
  East,
}

export interface Position {
  coordinates: Coordinates;
  direction: Direction;
}

export type Command = "forward" | "backward" | "rotateRight";

export type CommandDictionary = {
  [command in Command]: Function;
};

export class Rover {
  private _logs: string[];
  constructor(private _position: Position) {
    this._logs = [];
  }

  get position() {
    return this._position;
  }

  get logs() {
    return this._logs;
  }

  private commandDictionary: CommandDictionary = {
    backward: () => this.backward(),
    forward: () => this.forward(),
    rotateRight: () => this.rotate(),
  };

  generateLogs(commands: Command[]) {
    const commandLogs: string[] = commands.map(
      (command: string) => `${command} executed`
    );

    this._logs = commandLogs;
  }
  // TODO: create Command interface and complete the function & test
  execute(commands: Command[]) {
    this.generateLogs(commands);
    commands.forEach((command) => this.commandDictionary[command]());
  }

  forward() {
    const currentY = this.position.coordinates.y;
    this._position = {
      ...this._position,
      coordinates: { x: 0, y: currentY + 1 },
    };
  }

  backward() {
    const currentY = this.position.coordinates.y;
    this._position = {
      ...this._position,
      coordinates: { x: 0, y: currentY - 1 },
    };
  }

  rotate() {
    this._position = {
      ...this._position,
      direction: Direction.East
    };
  }
}

import { Command, Direction, Position, Rover } from "./Rover";

describe("Rover", () => {
  const initialPosition: Position = {
    coordinates: { x: 0, y: 0 },
    direction: Direction.Nord,
  };

  it("should return the initial state", () => {
    const rover = new Rover({
      coordinates: { x: 0, y: 0 },
      direction: Direction.Nord,
    });
    const expectedValue: Position = {
      coordinates: { x: 0, y: 0 },
      direction: Direction.Nord,
    };
    expect(rover.position).toEqual(expectedValue);
  });

  it("should receive commands and generate logs", () => {
    const rover = new Rover(initialPosition);
    const commands: Array<Command> = ["forward", "backward", "forward"];
    rover.execute(commands);

    expect(rover.logs).toHaveLength(3);

    const expectedLogs: string[] = [
      "forward executed",
      "backward executed",
      "forward executed",
    ];
    expect(rover.logs).toEqual(expectedLogs);
  });

  it("should move rover fordward one position", () => {
    const rover = new Rover(initialPosition);
    const commands: Array<Command> = ["forward"];
    rover.execute(commands);

    const expectedPosition: Position = {
      coordinates: { x: 0, y: 1 },
      direction: Direction.Nord,
    };
    expect(rover.position).toEqual(expectedPosition);
  });

  it("should move rover backward one position", () => {
    const rover = new Rover(initialPosition);
    const commands: Array<Command> = ["backward"];
    rover.execute(commands);

    const expectedPosition: Position = {
      coordinates: { x: 0, y: -1 },
      direction: Direction.Nord,
    };
    expect(rover.position).toEqual(expectedPosition);
  });

  it("should move rover by commands", () => {
    const rover = new Rover(initialPosition);
    const commands: Array<Command> = ["backward", "forward", "forward"];
    rover.execute(commands);

    const expectedPosition: Position = {
      coordinates: { x: 0, y: 1 },
      direction: Direction.Nord,
    };
    expect(rover.position).toEqual(expectedPosition);
  });
});

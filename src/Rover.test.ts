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

  it("should receive commands", () => {
    const rover = new Rover(initialPosition);
    const commands: Array<Command> = ["left", "right", "up"];
    rover.execute(commands);

    expect(rover.logs).toHaveLength(3);

    const expectedLogs = ["Left executed", "Right executed", "Up executed"];
    expect(rover.logs).toEqual(expectedLogs);
  });

  // it("should");
});

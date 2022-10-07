import { Command, Direction, Position, Rover, Coordinates } from "./Rover";

const givenAPosition = ({
  coordinates = givenACoordinates(),
  direction = Direction.East,
}: Partial<Position> = {}): Position => {
  return {
    coordinates,
    direction
  }
}

const givenACoordinates = ({ 
  x = 0, 
  y = 0 
}: Partial<Coordinates> = {}): Coordinates => {
  return { x, y };
}

type GivenARoverParams = {
  position?: Position
}

const givenARover = ({
  position = givenAPosition()
}: GivenARoverParams = {}): Rover => {
  return new Rover(position)
}

describe("Rover", () => {
  const initialPosition: Position = {
    coordinates: givenACoordinates({ x: 0, y: 0 }),
    direction: Direction.Nord,
  };

  it("should return the initial state", () => {
    const rover = givenARover({
      position: givenAPosition({
        coordinates: givenACoordinates({ x: 0, y: 0 }),
        direction: Direction.Nord,
      })
    })

    const expectedValue: Position = givenAPosition({
      coordinates: givenACoordinates({ x: 0, y: 0 }),
      direction: Direction.Nord,
    });
    expect(rover.position).toEqual(expectedValue);
  });

  it("should receive commands and generate logs", () => {
    const rover = givenARover();
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
    const rover = givenARover({
      position: givenAPosition({
        coordinates: givenACoordinates({ x: 0, y: 0 })
      })
    });
    const commands: Array<Command> = ["forward"];

    rover.execute(commands);

    const expectedCoordinates: Coordinates = { x: 0, y: 1 };
    expect(rover.position.coordinates).toEqual(expectedCoordinates);
  });

  it("should move rover backward one position", () => {
    const rover = givenARover({
      position: givenAPosition({
        coordinates: givenACoordinates({ x: 0, y: 0 })
      })
    });
    const commands: Array<Command> = ["backward"];

    rover.execute(commands);

    const expectedCoordinates: Coordinates = { x: 0, y: -1 };
    expect(rover.position.coordinates).toEqual(expectedCoordinates);
  });

  it("should move rover by commands", () => {
    const rover = givenARover({
      position: givenAPosition({
        coordinates: givenACoordinates({ x: 0, y: 0 })
      })
    });
    const commands: Array<Command> = ["backward", "forward", "forward"];

    rover.execute(commands);

    const expectedCoordinates: Coordinates = { x: 0, y: 1 };
    expect(rover.position.coordinates).toEqual(expectedCoordinates);
  });

  it("should rotate rover right when heading Nord", () => {
    const rover = givenARover({
      position: givenAPosition({
        direction: Direction.Nord
      })
    });
    const commands: Array<Command> = ["rotateRight"];
    
    rover.execute(commands);
    
    expect(rover.position.direction).toBe(Direction.East);
  });
 
});

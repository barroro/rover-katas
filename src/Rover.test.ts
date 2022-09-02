import { Position, Rover } from "./Rover";

describe("Rover", () => {
  it("should return the initial position", () => {
    const rover = new Rover({x: 0, y: 0});
    const expectedValue: Position = {x: 0, y: 0};
    expect(rover.position).toEqual(expectedValue);
  });
});
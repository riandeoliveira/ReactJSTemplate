import { describe, it, expect } from "vitest";
import { objectArrayExtension } from ".";

describe("Object Array Extension", () => {
  it("Should sort an array of objects in ascending order", () => {
    const people = [
      { name: "Carol", age: 25 },
      { name: "alice", age: 9 },
      { name: "Bob", age: 30 },
    ];

    const sortedPeople = [
      { name: "alice", age: 9 },
      { name: "Carol", age: 25 },
      { name: "Bob", age: 30 },
    ];

    expect(objectArrayExtension.sort(people, "age")).toEqual(sortedPeople);
  });

  it("Should sort an array of objects in alphabetical order", () => {
    const people = [
      { name: "Carol", age: 25 },
      { name: "alice", age: 9 },
      { name: "Bob", age: 30 },
    ];

    const sortedPeople = [
      { name: "alice", age: 9 },
      { name: "Bob", age: 30 },
      { name: "Carol", age: 25 },
    ];

    expect(objectArrayExtension.sort(people, "name")).toEqual(sortedPeople);
  });
});

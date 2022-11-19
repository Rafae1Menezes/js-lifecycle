import mocha from "mocha";
const { describe, it } = mocha;
import chai from "chai";
const { expect } = chai;
import Person from "../src/person.js";

describe("Person", () => {
  it("Should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "2 Bike,Car 2000 2020-10-02 2021-12-03"
    );

    const expected = {
      id: "2",
      vehicles: ["Bike", "Car"],
      kmTraveled: "2000",
      from: "2020-10-02",
      to: "2021-12-03",
    };

    expect(person).to.be.deep.equal(expected);
  });

  it("should format values", () => {
    const person = {
      id: "2",
      vehicles: ["Bike", "Car"],
      kmTraveled: "2000",
      from: "2020-10-02",
      to: "2021-03-03",
    };

    const result = new Person(person).formatted("pt-BR");
    console.log(result);

    const expected = {
      id: 2,
      vehicles: "Bike e Car",
      kmTraveled: "2.000 km",
      from: "02 de outubro de 2020",
      to: "03 de março de 2021",
    };

    expect(result).to.be.deep.equal(expected);
  });
});

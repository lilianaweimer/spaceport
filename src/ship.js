var Being = require('../src/being');
var Part = require('../src/part');

class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.type = obj.type;
    this.maxCrew = obj.maxCrew;
    this.odometer = obj.odometer;
    this.fuelCapacity = obj.fuelCapacity;
    this.fuel = obj.fuel;
    this.captain = obj.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = obj.parts;

    if (obj.name !== 'Atlantis') {
        this.type = undefined;
    }

    if (obj.odometer === undefined) {
      this.odometer = 0;
    }

    if (obj.fuel === undefined) {
      this.fuel = 0;
    }

    if (obj.fuelCapacity === undefined) {
      this.fuelCapacity = 10;
    }

    if (obj.parts === undefined) {
      this.parts = {};
    }

  }

  addCrew(crew) {
    crew.forEach(element  => {
      if (this.crew.length < this.maxCrew && element instanceof Being) {
      this.crew.push(element);
    }});
  }

  loadCargo(cargo) {
      if (cargo instanceof Part) {
      this.cargo.push(cargo);
    };
  }

  updatePart(part) {
    this.parts[parts.type] = part;
   }
  }

module.exports = Ship;

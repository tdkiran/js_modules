function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.info = () => {
    return `${this.name} is from ${this.address} and
    ${this.age} years old`;
  };
}
Person.prototype.ageInc = function() {
  this.age = this.age + 1;
};

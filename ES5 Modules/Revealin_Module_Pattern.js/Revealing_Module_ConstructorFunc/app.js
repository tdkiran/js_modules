const kiran = new Person(
  "kiran",
  27,
  "955 w President George Bush Hwy, Richardson"
);
const Babu = new Person("Babu", 47, "955  President George Bush Hwy, Plano");
const output1 = `${kiran.info()}`;
const output2 = `${Babu.info()}`;

document.querySelector("body").append(output1);
document.querySelector("body").append(output2);

kiran.ageInc();
console.log(kiran.age);

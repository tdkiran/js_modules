// Singleton Module Pattern

var greet = (function() {
  function spanish() {
    console.log("hola");
  }
  function english() {
    console.log("Hello");
  }
  return { spanish: spanish, english: english };
})(); // invoke it immidietly to make it singleton.

console.log(greet.spanish());
console.log(greet.english());

// ES6+

const es6greet = (() => {
  const spanish = () => console.log("hola1");

  const english = () => console.log("Hello1");

  return { spanish, english };
})(); // invoke it immidietly to make it singleton.

console.log(es6greet.spanish());
console.log(es6greet.english());

// es classes

class greetClass {
  static spanishGreet() {
    console.log("Hola class");
  }
  static englishGreet() {
    console.log("Hello class");
  }
  spreadLove() {
    console.log("xoxoxox");
  }
  get love() {
    return this.spreadLove();
  }
}
console.clear();
console.log("...............");
console.log(greetClass.englishGreet());
console.log(greetClass.spanishGreet());
let a = new greetClass();
console.log(a.love);

const input1 = domKing.selector("input1");
const input2 = domKing.selector("input2");
const add = domKing.selector("add");
const sub = domKing.selector("sub");

add.addEventListener("click", () => {
  const output = arithmatic.add(input1.value, input2.value);
  domKing.renderer("output", output);
});

sub.addEventListener("click", () => {
  const output = arithmatic.subtract(input1.value, input2.value);
  domKing.renderer("output", output);
});

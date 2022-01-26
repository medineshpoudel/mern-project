const arr = [1, 2, 3, 4, 5, 5];
const newArr = new Set(arr);
console.log(newArr);

// this3 is1 a2 test4
// is1 a2 this3 test4
const string = "this3";
const sortEl = (str) => {
  const splittedItem = str.split(" ");
  splittedItem.sort((a, b) => {});
  const el = splittedItem.pop();
  console.log(el);
  return Number.parseInt(el);
};
sortEl(string);
console.log(typeof sortEl(string));

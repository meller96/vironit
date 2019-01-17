let str = '<div id="test" class="test">Hello, world</div>';
let tagName = "";
let id = "";
function pars(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "<") {
      i++;
      while (str[i] !== " ") {
        tagName += str[i];
        i++;
      }
      i++;
      while (str[i] !== " ") {
        id += str[i];
        i++;
      }
    }
    return tagName, id;
  }
}
pars(str);
console.log(tagName, id);

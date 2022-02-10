import _ from "lodash";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack1"], " ");

  return element;
}
setTimeout(() => {
  console.log(1);
});

document.body.appendChild(component());

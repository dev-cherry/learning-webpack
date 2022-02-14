import "./styles/index.css";

// import "./test.ts";
// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(1);
//     resolve();
//   });
// }).then(() => {
//   console.log(2);
// });
// a();
// async function a() {
//   setTimeout(() => {
//     console.log(1);
//   });
//   const res = await b();
//   console.log(res);
//   console.log(3);
// }

// async function b() {
//   console.log(21);
//   return 2;
// }

// import index1 from "./styles/index.css";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello webpack";
  element.setAttribute("class", "div1");
  return element;
}

document.body.appendChild(component());

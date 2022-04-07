let _0 = document.getElementById("btn0");
let _1 = document.getElementById("btn1");
let res = document.getElementById("res");
let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");
let btnSum = document.getElementById("btnSum");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");

let regxp = /[+*/-]/;

_0.addEventListener("click", () => {
  res.innerText += 0;
});
_1.addEventListener("click", () => {
  res.innerText += 1;
});

btnClr.addEventListener("click", () => {
  res.innerText = "";
});

btnSum.addEventListener("click", () => {
  if (res.innerText.includes("+")) return;
  res.innerText += "+";
});

btnSum.addEventListener("click", () => {
  if (res.innerText.includes("-")) return;
  res.innerText += "-";
});

btnMul.addEventListener("click", () => {
  if (res.innerText.includes("*")) return;
  res.innerText += "*";
});

btnDiv.addEventListener("click", () => {
  if (res.innerText.includes("/")) return;
  res.innerText += "/";
});

btnEql.addEventListener("click", () => {
  let num1 = res.innerText.split(regxp);
  if (res.innerText.includes("+")) {
    let result = parseInt(num1[0], 2) + parseInt(num1[1], 2);
    res.innerText = result.toString(2);
  } else if (res.innerText.includes("*")) {
    let result = parseInt(num1[0], 2) * parseInt(num1[1], 2);
    res.innerText = result.toString(2);
  } else if (res.innerText.includes("/")) {
    let result = parseInt(num1[0], 2) / parseInt(num1[1], 2);
    res.innerText = result.toString(2);
  } else if (res.innerText.includes("-")) {
    let result = parseInt(num1[0], 2) - parseInt(num1[1], 2);
    res.innerText = result.toString(2);
  }
});

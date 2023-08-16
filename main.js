// 1
let firstresult = document.querySelector(".firstresult");
let firstNumb = 0;
while (firstNumb < 10) {
  firstNumb++;
  firstresult.innerHTML += `
<p>${firstNumb}</p>
`;
}
// 2
let secondresult = document.querySelector(".secondresult");
for (let secondNumb = 2; secondNumb <= 20; secondNumb++) {
  if (secondNumb % 2 != 0) {
    continue;
  }
  secondresult.innerHTML += `
<p>${secondNumb}</p>
`;
}
// 3
let thirdresult = document.querySelector(".thirdresult");
for (let thirdNumb = 0; thirdNumb <= 10; thirdNumb++) {
  let result = thirdNumb * 7;
  thirdresult.innerHTML += `
<p>${thirdNumb} * 7 = ${result}</p>
`;
}
// 4
let fourthresult = document.querySelector(".fourthresult");
let m = [1, 2, 3, 4, 5];
let index = 0;
while (index < m.length) {
  let fourthNumb = m[index];
  fourthresult.innerHTML += `
<p>${fourthNumb}</p>
`;
  index++;
}
// 5
let fifthresult = document.querySelector(".fifthresult");
let secondM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let secondIndex = 0; secondIndex < secondM.length; secondIndex++) {
  if (secondM[secondIndex] == 7) {
    break;
  }
  fifthresult.innerHTML += `
<p>${secondM[secondIndex]}</p>
`;
}
// 6
let sixthresult = document.querySelector(".sixthresult");
let n = 10;
for (let sixthNumb = 1; sixthNumb < n; sixthNumb++) {
  if (sixthNumb >= n) {
    break;
  }
  sixthresult.innerHTML += `
<p>${sixthNumb}</p>
`;
}

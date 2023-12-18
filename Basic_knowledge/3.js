/*Create a JavaScript program that defines a function which takes two values and determines the even values between them*/

function evenValues(inic, fim) {
  for (var i = inic; i <= fim; i++) {
    if (i % 2 === 0) {
      console.log("Even: " + i);
    }
  }
}

evenValues(1, 10);

const evenValuesArrowFunc = (inic, fim) => {
  for (var i = inic; i <= fim; i++) {
    if (i % 2 === 0) {
      console.log("Even: " + i);
    }
  }
};

evenValuesArrowFunc(1, 20);

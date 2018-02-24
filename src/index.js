module.exports = function solveEquation(equation) {
  let str = equation;
  let a_str = str.substring(0, str.indexOf(" * x^2 "));
  let b_str = str.substring(str.indexOf(" * x^2 ") + 7, str.indexOf(" * x "));
  let c_str = str.substring(str.indexOf(" * x ") + 5);

  let a = Number(a_str.replace(/\s+/g, ''));
  let b = Number(b_str.replace(/\s+/g, ''));
  let c = Number(c_str.replace(/\s+/g, ''));

  let D = b * b - 4 * a * c;

  let x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));

  let x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));

  if (x1 < x2) {
    return [x1, x2]
  }
  else {
    return [x2, x1];
  }

}

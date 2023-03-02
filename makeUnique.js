const makeUnique = (string) => {
  let uniqueOnly = [];
  let stringArr = string.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (!uniqueOnly.includes(stringArr[i])) {
      uniqueOnly.push(stringArr[i]);
    }
  }
  let answer = uniqueOnly.join('');
  return answer;
};

console.log(makeUnique("iwanttoclimbamountain"));

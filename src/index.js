module.exports = function check(str, bracketsConfig) {
  const bracketsObj = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    let openBracket = bracketsConfig[i][0];
    let closeBracket = bracketsConfig[i][1];
    bracketsObj[openBracket] = closeBracket;
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];
    let lastBracketInStack = stack[stack.length - 1];

    if (bracketsObj[lastBracketInStack] === bracket && stack.length === 0) {
      return false;
    }

    if (bracketsObj[lastBracketInStack] !== bracket) {
      stack.push(bracket);
    } else {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
};

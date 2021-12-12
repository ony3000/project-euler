function isNumberArray(arg: unknown[]): arg is number[] {
  return Array.isArray(arg) && arg.length > 0 && arg.every((element) => (typeof element === 'number'));
}

function isBigIntArray(arg: unknown[]): arg is bigint[] {
  return Array.isArray(arg) && arg.length > 0 && arg.every((element) => (typeof element === 'bigint'));
}

function isStringArray(arg: unknown[]): arg is string[] {
  return Array.isArray(arg) && arg.length > 0 && arg.every((element) => (typeof element === 'string'));
}

export {
  isNumberArray,
  isBigIntArray,
  isStringArray,
};

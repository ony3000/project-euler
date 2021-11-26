type SolutionFunction = () => number | string | null;

interface Dictionary<Type> {
  [key: string]: Type;
}

export {
  SolutionFunction,
  Dictionary,
};

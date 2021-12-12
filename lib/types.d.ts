type SolutionFunction = () => number | string | null;

type NumberPair = [number, number];

interface Dictionary<Type> {
  [key: string]: Type;
}

export {
  SolutionFunction,
  NumberPair,
  Dictionary,
};

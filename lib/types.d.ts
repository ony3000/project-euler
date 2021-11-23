type SolutionFunction = () => number | string | null;

interface NumberDictionary {
  [key: string]: number;
}

interface StringDictionary {
  [key: string]: string;
}

export {
  SolutionFunction,
  NumberDictionary,
  StringDictionary,
};

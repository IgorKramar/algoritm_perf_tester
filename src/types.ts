export interface AlgorithmInfo {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  inputType: string; // Описание типа входных данных
  outputType: string; // Описание типа выходных данных
}

export type Algorithm<I, O> = {
  (input: I): O;
  info: AlgorithmInfo;
};

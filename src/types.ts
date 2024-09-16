export interface AlgorithmInfo {
  name: string;
  description: string;
  timeComplexity: Complexity;
  spaceComplexity: Complexity;
  inputType: InputDataType; // Описание типа входных данных
  outputType: OutputDataType; // Описание типа выходных данных
  sorted?: boolean;
}

export type Algorithm<I, O> = {
  (input: I): O;
  info: AlgorithmInfo;
};

export enum InputDataType {
  NumberArray = 'number[]',
  StringArray = 'string[]',
  BooleanArray = 'boolean[]',
  DateArray = 'date[]',
  ObjectArray = 'object[]',
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date'
}

export enum OutputDataType {
  NumberArray = 'number[]',
  StringArray = 'string[]',
  BooleanArray = 'boolean[]',
  DateArray = 'date[]',
  ObjectArray = 'object[]',
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date'
}

export enum Complexity {
  // Постоянное время
  Constant = 'O(1)', // Постоянное время
  AmortizedConstant = 'O(1) amortized', // Амортизированное постоянное время (например, динамические массивы)

  // Логарифмическое и сублогарифмическое время
  Logarithmic = 'O(log n)', // Логарифмическое время, уникально для бинарных деревьев
  LogLogarithmic = 'O(log log n)', // Двойной логарифм

  // Линейные и полиномиальные сложности
  Linear = 'O(n)', // Линейное время, уникально для обхода графов и поиска
  Linearithmic = 'O(n log n)', // Линейно-логарифмическое, уникально для сортировки
  Quadratic = 'O(n^2)', // Квадратичное, уникально для графов (например, Floyd-Warshall)
  Cubic = 'O(n^3)', // Кубическое, уникально для более сложных графов

  // Экспоненциальные сложности
  Exponential = 'O(2^n)', // Экспоненциальное, уникально для алгоритмов динамического программирования
  SuperExponential = 'O(n^n)', // Суперэкспоненциальное

  // Факториальная сложность
  Factorial = 'O(n!)', // Факториальное время для переборов (например, задачи о путешествующем торговце)

  // Специфичные для графов
  LinearGraphTraversal = 'O(V + E)', // Уникально для линейного обхода графов (DFS, BFS)
  BellmanFord = 'O(VE)', // Уникально для Bellman-Ford
  Dijkstra = 'O((V + E) log V)', // Уникально для Dijkstra
  FloydWarshall = 'O(V^3)', // Уникально для алгоритма Флойда-Уоршелла
  PrimKruskal = 'O(E log V)', // Уникально для алгоритмов Прима и Краскала

  // Многомерные структуры
  LogarithmicDimension = 'O(log n^d)', // Логарифмическое в d-мерных структурах
  PolynomialDimension = 'O(n^d)', // Полиномиальное в d-мерных структурах

  // Специфичные сложности для редких алгоритмов
  Ackermann = 'O(A(n, m))', // Уникальная сложность, встречающаяся в некоторых алгоритмах, таких как Union-Find
  SubLogarithmic = 'O(1/log n)', // Редкие случаи сублогарифмических сложностей
  NearLinear = 'O(n log* n)', // Почти линейное время, например, в сортировке с итерационным логарифмом
  SuperLinear = 'O(n^1.5)' // Суперлинейное время, встречается в редких случаях
}

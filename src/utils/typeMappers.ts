import { InputDataType, OutputDataType } from '../types.js';

export type InputTypeMap = {
  '[1, 2, 3]': number[];
  '[string, string, string]': string[];
  '[true, false, true]': boolean[];
  '[Date, Date, Date]': Date[];
  '[{}, {}, {}]': object[];
  '[[], [], []]': unknown[][];
  string: string;
  '123': number;
  true: boolean;
  Date: Date;
};

export type OutputTypeMap = {
  '[1, 2, 3]': number[];
  '[string, string, string]': string[];
  '[true, false, true]': boolean[];
  '[Date, Date, Date]': Date[];
  '[{}, {}, {}]': object[];
  '[[], [], []]': unknown[][];
  string: string;
  '123': number;
  true: boolean;
  Date: Date;
};

export type InputType<T extends InputDataType> = T extends keyof InputTypeMap
  ? InputTypeMap[T]
  : never;

export type OutputType<T extends OutputDataType> = T extends keyof OutputTypeMap
  ? OutputTypeMap[T]
  : never;

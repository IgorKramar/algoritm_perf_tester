import {
  Algorithm,
  Complexity,
  InputDataType,
  OutputDataType
} from '../types.js';

// Алгоритм, который принимает массив объектов и возвращает массив имён пользователей
const processUsers: Algorithm<
  { id: string; name: string; email: string }[],
  string[]
> = (users) => {
  return users.map((user) => user.name);
};

// Добавляем метаданные
processUsers.info = {
  name: 'Процессинг пользователей',
  description: 'Обрабатывает массив пользователей и возвращает их имена.',
  timeComplexity: Complexity.Linear, // Временная сложность: проход по массиву
  spaceComplexity: Complexity.Linear, // Пространственная сложность: новый массив с именами
  inputType: InputDataType.ObjectArray, // Тип входных данных
  outputType: OutputDataType.StringArray // Тип выходных данных
};

export default processUsers;
